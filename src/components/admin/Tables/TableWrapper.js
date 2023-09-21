"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import TableSearch from "./TableSearch";

const TableWrapper = ({
  products,
  Table,
  searchCols,
  filterOptions,
  showFilters,
}) => {
  //pagination
  const [productsToShow, setproductsToShow] = useState([]);

  const itemsPerPage = 5;
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);

  useEffect(() => {
    settotalPages(
      products.length > 0 ? Math.ceil(products.length / itemsPerPage) : 1
    );
  }, [products]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setproductsToShow(products.slice(startIndex, endIndex));
  }, [currentPage, products]);

  useEffect(() => {
    setcurrentPage(1);
  }, [products]);

  // search
  const [searchValue, setsearchValue] = useState("");
  const filterData = () => {
    return products.filter((d) =>
      searchCols.some((key) => d[key]?.toLowerCase().includes(searchValue))
    );
  };

  // useEffect(() => {
  //   filterData();
  // }, [searchValue]);

  return (
    <div>
      <TableSearch
        showFilters={showFilters}
        searchValue={searchValue}
        setsearchValue={setsearchValue}
        options={filterOptions}
      />
      <Table mainPros={productsToShow} setmainPros={setproductsToShow} />
      <div className="mt-10 flex justify-between">
        <p className="text-sm items-center">
          Showing {currentPage * itemsPerPage - (itemsPerPage - 1)} to{" "}
          {currentPage * itemsPerPage > products.length
            ? products.length
            : currentPage * itemsPerPage}{" "}
          of {products.length} entries
        </p>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setcurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default TableWrapper;
