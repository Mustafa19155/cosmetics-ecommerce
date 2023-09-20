"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";

const ProductsWrapper = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center sm:justify-between">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsWrapper;
