import { axiosClient } from "./axios";

export const getReviewsOfProduct = async ({ id }) => {
  try {
    const res = await axiosClient.get(`/api/product/review/${id}`);

    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export const addReview = async ({ data }) => {
  try {
    const res = await axiosClient.post(`/users/review/add`, data);
    console.log(res);
    // return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};
