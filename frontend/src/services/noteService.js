import api from "../api/axios";

const getAuthConfig = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getNotes = async () => {
  const response = await api.get(
    "/notes",
    getAuthConfig()
  );

  return response.data;
};

export const createNote = async (data) => {
  const response = await api.post(
    "/notes",
    data,
    getAuthConfig()
  );

  return response.data;
};

export const updateNote = async (id, data) => {
  const response = await api.put(
    `/notes/${id}`,
    data,
    getAuthConfig()
  );

  return response.data;
};

export const deleteNote = async (id) => {
  const response = await api.delete(
    `/notes/${id}`,
    getAuthConfig()
  );

  return response.data;
};

export const saveAINote = async (title, content) => {
  const response = await api.post(
    "/notes/from-ai",
    { title, content },
    getAuthConfig()
  );

  return response.data;
};