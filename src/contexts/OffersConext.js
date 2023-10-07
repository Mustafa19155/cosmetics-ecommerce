"use client";
import { getUserOffers } from "@/api/offers";
import React, { useEffect, useState } from "react";

export const OffersContext = React.createContext();

function ProductFilterProvider({ children }) {
  const [offers, setoffers] = useState([]);

  useEffect(() => {
    getUserOffers()
      .then((res) => {
        setoffers(res);
      })
      .catch((err) => {});
  }, []);

  const value = {
    offers,
    setoffers,
  };
  return (
    <OffersContext.Provider value={value}>{children}</OffersContext.Provider>
  );
}
export default ProductFilterProvider;
