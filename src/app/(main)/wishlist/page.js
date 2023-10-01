"use client";
import ProductFilters from "@/components/ProductFilters";
import ProductsWrapper from "@/components/Products/ProductsWrapper";
import PinkButton from "@/components/buttons/PinkButton";
import React, { useContext, useEffect, useState } from "react";
import FoundationImg from "../../../assets/images/home/foundation.png";
import { AuthContext } from "@/contexts/userContext";

const Page = () => {
  const [loading, setloading] = useState(true);
  const [data, setdata] = useState([]);

  const { wishlist } = useContext(AuthContext);

  useEffect(() => {
    setdata(wishlist);
    setloading(false);
  }, [wishlist]);

  return (
    <div className="my-16">
      <div className="text-center">
        <p className="font-bold  text-3xl">Favourite</p>
        <p className="text-secondary mt-1">Shop Our Favorites</p>
      </div>
      {data.length > 0 ? (
        <div>
          <div className="my-16">
            <ProductFilters />
          </div>
          <ProductsWrapper products={data} />
          <div className="w-fit mt-16 m-auto">
            <PinkButton text={"VIEW MORE"} className={"px-16"} />
          </div>
        </div>
      ) : (
        <p className="my-16 text-lg font-bold text-center">
          No items added to wishlist
        </p>
      )}
    </div>
  );
};

export default Page;
