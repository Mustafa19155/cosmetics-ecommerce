import { axiosClient } from "./axios";

export const getBrands = async () => {
  try {
    const res = await axiosClient.get("/admin/brand/all");
    return res.data.brands;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getAdminBrands = async ({ page }) => {
  try {
    if (!page) {
      page = 1;
    }

    const res = await axiosClient.get(`/admin/brand?page=${page}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
export const addBrand = async ({ data }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.post("/admin/brand/add", data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const editBrand = async ({ data, id }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.patch(`/admin/brand/edit/${id}`, data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const deleteBrand = async ({ id }) => {
  try {
    const res = await axiosClient.delete(`/admin/brand/delete/${id}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getAllUserBrands = async () => {
  try {
    const res = await axiosClient.get(`/api/categories/products`);
    return res.data.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getUserSingleBrand = async ({ id }) => {
  try {
    const res = await axiosClient.get(`/api/products/categories/all/${id}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
