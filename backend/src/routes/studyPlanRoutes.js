import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  saveStudyPlan,
  getStudyPlans,
  deleteStudyPlan,
} from "../controllers/studyPlanController.js";

const router = express.Router();

router.post("/", protect, saveStudyPlan);

router.get("/", protect, getStudyPlans);

router.delete("/:id", protect, deleteStudyPlan);

export default router;