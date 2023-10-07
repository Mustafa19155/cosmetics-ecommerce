import Cookies from "js-cookie";
import { axiosClient } from "./axios";

export const registerUser = async ({ name, email, password }) => {
  try {
    const res = await axiosClient.post("/users/register", {
      name,
      email,
      password,
    });

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const res = await axiosClient.post("/users/login", {
      email,
      password,
    });

    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const getUser = async () => {
  try {
    const res = await axiosClient.get("/users/user");

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const logout = async () => {
  try {
    const res = await axiosClient.get("/users/logout");

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const requestOtp = async ({ email }) => {
  try {
    const res = await axiosClient.get(`/users/otp/${email}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const verifyOtp = async ({ otp, email }) => {
  try {
    const res = await axiosClient.get(`/users/verify/otp/${email}/${otp}`);

    return res.data;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const resetPasword = async ({ password, email }) => {
  try {
    const res = await axiosClient.patch(`/users/reset/password`, {
      password,
      email,
    });

    return res;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const loginAdmin = async ({ email, password }) => {
  try {
    const res = await axiosClient.post("/admin/login", {
      email,
      password,
    });
    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const updateUser = async ({ data }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.patch("/users/profile/edit", data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};

export const getAdmin = async () => {
  try {
    const res = await axiosClient.get("/admin/admin");

    return res.data.admin;
  } catch (err) {
    throw err.response?.data?.message;
  }
};

export const updateAdmin = async ({ data }) => {
  try {
    axiosClient.defaults.headers = {
      "Content-Type": "multipart/form-data",
    };

    const res = await axiosClient.patch("/admin/profile/edit", data);

    axiosClient.defaults.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return res.data;
  } catch (err) {
    throw err.response.data;
  }
};
