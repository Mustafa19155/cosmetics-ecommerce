import ManageOffer from "@/components/admin/offers/ManageOffer";
import React from "react";

const getData = async () => {
  return {
    name: "Offer 1",
    images: [
      "data:image/jpeg;base64,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",
    ],
    startDate: Date.now(),
    endDate: Date.now(),
    discount: 50,
  };
};

const Page = async () => {
  const data = await getData();

  return (
    <div>
      <ManageOffer offer={data} />
    </div>
  );
};

export default Page;
