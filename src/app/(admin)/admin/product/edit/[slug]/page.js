"use client";
import React, { useEffect, useState } from "react";
import ManageProduct from "@/components/admin/product/ManageProduct";
import { getSingleProduct } from "@/api/products";
import ProductReviews from "@/components/admin/product/ProductReviews";
import { getAllUserBrands } from "@/api/brands";

const Page = ({ params }) => {
  const id = params.slug;

  const [data, setdata] = useState(null);
  const [brands, setbrands] = useState(null);

  const getData = async () => {
    setdata(
      await getSingleProduct({
        id,
      })
    );
  };
  const handleGetBrands = async () => {
    setbrands(
      (await getAllUserBrands()).map((obj) => {
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
      })
    );
  };

  useEffect(() => {
    getData();
    handleGetBrands();
  }, []);

  return (
    <div>
      {data && brands && (
        <>
          <ManageProduct
            product={{
              ...data,
              category: { ...data.category, value: data.category?._id },
            }}
            brands={brands}
          />

          <ProductReviews id={id} />
        </>
      )}
    </div>
  );
};

export default Page;
