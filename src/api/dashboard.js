import { axiosClient } from "./axios";

export const getDashboardStats = async () => {
  try {
    const res = await axiosClient.get("/admin/dashboard");
    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
