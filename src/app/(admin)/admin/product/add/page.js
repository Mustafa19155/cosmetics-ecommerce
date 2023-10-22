import React from "react";
import ManageProduct from "@/components/admin/product/ManageProduct";
import { getAllUserBrands } from "@/api/brands";

const Page = async () => {
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
      <ManageProduct brands={brands} />
    </div>
  );
};

export default Page;
