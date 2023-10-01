"use client";
import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

function ProductFilterProvider({ children }) {
  const [type, settype] = useState("");
  const [sortBy, setsortBy] = useState("");

  const value = {
    type,
    settype,
    sortBy,
    setsortBy,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
export default ProductFilterProvider;
