import React from "react";
import MainImg from "@/assets/images/edit-product.png";
import ManageProduct from "@/components/admin/product/ManageProduct";
import {
  getAdminCategories,
  getAllAdminCategories,
  getAllCategories,
} from "@/api/categories";

const Page = async () => {
  const categories = (await getAllAdminCategories()).map((cat) => {
    return {
      ...cat,
      name: `${cat.name} (${cat.brand?.name})`,
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
