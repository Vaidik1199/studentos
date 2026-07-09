import api from "../api/axios";

// =========================
// Register
// =========================

export const registerUser = async (userData) => {
  const response = await api.post("/auth/register", userData);
  return response.data;
};

// =========================
// Login
// =========================

export const loginUser = async (userData) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};

// =========================
// Forgot Password
// =========================

export const forgotPassword = async (data) => {
  const response = await api.post("/auth/forgot-password", data);
  return response.data;
};

// =========================
// Verify OTP
// =========================

export const verifyOtp = async (data) => {
  const response = await api.post("/auth/verify-otp", data);
  return response.data;
};

// =========================
// Reset Password
// =========================

export const resetPassword = async (data) => {
  const response = await api.post("/auth/reset-password", data);
  return response.data;
};


export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");
  return response.data;
};

// =====================================
// Change Password
// =====================================

export const changePassword = async (passwordData) => {
  const response = await api.put(
    "/auth/change-password",
    passwordData
  );

  return response.data;
};