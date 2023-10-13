import { axiosClient } from "./axios";

export const getReviewsOfProduct = async ({ id }) => {
  try {
    const res = await axiosClient.get(`/api/product/review/${id}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const addReview = async ({ data }) => {
  try {
    const res = await axiosClient.post(`/users/review/add`, data);
    // return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getAdminReviews = async ({ id, page }) => {
  try {
    const res = await axiosClient.get(`/admin/reviews/${id}?page=${page}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const deleteReview = async ({ id }) => {
  try {
    const res = await axiosClient.delete(`/admin/review/delete/${id}`);
    // return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const getRandomReviews = async () => {
  try {
    const res = await axiosClient.get(`/api/reviews/limit`);

    return res.data.reviews;
  } catch (err) {
    throw err.response?.data?.message;
  }
};
