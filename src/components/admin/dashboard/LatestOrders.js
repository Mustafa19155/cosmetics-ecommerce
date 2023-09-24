"use client";
import React from "react";
import TableWrapper from "../Tables/TableWrapper";
import OrdersTable from "../Tables/OrdersTable";

const LatestOrders = ({ orders }) => {
  const searchCols = ["id", "username"];

  const filterOptions = [
    { name: "All Orders", value: "" },
    { name: "Orders Completed", value: "completed" },
    { name: "Orders in queue", value: "queue" },
  ];

  return (
    <div>
      <p className="font-bold text-3xl">Latest Orders</p>
      <TableWrapper
        showFilters={true}
        Table={OrdersTable}
        products={orders}
        searchCols={searchCols}
        filterOptions={filterOptions}
      />
    </div>
  );
};

export default LatestOrders;
