import { Redirect } from "@/actions/redirect";
import { deleteCookie, getCookie, setCookie } from "@/actions/serverActions";
import axios from "axios";
import { redirect } from "next/navigation";

export const axiosClient = axios.create();

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
axiosClient.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  common: {},
};

axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await getCookie({ cookieName: "jwt" });
      axiosClient.defaults.headers.common["Cookie"] = `jwt=${token.value}`;
    } catch (err) {}
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
    if (error.response?.status == 401) {
      if (
        error.response.config.url != "/users/login" &&
        error.response.config.url != "/users/user"
      ) {
        // await deleteCookie({ cookieName: "jwt" });
        // await setCookie({ cookieName: "jwt", cookieValue: null });
        // Redirect({ to: "/login" });
        if (typeof window != "undefined") {
          if (error.response.config.url.includes("/admin")) {
            // window.location.href = "/adminLogin";
          } else {
            window.location.href = "/login";
          }
        } else {
          try {
            redirect("/login");
          } catch (err) {
            redirect("/login");
          }
        }
      }
    }

    return Promise.reject(error);
  }
);
