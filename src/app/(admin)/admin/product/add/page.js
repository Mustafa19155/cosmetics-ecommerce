import React from "react";
import MainImg from "@/assets/images/edit-product.png";
import ManageProduct from "@/components/admin/product/ManageProduct";
import { getAdminCategories, getAllCategories } from "@/api/categories";

const Page = async () => {
  const categories = (await getAllCategories()).map((cat) => {
    return {
      ...cat,
      name: cat.name,
      value: cat._id,
    };
  });

  return (
    <div>
      <ManageProduct categories={categories} />
    </div>
  );
};

export default Page;
