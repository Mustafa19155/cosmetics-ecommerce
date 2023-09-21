import OrdersTable from "@/components/admin/Tables/OrdersTable";
import TableWrapper from "@/components/admin/Tables/TableWrapper";
import React from "react";

const getData = async () => {
  return [
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
    {
      _id: 1,
      price: 11.7,
      date: Date.now(),
      username: "David",
      status: "pending",
    },
  ];
};

const Page = async () => {
  const data = await getData();

  const searchCols = ["id", "username"];

  const filterOptions = [
    { name: "All Orders", value: "" },
    { name: "Orders Completed", value: "completed" },
    { name: "Orders in queue", value: "queue" },
  ];

  return (
    <div>
      <p className="font-bold text-3xl">Orders</p>
      <TableWrapper
        showFilters={true}
        Table={OrdersTable}
        products={data}
        searchCols={searchCols}
        filterOptions={filterOptions}
      />
    </div>
  );
};

export default Page;
