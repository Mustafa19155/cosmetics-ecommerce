import ProductFilters from "@/components/ProductFilters";
import ProductsWrapper from "@/components/Products/ProductsWrapper";
import React from "react";

const Page = () => {
  return (
    <div className="my-16">
      <div className="text-center">
        <p className="font-bold  text-3xl">Perfume</p>
        <p className="text-secondary mt-1">
          Indulge in Luxury: Explore our Exquisite Perfume Gift Sets Collection
        </p>
      </div>
      <div className="my-16">
        <ProductFilters />
      </div>
      <ProductsWrapper />
    </div>
  );
};

export default Page;
