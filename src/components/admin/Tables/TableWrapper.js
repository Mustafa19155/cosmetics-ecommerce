"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import TableSearch from "./TableSearch";
import { searchAdminProducts, searchProduct } from "@/api/products";
import _debounce from "lodash/debounce";

const TableWrapper = ({
  mainData,
  products,
  Table,
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
  type,
}) => {
  const [prosCopy, setprosCopy] = useState([]);
  useEffect(() => {
    setprosCopy([...products]);
  }, [products, mainData]);

  // search
  const [searchValue, setsearchValue] = useState("");
  let debounceTimeout;

  const filterData = () => {
    if (searchValue) {
      searchAdminProducts({ value: searchValue, type })
        .then((res) => {
          setprosCopy(res);
        })
        .catch((err) => {});
    } else {
      setcurrentPage(1);
    }
  };

  useEffect(() => {
    setsearchValue("");
  }, [type]);

  useEffect(() => {
    if (searchValue) {
      const getData = setTimeout(() => {
        searchAdminProducts({ value: searchValue, type })
          .then((res) => {
            setprosCopy(res);
          })
          .catch((err) => {});
      }, 500);

      return () => clearTimeout(getData);
    } else {
      setcurrentPage(1);
    }
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
      {!searchValue && (
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
      )}
    </div>
  );
};

export default TableWrapper;
