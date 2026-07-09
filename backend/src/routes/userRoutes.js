import express from "express";
import protect from "../middleware/authMiddleware.js";
import {
  getProfile,
  updateProfile,
  deleteAccount,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/profile", protect, getProfile);

router.put("/profile", protect, updateProfile);

router.delete("/delete-account", protect, deleteAccount);

export default router;