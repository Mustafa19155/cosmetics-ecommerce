"use client";
import React, { useEffect, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage("user", null);

  //   const [cart, setcart] = useState({ products: [], total: 0 });

  function checkAuth() {
    // checkLoggedIn()
    //   .then((activeUser) => {
    //     if (activeUser) {
    //       setCurrentUser(activeUser.user);
    //     } else {
    //       setCurrentUser(null);
    //     }
    //   })
    //   .catch((err) => {
    //     setCurrentUser(null);
    //   });
  }

  const value = {
    currentUser,
    setUser: setCurrentUser,
    checkAuth,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default AuthProvider;
