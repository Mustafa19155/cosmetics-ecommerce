"use client";
import { getAdminOrders } from "@/api/order";
import OrdersTable from "@/components/admin/Tables/OrdersTable";
import TableWrapper from "@/components/admin/Tables/TableWrapper";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [ordersData, setordersData] = useState(null);
  const [loading, setloading] = useState(true);

  const handleGetOrders = async ({ page }) => {
    setloading(true);
    setordersData(await getAdminOrders({ page }));
    setloading(false);
  };

  useEffect(() => {
    handleGetOrders({ page: 1 });
  }, []);

  const searchCols = ["order_id", "name"];

  const filterOptions = [
    { name: "All Orders", value: "" },
    { name: "Orders Completed", value: "completed" },
    { name: "Orders in queue", value: "queue" },
  ];

  return (
    <div>
      {loading ? (
        ""
      ) : (
        <>
          <p className="font-bold text-3xl">Orders</p>
          <TableWrapper
            showFilters={true}
            Table={OrdersTable}
            products={ordersData.orders}
            currentPage={ordersData.currentPage}
            totalPages={ordersData.totalPages}
            itemsPerPage={ordersData.perPage}
            searchCols={searchCols}
            filterOptions={filterOptions}
          />
        </>
      )}
    </div>
  );
};

export default Page;
