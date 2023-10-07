import ProductFilters from "@/components/ProductFilters";
import React from "react";
import {
  getLatestProducts,
  getProductsByCategory,
  searchProduct,
} from "@/api/products";
import { redirect } from "next/navigation";
import ProductCard from "@/components/Products/ProductCard";
import ProductsWrapper from "@/components/Products/ProductsWrapper";

const Page = async ({ params, searchParams }) => {
  let data = null;
  if (searchParams.name) {
    data = await searchProduct({ name: searchParams.name });
  } else if (searchParams.category) {
    data = await getProductsByCategory({ name: searchParams.category });
  } else {
    redirect("/");
  }

  return (
    <div className="my-16">
      <div className="text-center">
        <p className="font-bold  text-3xl">
          {searchParams.name
            ? `Showing '${searchParams.name}'`
            : searchParams.category}
        </p>
        <p className="text-secondary mt-1">
          {searchParams.name
            ? `Found ${data.length} results for your search`
            : "Indulge in Luxury: Explore our Exquisite Perfume Gift Sets Collection"}
        </p>
      </div>
      <ProductsWrapper products={data} />
    </div>
  );
};

export default Page;
