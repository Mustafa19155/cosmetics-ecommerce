"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "../Products/ProductCard";

const TrendingProducts = ({ products }) => {
  const [activeTab, setactiveTab] = useState("new");

  const handleChangeTab = (value) => {
    setactiveTab(value);
  };

  const filterProducts = (pros) => {
    return pros.filter((pro) => pro.type == activeTab);
  };

  useEffect(() => {}, [activeTab]);

  return (
    <div>
      <p className="text-3xl font-bold text-center">Latest Products</p>
      <p className="text-secondary text-lg text-center">
        Discover Our Top Picks!
      </p>
      <div className="mt-8 w-full justify-center sm:justify-start flex flex-wrap gap-[4%] lg:gap-[2%]">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <div className="mt-8 w-full justify-center flex flex-wrap gap-[4%] lg:gap-[2%]"></div>
    </div>
  );
};

export default TrendingProducts;
