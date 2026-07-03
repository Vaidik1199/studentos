import api from "../api/axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAttendance = async () => {
  const response = await api.get(
    "/attendance",
    getAuthConfig()
  );

  return response.data;
};

export const createAttendance = async (data) => {
  const response = await api.post(
    "/attendance",
    data,
    getAuthConfig()
  );

  return response.data;
};

export const updateAttendance = async (id, data) => {
  const response = await api.put(
    `/attendance/${id}`,
    data,
    getAuthConfig()
  );

  return response.data;
};

export const deleteAttendance = async (id) => {
  const response = await api.delete(
    `/attendance/${id}`,
    getAuthConfig()
  );

  return response.data;
};