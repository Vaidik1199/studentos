import express from "express";

import protect from "../middleware/authMiddleware.js";
import { generateResponse } from "../controllers/aiController.js";

const router = express.Router();

router.post("/", protect, generateResponse);

export default router;