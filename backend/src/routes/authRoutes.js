import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  registerUser,
  loginUser,
  forgotPassword,
  verifyOtp,
  resetPassword,
  getCurrentUser,
  changePassword,
} from "../controllers/authController.js";
const router = express.Router();

// Authentication
router.post("/register", registerUser);
router.post("/login", loginUser);

// Forgot Password
router.post("/forgot-password", forgotPassword);

router.post("/verify-otp", verifyOtp);

router.post("/reset-password", resetPassword);

router.get("/me", protect, getCurrentUser);

router.put("/change-password", protect, changePassword);

export default router;