import api from "../api/axios";

// ========================================
// Get Logged-in User
// ========================================

export const getProfile = async () => {
  const response = await api.get("/users/profile");
  return response.data;
};

// ========================================
// Update Profile
// ========================================

export const updateProfile = async (userData) => {
  const response = await api.put("/users/profile", userData);
  return response.data;
};

// ========================================
// Delete Account
// ========================================

export const deleteAccount = async (password) => {
  const response = await api.delete("/users/delete", {
    data: {
      password,
    },
  });

  return response.data;
};