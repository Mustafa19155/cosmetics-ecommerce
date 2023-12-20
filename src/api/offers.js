import { axiosClient } from "./axios";

export const getOffers = async () => {
  try {
    const res = await axiosClient.get("/admin/offers");

    return res.data.offers;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getUserOffers = async () => {
  try {
    const res = await axiosClient.get("/api/offers");
    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getGlobalOffers = async () => {
  try {
    const res = await axiosClient.get("/api/offers/global");
    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getBrandOffers = async () => {
  try {
    const res = await axiosClient.get("/api/offers");
    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const addOffer = async ({ data }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.post("/admin/offer/add", data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const deleteOffer = async ({ id }) => {
  try {
    const res = await axiosClient.delete(`/admin/offer/delete/${id}`);
    return res.data.offers;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const editOffer = async ({ data, id }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.patch(`admin/offer/edit/${id}`, data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getSingleOffer = async ({ id }) => {
  try {
    const res = await axiosClient.get(`/admin/offer/${id}`);
    return res.data.offer;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
