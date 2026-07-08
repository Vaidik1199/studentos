import api from "../api/axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const askAI = async (prompt, history) => {
  const response = await api.post(
    "/ai",
    {
      prompt,
      history,
    },
    getAuthConfig()
  );

  return response.data;
};

export const generateStudyPlan = async (data) => {
  const response = await api.post(
    "/ai/study-plan",
    data,
    getAuthConfig()
  );

  return response.data;
};