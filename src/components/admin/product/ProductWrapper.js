"use client";
import React, { useEffect, useState } from "react";
import ProductTop from "./ProductTop";
import ProductsTable from "../Tables/ProductsTable";
import Pagination from "@/components/Pagination";
import TableWrapper from "../Tables/TableWrapper";
import CategoryTable from "../Tables/CategoryTable";

const ProductWrapper = ({ products, categories }) => {
  const [showProducts, setshowProducts] = useState(true);

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

  return (
    <div>
      <ProductTop
        showProducts={showProducts}
        setshowProducts={setshowProducts}
      />

      <TableWrapper
        showFilters={showProducts ? true : false}
        filterOptions={filterOptions}
        searchCols={searchCols}
        Table={showProducts ? ProductsTable : CategoryTable}
        products={showProducts ? products : categories}
      />
    </div>
  );
};

export default ProductWrapper;
