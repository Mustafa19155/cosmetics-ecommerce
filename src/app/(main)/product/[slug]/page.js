import React from "react";
import ProductDetailImg from "../../../../assets/images/product-detail.png";
import UserImg from "../../../../assets/images/home/testimonial.png";
import ProductTop from "@/components/Product/ProductTop";
import ProductDetails from "@/components/Product/ProductDetails";
import AddReview from "@/components/Product/AddReview";
import Reviews from "@/components/Product/Reviews";
import { headers } from "next/headers";
import { getSingleProduct, getUserSingleProduct } from "@/api/products";
import { getReviewsOfProduct } from "@/api/reviews";

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");
  const id = activePath.split("/")[activePath.split("/").length - 1];
  const product = await getUserSingleProduct({
    id,
  });
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
