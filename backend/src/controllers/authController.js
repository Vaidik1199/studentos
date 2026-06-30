import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Register API working 🚀",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};