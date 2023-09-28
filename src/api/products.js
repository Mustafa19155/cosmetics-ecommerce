import { axiosClient } from "./axios";

export const getProducts = async () => {
  try {
    const res = await axiosClient.post("/api/products");

    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export const addProduct = async ({ name, brand }) => {
  try {
    const res = await axiosClient.post("/api/products");

    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};
