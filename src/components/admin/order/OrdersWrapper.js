"use client";
import React, { useEffect, useState } from "react";
import { getAdminFilteredOrders, getAdminOrders } from "@/api/order";
import OrdersTable from "@/components/admin/Tables/OrdersTable";
import TableWrapper from "@/components/admin/Tables/TableWrapper";

const OrdersWrapper = () => {
  const [ordersData, setordersData] = useState(null);
  const [orderFilter, setorderFilter] = useState(null);

  const handleGetOrders = async ({ page }) => {
    // setloading(false);
    setordersData(await getAdminOrders({ page }));
    // setloading(false);
  };

  const handleGetFilteredOrders = async ({ page }) => {
    // setloading(false);
    setordersData(
      await getAdminFilteredOrders({ page, filter: orderFilter.value })
    );

    // setloading(false);
  };

  const handlePagination = ({ page }) => {
    if (orderFilter?.value) {
      handleGetFilteredOrders({ page });
    } else {
      handleGetOrders({ page });
    }
  };

  const searchCols = ["order_id", "name"];

  const filterOptions = [
    { name: "All Orders", value: "" },
    { name: "Orders Completed", value: "completed" },
    { name: "Orders Pending", value: "pending" },
  ];

  useEffect(() => {
    if (orderFilter?.value) {
      handleGetFilteredOrders({ page: 1 });
    } else {
      handleGetOrders({ page: 1 });
    }
  }, [orderFilter]);

  return (
    <div>
      {!ordersData ? (
        ""
      ) : (
        <>
          <TableWrapper
            totalData={ordersData?.totalOrders}
            showFilters={true}
            Table={OrdersTable}
            products={ordersData?.orders}
            currentPage={ordersData?.currentPage}
            totalPages={ordersData?.totalPages}
            itemsPerPage={ordersData?.perPage}
            searchCols={searchCols}
            filterOptions={filterOptions}
            setcurrentPage={handlePagination}
            activeFilter={orderFilter}
            setactiveFilter={setorderFilter}
            type={"orders"}
          />
        </>
      )}
    </div>
  );
};

export default OrdersWrapper;
