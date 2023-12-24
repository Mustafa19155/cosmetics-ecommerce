import { axiosClient } from "./axios";

export const send = async ({ data }) => {
  try {
    const response = await axiosClient.post("/api/contact/form", data);
    return response.data;
  } catch (err) {
    throw err;
  }
};
