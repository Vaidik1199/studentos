import api from "../api/axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAssignments = async () => {
  const response = await api.get(
    "/assignments",
    getAuthConfig()
  );

  return response.data;
};

export const createAssignment = async (data) => {
  const response = await api.post(
    "/assignments",
    data,
    getAuthConfig()
  );

  return response.data;
};

export const updateAssignment = async (id, data) => {
  const response = await api.put(
    `/assignments/${id}`,
    data,
    getAuthConfig()
  );

  return response.data;
};

export const deleteAssignment = async (id) => {
  const response = await api.delete(
    `/assignments/${id}`,
    getAuthConfig()
  );

  return response.data;
};