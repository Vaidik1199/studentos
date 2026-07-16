import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      default: "",
    },

    profilePicture: {
      url: {
        type: String,
        default: "",
      },

      publicId: {
        type: String,
        default: "",
      },
    },

    // ==========================
    // Authentication
    // ==========================

    provider: {
      type: String,
      enum: ["local", "google"],
      default: "local",
    },

    googleId: {
      type: String,
      default: "",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    registrationOtp: {
      type: String,
      default: null,
    },

    registrationOtpExpiry: {
      type: Date,
      default: null,
    },

    // ==========================
    // Forgot Password
    // ==========================

    resetPasswordOtp: {
      type: String,
      default: null,
    },

    resetPasswordOtpExpiry: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;