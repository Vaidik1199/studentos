import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  generateResponse,
  generateStudyPlan,
} from "../controllers/aiController.js";

const router = express.Router();

router.post("/", protect, generateResponse);

router.post(
  "/study-plan",
  protect,
  generateStudyPlan
);

export default router;