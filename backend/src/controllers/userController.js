import bcrypt from "bcryptjs";
import User from "../models/User.js";
import Attendance from "../models/Attendance.js";
import Note from "../models/Note.js";
import Assignment from "../models/Assignment.js";
import StudyPlan from "../models/StudyPlan.js";

export const getProfile = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      data: req.user,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ================================
// Delete Account
// ================================

export const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Password is required.",
      });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Incorrect password.",
      });
    }

    // Delete all user-related data

await Attendance.deleteMany({
  user: user._id,
});

await Note.deleteMany({
  user: user._id,
});

await Assignment.deleteMany({
  user: user._id,
});

await StudyPlan.deleteMany({
  user: user._id,
});

// Finally delete user

await User.findByIdAndDelete(user._id);
    return res.status(200).json({
      success: true,
      message: "Account deleted successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

// ================================
// Update Profile
// ================================

export const updateProfile = async (req, res) => {
  try {
    const { fullName, email } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Full name and email are required.",
      });
    }

    const existingUser = await User.findOne({
      email,
      _id: { $ne: req.user._id },
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email is already in use.",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      {
        fullName,
        email,
      },
      {
        new: true,
        runValidators: true,
      }
    ).select("-password");

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully.",
      data: updatedUser,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};