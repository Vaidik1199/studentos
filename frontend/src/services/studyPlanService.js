import api from "../api/axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const saveStudyPlan = async (data) => {
  const response = await api.post(
    "/study-plans",
    data,
    getAuthConfig()
  );

  return response.data;
};

export const getStudyPlans = async () => {
  const response = await api.get(
    "/study-plans",
    getAuthConfig()
  );

  return response.data;
};

export const deleteStudyPlan = async (id) => {
  const response = await api.delete(
    `/study-plans/${id}`,
    getAuthConfig()
  );

  return response.data;
};