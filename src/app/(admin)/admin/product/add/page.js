import React from "react";
import MainImg from "@/assets/images/edit-product.png";
import ManageProduct from "@/components/admin/product/ManageProduct";

const getCategories = async () => {
  return [
    {
      name: "category 1",
    },
    {
      name: "category 2",
    },
    {
      name: "category 3",
    },
    {
      name: "category 4",
    },
  ];
};

const Page = async () => {
  const categories = await getCategories();

  return (
    <div>
      <ManageProduct categories={categories} />
    </div>
  );
};

export default Page;
