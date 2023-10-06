import { axiosClient } from "./axios";

export const getAllCategories = async () => {
  try {
    const res = await axiosClient.get("/api/categories");

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getAdminCategories = async ({ page }) => {
  try {
    if (!page) {
      page = 1;
    }

    const res = await axiosClient.get(`/admin/category?page=${page}`);

    return res.data;
  } catch (err) {
    // throw err.response?.data?.message;
  }
};
export const addCategory = async ({ data }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.post("/admin/category/add", data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const editCategory = async ({ data, id }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.patch(`/admin/category/edit/${id}`, data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

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
