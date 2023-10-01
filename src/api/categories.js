import { axiosClient } from "./axios";

export const getAllCategories = async () => {
  try {
    const res = await axiosClient.get("/api/categories");

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getAdminCategories = async () => {
  try {
    const res = await axiosClient.get("/admin/category");

    return res.data;
  } catch (err) {
    // throw err.response?.data?.message;
  }
};
export const addCategory = async ({ name, brand }) => {
  try {
    const res = await axiosClient.post("/admin/category/add", { name, brand });

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const deleteCategory = async ({ id }) => {
  try {
    const res = await axiosClient.delete(`/admin/category/delete/${id}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
