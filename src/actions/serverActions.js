"use server";

import { cookies } from "next/headers";

export const setCookie = async ({ cookieName, cookieValue }) => {
  const cookieStore = cookies();
  cookieStore.set(cookieName, cookieValue);
};
export const getCookie = async ({ cookieName }) => {
  const cookieStore = cookies();
  return cookieStore.get(cookieName);
};

export const deleteCookie = async ({ cookieName }) => {
  const cookieStore = cookies();
  return cookieStore.delete(cookieName);
};
