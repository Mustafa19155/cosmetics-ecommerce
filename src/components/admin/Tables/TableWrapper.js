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
  const [prosCopy, setprosCopy] = useState([...products]);

  //pagination
  const itemsPerPage = 5;
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, settotalPages] = useState(1);
  const [startIndex, setstartIndex] = useState(0);
  const [endIndex, setendIndex] = useState(0);

  useEffect(() => {
    settotalPages(
      prosCopy.length > 0 ? Math.ceil(prosCopy.length / itemsPerPage) : 1
    );
  }, [prosCopy]);

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setstartIndex(start);
    setendIndex(end);
  }, [currentPage, prosCopy]);

  useEffect(() => {
    setcurrentPage(1);
  }, [prosCopy]);

  // search
  const [searchValue, setsearchValue] = useState("");
  const filterData = () => {
    setprosCopy(
      products.filter((d) =>
        searchCols.some((key) => d[key]?.toLowerCase().includes(searchValue))
      )
    );
  };

  useEffect(() => {
    filterData();
  }, [searchValue]);

  return (
    <div>
      <TableSearch
        showFilters={showFilters}
        searchValue={searchValue}
        setsearchValue={setsearchValue}
        options={filterOptions}
      />

      <Table
        mainPros={prosCopy.slice(startIndex, endIndex)}
        setmainPros={setprosCopy}
      />
      <div className="mt-10 flex justify-between">
        <p className="text-sm items-center">
          Showing {currentPage * itemsPerPage - (itemsPerPage - 1)} to{" "}
          {currentPage * itemsPerPage > prosCopy.length
            ? prosCopy.length
            : currentPage * itemsPerPage}{" "}
          of {prosCopy.length} entries
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
