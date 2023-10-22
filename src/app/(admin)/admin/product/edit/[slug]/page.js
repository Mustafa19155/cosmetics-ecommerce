import React from "react";
import ManageProduct from "@/components/admin/product/ManageProduct";
import { headers } from "next/headers";
import { getSingleProduct } from "@/api/products";
import ProductReviews from "@/components/admin/product/ProductReviews";
import { getAllUserBrands } from "@/api/brands";

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  const id = activePath.split("/")[activePath.split("/").length - 1];
  const data = await getSingleProduct({
    id,
  });

  const brands = (await getAllUserBrands()).map((obj) => {
    return {
      ...obj,
      brand: {
        name: obj.brand.name,
        value: obj.brand._id,
      },
      categories: obj.categories.map((cat) => {
        return {
          name: cat.name,
          value: cat._id,
        };
      }),
    };
  });

  return (
    <div>
      <ManageProduct
        product={{
          ...data,
          category: { ...data.category, value: data.category?._id },
        }}
        brands={brands}
      />

      <ProductReviews id={id} />
    </div>
  );
};

export default Page;
