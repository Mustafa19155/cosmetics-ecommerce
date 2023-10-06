import { axiosClient } from "./axios";

export const getUsers = async ({ page }) => {
  try {
    const res = await axiosClient.get(`/admin/users?page=${page}`);
    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
