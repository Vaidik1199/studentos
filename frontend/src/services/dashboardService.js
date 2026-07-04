import api from "../api/axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getDashboardStats = async () => {
  const response = await api.get(
    "/dashboard",
    getAuthConfig()
  );

  return response.data;
};