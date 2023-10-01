import { axiosClient } from "./axios";

export const getBrands = async () => {
  try {
    const res = await axiosClient.get("/api/categories");

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getAdminBrands = async () => {
  try {
    const res = await axiosClient.get("/admin/brand");

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
export const addBrand = async ({ name }) => {
  try {
    const res = await axiosClient.post("/admin/brand/add", { name });

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
