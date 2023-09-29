"use client";
import ProductWrapper from "@/components/admin/product/ProductWrapper";
import React, { useEffect, useState } from "react";
import ProductImg from "../../../../assets/images/product-detail.png";
import { getAdminBrands } from "@/api/brands";
import { getAdminCategories } from "@/api/categories";
import { getAdminProducts } from "@/api/products";

const Page = () => {
  const [productsData, setproductsData] = useState(null);
  const [brandsData, setbrandsData] = useState(null);
  const [catsData, setcatsData] = useState(null);

  const [loading, setloading] = useState(true);

  const handleGetPros = async ({ page }) => {
    setproductsData(await getAdminProducts({ page }));
  };

  const handleGetBrands = async ({ page }) => {
    setbrandsData(await getAdminBrands());
  };

  const handleGetCats = async ({ page }) => {
    setcatsData(await getAdminCategories());
  };

  useEffect(() => {
    Promise.all([
      handleGetBrands({ page: 1 }),
      handleGetPros({ page: 1 }),
      handleGetCats({ page: 1 }),
    ])
      .then((res) => {
        setloading(false);
      })
      .catch((err) => {
        setloading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        ""
      ) : (
        <>
          <ProductWrapper
            setproducts={setproductsData}
            products={productsData}
            setbrands={setbrandsData}
            brands={brandsData}
            setsubCategories={setcatsData}
            subCategories={catsData}
            productPagination={handleGetPros}
            catsPagination={handleGetCats}
            brandsPagination={handleGetBrands}
          />
        </>
      )}
    </div>
  );
};

export default Page;
