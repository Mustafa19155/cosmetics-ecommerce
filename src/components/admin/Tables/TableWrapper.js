"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import TableSearch from "./TableSearch";

const TableWrapper = ({
  mainData,
  products,
  Table,
  searchCols,
  filterOptions,
  showFilters,
  brands,
  currentPage,
  totalPages,
  setcurrentPage,
  itemsPerPage,
  totalData,
  activeFilter,
  setactiveFilter,
}) => {
  const [prosCopy, setprosCopy] = useState([]);
  useEffect(() => {
    setprosCopy([...products]);
  }, [products, mainData]);

  // search
  const [searchValue, setsearchValue] = useState("");
  const filterData = () => {
    setprosCopy(
      products.filter((d) =>
        searchCols.some((key) => {
          return String(d[key])
            ?.toLowerCase()
            .includes(searchValue.toLowerCase());
        })
      )
    );
  };

  useEffect(() => {
    filterData();
  }, [searchValue]);

  return (
    <div className="max-w-[calc(100vw_-_100px)]">
      <TableSearch
        activeFilter={activeFilter}
        setactiveFilter={setactiveFilter}
        showFilters={showFilters}
        searchValue={searchValue}
        setsearchValue={setsearchValue}
        options={filterOptions}
      />

      <Table brands={brands} mainPros={prosCopy} setmainPros={setprosCopy} />
      <div className="mt-10 flex justify-between">
        <p className="text-sm items-center">
          Showing {currentPage * itemsPerPage - (itemsPerPage - 1)} to{" "}
          {currentPage * itemsPerPage > totalData
            ? totalData
            : currentPage * itemsPerPage}{" "}
          of {totalData} entries
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
