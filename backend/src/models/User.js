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
      required: [true, "Password is required"],
      minlength: 6,
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

    // Forgot Password OTP

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