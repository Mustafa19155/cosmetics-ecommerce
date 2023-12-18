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
import { recalculateDiscount } from "@/actions/recalculateDiscount";
import { getUserOffers } from "@/api/offers";

const Page = async ({ params, searchParams }) => {
  const offers = await getUserOffers();
  let data = null;
  if (searchParams.name) {
    data = await recalculateDiscount({
      products: await searchProduct({ name: searchParams.name }),
      allOffers: offers,
    });
  } else if (searchParams.category) {
    searchParams.category = searchParams.category.replace("replaceand", "&");
    data = recalculateDiscount({
      products: await getProductsByCategory({ name: searchParams.category }),
      allOffers: offers,
    });
  } else {
    redirect("/");
  }
  return (
    <div className="my-16">
      <div className="text-center">
        <p className="font-bold  text-3xl">
          {searchParams.name ? (
            <span className="flex gap-2 justify-center">
              Showing <span className="notranslate">{searchParams.name}</span>
            </span>
          ) : (
            <span className="notranslate">{searchParams.category}</span>
          )}
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
