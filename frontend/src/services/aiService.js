import api from "../api/axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const askAI = async (prompt) => {
  const response = await api.post(
    "/ai",
    { prompt },
    getAuthConfig()
  );

  return response.data;
};