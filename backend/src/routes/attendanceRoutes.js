import express from "express";

import { createAttendance,
    getAttendance,
    updateAttendance,
    deleteAttendance,
} from "../controllers/attendanceController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createAttendance);
router.get("/", protect, getAttendance);
router.put("/:id", protect, updateAttendance);
router.delete("/:id", protect, deleteAttendance);

export default router;