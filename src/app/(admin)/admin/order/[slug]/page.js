"use client";
import React, { useEffect } from "react";
import OrderTop from "@/components/admin/order/OrderTop";
import Details from "@/components/admin/order/Details";
import ProductInformation from "@/components/admin/order/ProductInformation";
import { getSingleOrder } from "@/api/order";
import { useState } from "react";

const Page = ({ params }) => {
  const [data, setdata] = useState(null);

  const getData = async () => {
    setdata(
      await getSingleOrder({
        id: params.slug,
      })
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data && (
        <>
          <OrderTop order={data} />
          <div className="mt-16">
            <Details order={data} />
          </div>
          <div className="mt-16">
            <ProductInformation order={data} />
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
