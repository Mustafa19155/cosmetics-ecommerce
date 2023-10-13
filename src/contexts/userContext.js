"use client";
import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { getUser } from "@/api/user";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage("user", null);
  const [wishlist, setwishlist] = useLocalStorage("wishlist", []);
  const [cart, setcart] = useLocalStorage("cart", { total: 0, items: [] });
  const [paymentIntentId, setpaymentIntentId] = useState("");
  const [offers, setoffers] = useState([]);

  const value = {
    cart,
    setcart,
    wishlist,
    setwishlist,
    currentUser,
    setUser: setCurrentUser,
    offers,
    paymentIntentId,
    setpaymentIntentId,
    setoffers,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
