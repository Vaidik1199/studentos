import api from "../api/axios";

export const uploadProfilePicture = async (file) => {
  const formData = new FormData();

  formData.append("profilePicture", file);

  const response = await api.put(
    "/upload/profile-picture",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};