"use client";
import React, { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import { AuthContext } from "@/contexts/userContext";

const ProductsWrapper = ({ products }) => {
  const { wishlist } = useContext(AuthContext);

  return (
    <div className="mt-8 w-full justify-center sm:justify-start flex flex-wrap gap-[4%] lg:gap-[2%]">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsWrapper;
