import express from "express";

import protect from "../middleware/authMiddleware.js";

import { saveAINote } from "../controllers/noteController.js";

import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
} from "../controllers/noteController.js";

const router = express.Router();

router.post("/", protect, createNote);

router.get("/", protect, getNotes);

router.post("/from-ai", protect, saveAINote);

router.put("/:id", protect, updateNote);

router.delete("/:id", protect, deleteNote);

export default router;