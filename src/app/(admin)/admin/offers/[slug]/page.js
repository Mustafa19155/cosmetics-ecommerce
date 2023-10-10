import ManageOffer from "@/components/admin/offers/ManageOffer";
import React from "react";
import { headers } from "next/headers";
import { getSingleOffer } from "@/api/offers";
import { getBrands } from "@/api/brands";

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  const data = await getSingleOffer({
    id: activePath.split("/")[activePath.split("/").length - 1],
  });

  const brands = await getBrands();

  return (
    <div>
      <ManageOffer offer={data} brands={brands} />
    </div>
  );
};

export default Page;
