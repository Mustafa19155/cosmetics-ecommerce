import { axiosClient } from "./axios";

export const createPayment = async ({ amount }) => {
  try {
    const res = await axiosClient.post("/api/payment/create", { amount });
    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const updatePayment = async ({ amount, id }) => {
  try {
    const res = await axiosClient.patch(`/api/payment/update/${id}`, {
      amount,
    });
    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
