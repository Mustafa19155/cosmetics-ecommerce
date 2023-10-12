import React from "react";
import ManageProduct from "@/components/admin/product/ManageProduct";
import { getAllCategories } from "@/api/categories";
import { cookies, headers } from "next/headers";
import { getSingleProduct } from "@/api/products";
import { getAdminReviews } from "@/api/reviews";
import ProductReviews from "@/components/admin/product/ProductReviews";
import Reviews from "@/components/Product/Reviews";
import PinkButton from "@/components/buttons/PinkButton";

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  const id = activePath.split("/")[activePath.split("/").length - 1];
  const data = await getSingleProduct({
    id,
  });

  const categories = (await getAllCategories()).map((cat) => {
    return {
      name: cat.name,
      value: cat._id,
    };
  });

  return (
    <div>
      <ManageProduct
        product={{
          ...data,
          category: { ...data.category, value: data.category?._id },
        }}
        categories={categories}
      />

      <ProductReviews id={id} />
    </div>
  );
};

export default Page;
