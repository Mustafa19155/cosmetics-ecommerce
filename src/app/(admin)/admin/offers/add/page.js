import { getBrands } from "@/api/brands";
import ManageOffer from "@/components/admin/offers/ManageOffer";
import React from "react";

const Page = async () => {
  const brands = await getBrands();

  return (
    <div>
      <ManageOffer brands={brands} />
    </div>
  );
};

export default Page;
