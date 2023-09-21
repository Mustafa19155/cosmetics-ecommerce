import TableWrapper from "@/components/admin/Tables/TableWrapper";
import UsersTable from "@/components/admin/Tables/UsersTable";
import React from "react";

const getData = async () => {
  return [
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
    {
      username: "DavidFilma",
      email: "email@emai.com",
      spent: 20,
      points: 40,
      ordersCount: 3,
    },
  ];
};

const Page = async () => {
  const data = await getData();

  const searchCols = ["id", "username"];

  return (
    <div>
      <p className="font-bold text-3xl">Orders</p>
      <TableWrapper
        Table={UsersTable}
        products={data}
        searchCols={searchCols}
      />
    </div>
  );
};

export default Page;
