"use client";
import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { getUser } from "@/api/user";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage("user", null);
  const [wishlist, setwishlist] = useLocalStorage("wishlist", []);
  const [cart, setcart] = useLocalStorage("cart", { total: 0, items: [] });

  // useEffect(() => {
  //   getUser()
  //     .then((res) => {
  //       setCurrentUser(res.user);
  //     })
  //     .catch((err) => {
  //       setCurrentUser(null);
  //     });
  // }, []);

  // useEffect(() => {
  //   if (cart.items.length > 0) {
  //     let finalTotal = 0;
  //     cart.items.map((item) => {
  //       finalTotal += item.quantity * item.product.discountedPrice;
  //     });
  //     setcart({ ...cart, total: finalTotal });
  //   } else {
  //     setcart({ ...cart, total: 0 });
  //   }
  // }, [cart.items]);

  const value = {
    cart,
    setcart,
    wishlist,
    setwishlist,
    currentUser,
    setUser: setCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
