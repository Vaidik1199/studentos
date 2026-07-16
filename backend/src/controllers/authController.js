import bcrypt from "bcryptjs";
import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import { OAuth2Client } from "google-auth-library";
import generateOtp from "../utils/generateOtp.js";
import sendEmail from "../utils/sendEmail.js";
import {
  forgotPasswordTemplate,
  registrationOtpTemplate,
} from "../utils/emailTemplates.js";
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export const registerUser = async (req, res) => {
  try {
    const { fullName, password } = req.body;
    const email = req.body.email.trim().toLowerCase();

    if (!fullName || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please fill all required fields.",
      });
    }

    let user = await User.findOne({ email });

    // Email already verified
    if (user && user.isVerified) {
      return res.status(409).json({
        success: false,
        message: "Email is already registered.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const otp = generateOtp();

    if (!user) {
      user = await User.create({
        fullName,
        email,
        password: hashedPassword,
        registrationOtp: otp,
        registrationOtpExpiry: new Date(
          Date.now() + 10 * 60 * 1000
        ),
        isVerified: false,
      });
    } else {
      user.fullName = fullName;
      user.password = hashedPassword;
      user.registrationOtp = otp;
      user.registrationOtpExpiry = new Date(
        Date.now() + 10 * 60 * 1000
      );

      await user.save();
    }

    await sendEmail({
      to: email,
      subject: "Verify your StudentOS Account",
      html: registrationOtpTemplate(fullName, otp),
    });

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
      email,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const verifyRegistrationOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required.",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Account already verified.",
      });
    }

    if (
      user.registrationOtp !== otp ||
      new Date() > user.registrationOtpExpiry
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP.",
      });
    }

    user.isVerified = true;

    console.log("Setting isVerified:", user.isVerified);

    user.registrationOtp = null;
    user.registrationOtpExpiry = null;

    await user.save();

    console.log("User saved.");

    const updatedUser = await User.findById(user._id);

    console.log(
      "Database isVerified:",
      updatedUser.isVerified
    );

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Email verified successfully.",
      token,
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePicture: user.profilePicture,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const resendRegistrationOtp = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: "Account already verified.",
      });
    }

    const otp = generateOtp();

    user.registrationOtp = otp;
    user.registrationOtpExpiry = new Date(
      Date.now() + 10 * 60 * 1000
    );

    await user.save();

    await sendEmail({
      to: user.email,
      subject: "StudentOS Email Verification OTP",
      html: registrationOtpTemplate(
        user.fullName,
        otp
      ),
    });

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};


// ==========================
// Login User (Temporary)
// ==========================

export const loginUser = async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email.trim().toLowerCase();

    // Check required fields
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    if (user.provider === "google") {
      return res.status(400).json({
        success: false,
        message:
          "This account was created using Google. Please sign in with Google or set a password from your account settings.",
      });
    }

    if (!user.isVerified) {
      return res.status(403).json({
        success: false,
        message: "Please verify your email before logging in.",
      });
    }

    // Compare password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Login successful.",
      token,
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePicture: user.profilePicture,
        provider: user.provider,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const googleLogin = async (req, res) => {
  try {
    const { credential } = req.body;

    if (!credential) {
      return res.status(400).json({
        success: false,
        message: "Google credential is required.",
      });
    }

    const ticket = await client.verifyIdToken({
      idToken: credential,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = ticket.getPayload();

    const {
      email,
      name,
      picture,
      sub,
      email_verified,
    } = payload;

    if (!email_verified) {
      return res.status(401).json({
        success: false,
        message: "Google email not verified.",
      });
    }

    let user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      user = await User.create({
        fullName: name,
        email: email.toLowerCase(),
        password: "",
        googleId: sub,
        provider: "google",
        profilePicture: {
          url: picture,
          publicId: "",
        },
      });
    }

    const token = generateToken(user._id);

    return res.status(200).json({
      success: true,
      message: "Google login successful.",
      token,
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        profilePicture: user.profilePicture,
        provider: user.provider,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Google authentication failed.",
    });
  }
};

// ==========================
// Forgot Password
// ==========================

export const forgotPassword = async (req, res) => {
  try {
    const email = req.body.email?.trim().toLowerCase();

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required.",
      });
    }

    const user = await User.findOne({ email });

    console.log("User found:", user.email);
    console.log("Before verification:", user.isVerified);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "No account found with this email.",
      });
    }

    // Generate OTP
    const otp = generateOtp();

    // Save OTP & expiry (10 minutes)
    user.resetPasswordOtp = otp;
    user.resetPasswordOtpExpiry = new Date(Date.now() + 10 * 60 * 1000);

    await user.save();

    // Send Email
    await sendEmail({
      to: user.email,
      subject: "StudentOS Password Reset OTP",
      html: forgotPasswordTemplate(user.fullName, otp),
    });

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully to your email.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to send OTP.",
    });
  }
};

// ==========================
// Verify OTP
// ==========================

export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: "Email and OTP are required.",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (!user.resetPasswordOtp) {
      return res.status(400).json({
        success: false,
        message: "No OTP found. Please request a new OTP.",
      });
    }

    if (user.resetPasswordOtp !== otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP.",
      });
    }

    if (new Date() > user.resetPasswordOtpExpiry) {
      return res.status(400).json({
        success: false,
        message: "OTP has expired.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "OTP verified successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ==========================
// Reset Password
// ==========================

export const resetPassword = async (req, res) => {
  try {
    const { email, otp, password } = req.body;

    if (!email || !otp || !password) {
      return res.status(400).json({
        success: false,
        message: "Email, OTP and password are required.",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters.",
      });
    }

    const user = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    if (
      user.resetPasswordOtp !== otp ||
      new Date() > user.resetPasswordOtpExpiry
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP.",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    // Clear OTP after successful reset
    user.resetPasswordOtp = null;
    user.resetPasswordOtpExpiry = null;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password reset successful. You can now login.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getCurrentUser = async (req, res) => {
  try {
    const user = req.user;

    return res.status(200).json({
      success: true,
      data: {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        createdAt: user.createdAt,
        profilePicture: user.profilePicture,
        provider: user.provider,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ==========================
// Change Password
// ==========================

export const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    if (newPassword.length < 6) {
      return res.status(400).json({
        success: false,
        message: "New password must be at least 6 characters.",
      });
    }

    const user = await User.findById(req.user._id);

    const isMatch = await bcrypt.compare(currentPassword, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Current password is incorrect.",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    return res.status(200).json({
      success: true,
      message: "Password changed successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
