import { axiosClient } from "./axios";

export const getOffers = async () => {
  try {
    const res = await axiosClient.get("/admin/offer");
    return res.data.offers;
  } catch (err) {
    throw err.response.data.message;
  }
};

export const addOffer = async ({ data }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("starting_date", data.starting_date);
    formData.append("ending_date", data.ending_date);
    formData.append("discount", data.discount);
    data.images.map((img) => {
      formData.append("images", img);
    });

    const res = await axiosClient.post("/admin/offer/add", formData);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response.data.message;
  }
};

export const deleteOffer = async ({ id }) => {
  try {
    const res = await axiosClient.get("/admin/offer");
    return res.data.offers;
  } catch (err) {
    throw err.response.data.message;
  }
};
