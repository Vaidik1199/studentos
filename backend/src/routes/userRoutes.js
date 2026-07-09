import express from "express";
import protect from "../middleware/authMiddleware.js";

import {
  getProfile,
  deleteAccount,
} from "../controllers/userController.js";

const router = express.Router();

// Get Logged-in User Profile
router.get("/profile", protect, getProfile);

// Delete Account Permanently
router.delete("/delete", protect, deleteAccount);

export default router;