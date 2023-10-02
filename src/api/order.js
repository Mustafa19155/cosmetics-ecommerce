import { axiosClient } from "./axios";

export const createOrder = async ({ data }) => {
  try {
    const res = await axiosClient.post("/api/order/create", data);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
