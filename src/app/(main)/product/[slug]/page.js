import React from "react";
import ProductTop from "@/components/Product/ProductTop";
import ProductDetails from "@/components/Product/ProductDetails";
import AddReview from "@/components/Product/AddReview";
import Reviews from "@/components/Product/Reviews";
import { headers } from "next/headers";
import { getSingleProduct, getUserSingleProduct } from "@/api/products";
import { getReviewsOfProduct } from "@/api/reviews";
import { recalculateDiscount } from "@/actions/recalculateDiscount";
import { getUserOffers } from "@/api/offers";

const Page = async ({ params, searchParams }) => {
  const id = params.slug;
  const offers = await getUserOffers();
  const product = recalculateDiscount({
    products: [
      await getUserSingleProduct({
        id,
      }),
    ],
    allOffers: offers,
  })[0];
  const reviews = await getReviewsOfProduct({
    id,
  });

  return (
    <div className="mt-16 p-5 md:p-0 flex flex-col gap-16">
      <ProductTop product={product} />
      <ProductDetails product={product} />
      <p className="font-bold text-3xl text-center">Customer Reviews</p>
      <AddReview productId={id} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Page;
