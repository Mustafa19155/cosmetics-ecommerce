"use client";
import { getAllUserBrands } from "@/api/brands";
import React, { useEffect, useState } from "react";

export const BrandsContext = React.createContext();

function BrandsContextProvider({ children }) {
  const [brands, setbrands] = useState([]);

  useEffect(() => {
    getAllUserBrands()
      .then((res) => {
        setbrands(res);
      })
      .catch((err) => {});
  }, []);

  const value = {
    brands,
    setbrands,
  };
  return (
    <BrandsContext.Provider value={value}>{children}</BrandsContext.Provider>
  );
}
export default BrandsContextProvider;
