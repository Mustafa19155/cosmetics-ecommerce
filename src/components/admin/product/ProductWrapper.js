"use client";
import React, { useEffect, useState } from "react";
import ProductTop from "./ProductTop";
import ProductsTable from "../Tables/ProductsTable";
import TableWrapper from "../Tables/TableWrapper";
import CategoryTable from "../Tables/BrandsTable";
import SubCategoryTable from "../Tables/SubCategoryTable";
import { getAdminProducts } from "@/api/products";

const ProductWrapper = ({
  setproducts,
  products,
  setbrands,
  brands,
  setsubCategories,
  subCategories,
  productPagination,
  catsPagination,
  brandsPagination,
}) => {
  const [currentTab, setcurrentTab] = useState("products");

  const searchCols = ["name"];
  const filterOptions = [
    {
      name: "Product name",
      value: "name",
    },
    {
      name: "Availability",
      value: "availability",
    },
    {
      name: "Price",
      value: "price",
    },
  ];

  const handlePagination = ({ page }) => {
    if (currentTab == "products") {
      productPagination({ page });
    } else if (currentTab == "brands") {
      brandsPagination({ page });
    } else {
      catsPagination({ page });
    }
  };

  return (
    <div>
      <ProductTop
        currentTab={currentTab}
        setcurrentTab={setcurrentTab}
        brands={brands.brands}
      />

      <TableWrapper
        brands={brands.brands}
        showFilters={currentTab == "products" ? true : false}
        filterOptions={filterOptions}
        searchCols={searchCols}
        Table={
          currentTab == "products"
            ? ProductsTable
            : currentTab == "brands"
            ? CategoryTable
            : SubCategoryTable
        }
        products={
          currentTab == "products"
            ? products.products
            : currentTab == "brands"
            ? brands.brands
            : subCategories.categories
        }
        currentPage={
          currentTab == "products"
            ? products.currentPage
            : currentTab == "brands"
            ? brands.currentPage
            : subCategories.currentPage
        }
        totalPages={
          currentTab == "products"
            ? products.totalPages
            : currentTab == "brands"
            ? brands.totalPages
            : subCategories.totalPages
        }
        itemsPerPage={
          currentTab == "products"
            ? products.perPage
            : currentTab == "brands"
            ? brands.perPage
            : subCategories.perPage
        }
        setcurrentPage={handlePagination}
      />
    </div>
  );
};

export default ProductWrapper;
