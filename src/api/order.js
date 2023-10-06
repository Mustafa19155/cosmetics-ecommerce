import { axiosClient } from "./axios";
export const createOrder = async ({ data }) => {
  try {
    const res = await axiosClient.post("/api/order/create", data);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getAdminOrders = async ({ page }) => {
  try {
    const res = await axiosClient.get(`/admin/orders?page=${page}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getAdminFilteredOrders = async ({ page, filter }) => {
  try {
    const res = await axiosClient.get(
      `/admin/orders/filter?page=${page}&&filter=${filter}`
    );

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const deleteOrder = async ({ id }) => {
  try {
    const res = await axiosClient.delete(`admin/order/delete/${id}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getSingleOrder = async ({ id }) => {
  try {
    const res = await axiosClient.get(`admin/order/${id}`);

    return res.data.order;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const completeOrder = async ({ id }) => {
  try {
    const res = await axiosClient.patch(`admin/order/edit/${id}`);

    return res;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
