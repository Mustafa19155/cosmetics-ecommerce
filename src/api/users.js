import { axiosClient } from "./axios";

export const getUsers = async () => {
  try {
    const res = await axiosClient.get("/admin/users");
    return res.data;
  } catch (err) {
    console.log(err);
    throw err.response.data.message;
  }
};
