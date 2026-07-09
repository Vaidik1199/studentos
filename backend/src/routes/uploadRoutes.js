import express from "express";

import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/uploadMiddleware.js";

import { uploadProfilePicture } from "../controllers/uploadController.js";

const router = express.Router();

router.put(
  "/profile-picture",
  protect,
  upload.single("profilePicture"),
  uploadProfilePicture
);

export default router;