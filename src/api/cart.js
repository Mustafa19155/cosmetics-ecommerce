import { axiosClient } from "./axios";

export const validateCart = async ({ array }) => {
  try {
    const res = await axiosClient.post("/api/cart/items", { array });

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
