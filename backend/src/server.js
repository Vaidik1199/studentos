import authRoutes from "./routes/authRoutes.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
import attendanceRoutes from "./routes/attendanceRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/noteRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";

dotenv.config();

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