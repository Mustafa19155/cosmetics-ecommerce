import ProductFilters from "@/components/ProductFilters";
import ProductsWrapper from "@/components/Products/ProductsWrapper";
import React from "react";
import { getLatestProducts, searchProduct } from "@/api/products";

const Page = async ({ params, searchParams }) => {
  const data = await searchProduct({ name: searchParams.name });

  return (
    <div className="my-16">
      <div className="text-center">
        <p className="font-bold  text-3xl">
          {searchParams ? `Showing '${searchParams.name}'` : "Perfume"}
        </p>
        <p className="text-secondary mt-1">
          {searchParams
            ? `Found ${data.length} results for your search`
            : "Indulge in Luxury: Explore our Exquisite Perfume Gift Sets Collection"}
        </p>
      </div>
      <div className="my-16">
        <ProductFilters />
      </div>
      <ProductsWrapper products={data} />
    </div>
  );
};

export default Page;
