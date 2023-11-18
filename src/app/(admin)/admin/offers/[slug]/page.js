"use client";
import ManageOffer from "@/components/admin/offers/ManageOffer";
import React, { useEffect, useState } from "react";
import { getSingleOffer } from "@/api/offers";
import { getBrands } from "@/api/brands";

const Page = ({ params }) => {
  const [data, setdata] = useState(null);
  const [brands, setbrands] = useState(null);

  const getData = async () => {
    setdata(
      await getSingleOffer({
        id: params.slug,
      })
    );
  };
  const handleGetBrands = async () => {
    setbrands(await getBrands());
  };

  useEffect(() => {
    getData();
    handleGetBrands();
  }, []);

  return (
    <div>{data && brands && <ManageOffer offer={data} brands={brands} />}</div>
  );
};

export default Page;
