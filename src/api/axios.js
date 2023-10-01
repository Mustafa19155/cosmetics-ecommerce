import axios from "axios";
import Cookies from "js-cookie";

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

axiosClient.defaults.withCredentials = true;

// axiosClient.interceptors.request.use(
//   (config) => {
//     const token = Cookies.get("jwt");

//     // const token = JSON.parse(localStorage.getItem("user"));
//     if (token) {
//       config.headers["jwt"] = `${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    if (error.response?.status == 401) {
      if (
        error.response.config.url != "/users/login"
        // error.response.config.url.trim() != "/users/user".trim()
      ) {
        if (error.response.config.url.includes("/admin")) {
          window.location.href = "/adminLogin";
        } else {
          window.location.href = "/login";
        }
      }
    }
    return Promise.reject(error);
  }
);
