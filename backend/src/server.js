import "dotenv/config";

import express from "express";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import noteRoutes from "./routes/noteRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";
import studyPlanRoutes from "./routes/studyPlanRoutes.js";
import "./config/mail.js";
import emailRoutes from "./routes/emailRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/notes", noteRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/study-plans", studyPlanRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/upload", uploadRoutes);

app.get("/", (_, res) => {
  res.json({
    success: true,
    message: "StudentOS API is running 🚀",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});