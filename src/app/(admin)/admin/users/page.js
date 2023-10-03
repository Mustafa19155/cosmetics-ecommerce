"use client";
import ProductWrapper from "@/components/admin/product/ProductWrapper";
import React, { useEffect, useState } from "react";
import TableWrapper from "@/components/admin/Tables/TableWrapper";
import UsersTable from "@/components/admin/Tables/UsersTable";
import { getUsers } from "@/api/users";

const Page = () => {
  const [usersData, setusersData] = useState(null);

  const [loading, setloading] = useState(true);

  const handleGetUsersData = async ({ page }) => {
    setloading(true);
    const data = await getUsers({ page });
    setusersData(data);
    setloading(false);
  };

  useEffect(() => {
    handleGetUsersData({ page: 1 });
  }, []);

  return (
    <div>
      {loading ? (
        ""
      ) : (
        <>
          <TableWrapper
            products={usersData.users}
            setcurrentPage={() => handleGetUsersData({ page })}
            Table={UsersTable}
            currentPage={usersData.currentPage}
            totalPages={usersData.currentPage}
            itemsPerPage={usersData.perPage}
            searchCols={["name", "email"]}
            showFilters={false}
            filterOptions={[]}
          />
        </>
      )}
    </div>
  );
};

export default Page;
