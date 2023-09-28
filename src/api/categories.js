import { axiosClient } from "./axios";

export const getCategories = async () => {
  try {
    const res = await axiosClient.post("/api/categories");

    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export const addCategory = async ({ name, brand }) => {
  try {
    const res = await axiosClient.post("/api/categories");

    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};
