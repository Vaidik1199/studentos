import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createAssignment,
  getAssignments,
  updateAssignment,
  deleteAssignment,
} from "../controllers/assignmentController.js";

const router = express.Router();

router.post("/", protect, createAssignment);

router.get("/", protect, getAssignments);

router.put("/:id", protect, updateAssignment);

router.delete("/:id", protect, deleteAssignment);

export default router;