import api from "../api/axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAnalytics = async () => {
  const response = await api.get(
    "/analytics",
    getAuthConfig()
  );

  return response.data;
};