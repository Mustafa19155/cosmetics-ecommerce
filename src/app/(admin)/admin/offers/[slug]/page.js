import ManageOffer from "@/components/admin/offers/ManageOffer";
import React from "react";
import { headers } from "next/headers";
import { getSingleOffer } from "@/api/offers";

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  const data = await getSingleOffer({
    id: activePath.split("/")[activePath.split("/").length - 1],
  });

  return (
    <div>
      <ManageOffer offer={data} />
    </div>
  );
};

export default Page;
