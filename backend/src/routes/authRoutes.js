import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  registerUser,
  verifyRegistrationOtp,
  resendRegistrationOtp,
  loginUser,
  googleLogin,
  forgotPassword,
  verifyOtp,
  resetPassword,
  getCurrentUser,
  changePassword,
} from "../controllers/authController.js";

const router = express.Router();

// ==========================
// Authentication
// ==========================

router.post("/register", registerUser);

router.post("/verify-registration", verifyRegistrationOtp);

router.post(
  "/resend-registration-otp",
  resendRegistrationOtp
);

router.post("/login", loginUser);

router.post("/google", googleLogin);

// ==========================
// Forgot Password
// ==========================

router.post("/forgot-password", forgotPassword);

router.post("/verify-otp", verifyOtp);

router.post("/reset-password", resetPassword);

// ==========================
// Protected Routes
// ==========================

router.get("/me", protect, getCurrentUser);

router.put("/change-password", protect, changePassword);

export default router;