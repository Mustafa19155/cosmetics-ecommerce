"use client";
import React, { useEffect, useState } from "react";
import ProductTop from "./ProductTop";
import ProductsTable from "../Tables/ProductsTable";
import TableWrapper from "../Tables/TableWrapper";
import CategoryTable from "../Tables/BrandsTable";
import SubCategoryTable from "../Tables/SubCategoryTable";
import { getAdminProducts } from "@/api/products";
import { useParams, useRouter } from "next/navigation";

const ProductWrapper = ({
  products,
  setproducts,
  brands,
  subCategories,
  productPagination,
  catsPagination,
  brandsPagination,
}) => {
  const params = useParams();

  const [currentTab, setcurrentTab] = useState("products");

  const searchCols = ["name"];
  const filterOptions = [
    {
      name: "Product name",
      value: "name",
    },
    {
      name: "Availability",
      value: "quantity",
    },
    {
      name: "Price",
      value: "price",
    },
  ];
  const [productFilter, setproductFilter] = useState(filterOptions[0]);

  const handlePagination = ({ page }) => {
    if (currentTab == "products") {
      productPagination({ page });
    } else if (currentTab == "brands") {
      brandsPagination({ page });
    } else {
      catsPagination({ page });
    }
  };

  useEffect(() => {
    if (currentTab == "products") {
      let sortedData = [...products.products];
      if (productFilter.value == "quantity") {
        sortedData.sort((a, b) => b.quantity - a.quantity);
      } else if (productFilter.value == "price") {
        sortedData.sort((a, b) => b.price - a.price);
      } else {
        sortedData.sort((a, b) => {
          const nameA = a.name.toLowerCase();
          const nameB = b.name.toLowerCase();
          return nameA.localeCompare(nameB);
        });
      }
      setproducts({ ...products, products: sortedData });
    }
  }, [productFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
    window.location.hash
      ? window.location.hash == "#products"
        ? setcurrentTab("products")
        : window.location.hash == "#brands"
        ? setcurrentTab("brands")
        : setcurrentTab("subcategories")
      : setcurrentTab("products");
  }, [params]);

  return (
    <div>
      <ProductTop
        currentTab={currentTab}
        setcurrentTab={setcurrentTab}
        brands={brands.brands}
      />

      <TableWrapper
        // mainData={
        //   currentTab == "products"
        //     ? products
        //     : currentTab == "brands"
        //     ? brands
        //     : subCategories
        // }
        activeFilter={productFilter}
        setactiveFilter={setproductFilter}
        totalData={
          currentTab == "products"
            ? products.totalProducts
            : currentTab == "brands"
            ? brands.totalBrand
            : subCategories.totalCategories
        }
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
