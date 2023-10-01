import React from "react";
import MainImg from "@/assets/images/edit-product.png";
import ManageProduct from "@/components/admin/product/ManageProduct";
import { getAllCategories } from "@/api/categories";
import { cookies, headers } from "next/headers";
import { getSingleProduct } from "@/api/products";

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  const data = await getSingleProduct({
    id: activePath.split("/")[activePath.split("/").length - 1],
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
    </div>
  );
};

export default Page;
