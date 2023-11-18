import ManageOffer from "@/components/admin/offers/ManageOffer";
import React from "react";
import { headers } from "next/headers";
import { getSingleOffer } from "@/api/offers";
import { getBrands } from "@/api/brands";

const Page = async ({ params }) => {
  const data = await getSingleOffer({
    id: params.slug,
  });

  const brands = await getBrands();

  return (
    <div>
      <ManageOffer offer={data} brands={brands} />
    </div>
  );
};

export default Page;
