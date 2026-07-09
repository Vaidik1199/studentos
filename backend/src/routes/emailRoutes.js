import express from "express";
import { testEmail } from "../controllers/emailController.js";

const router = express.Router();

router.get("/test", testEmail);

export default router;