import { axiosClient } from "./axios";

export const getProducts = async () => {
  try {
    const res = await axiosClient.post("/api/products");

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
export const getProductsByCategory = async ({ name }) => {
  try {
    const res = await axiosClient.get(`/api/products/${name}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
export const getAdminProducts = async ({ page }) => {
  if (!page) {
    page = 1;
  }
  try {
    const res = await axiosClient.get(`/admin/product?page=${page}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const addProduct = async ({ data }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.post("admin/product/add", data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    console.log(err);
    throw err.response?.data?.message;
  }
};

export const deleteProduct = async ({ id }) => {
  try {
    const res = await axiosClient.delete(`admin/product/delete/${id}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getSingleProduct = async ({ id }) => {
  try {
    const res = await axiosClient.get(`admin/product/${id}`);

    return res.data.product;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const editProduct = async ({ data, id }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };
    const res = await axiosClient.patch(`admin/product/edit/${id}`, data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getLatestProducts = async () => {
  try {
    const res = await axiosClient.get(`/api/products/filter`);
    return res.data.products;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getUserSingleProduct = async ({ id }) => {
  try {
    const res = await axiosClient.get(`api/product/single/${id}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const searchProduct = async ({ name }) => {
  try {
    const res = await axiosClient.get(`api/product/${name}?name=${name}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const searchAdminProducts = async ({ value, type }) => {
  try {
    const res = await axiosClient.get(`admin/${type}/search?name=${value}`);
    if (res.data.data) {
      return res.data.data;
    } else {
      return res.data;
    }
  } catch (err) {
    throw err.response?.data?.message;
  }
};
