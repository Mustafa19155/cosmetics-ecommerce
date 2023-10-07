import { axiosClient } from "./axios";

export const getUsers = async ({ page }) => {
  try {
    const res = await axiosClient.get(`/admin/users?page=${page}`);
    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getSingleUser = async ({ id }) => {
  try {
    const res = await axiosClient.get(`/admin/user/${id}`);
    return res.data.user;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const updateUserFromAdmin = async ({ data, id }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.patch(`/admin/user/edit/${id}`, data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};
