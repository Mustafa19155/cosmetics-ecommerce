import OfferCard from "@/components/admin/offers/OfferCard";
import Link from "next/link";
import React from "react";

const getData = async () => {
  return [
    {
      name: "Hallowen Offer",
      discount: 50,
      startDate: Date.now(),
      endDate: Date.now(),
    },
    {
      name: "Hallowen Offer",
      discount: 50,
      startDate: Date.now(),
      endDate: Date.now(),
    },
  ];
};

const Page = async () => {
  const data = await getData();

  return (
    <div>
      <p className="text-3xl font-bold">Offers</p>
      <div className="mt-8 flex gap-[3%] flex-wrap justify-center md:justify-start">
        {data.map((offer) => (
          <OfferCard offer={offer} />
        ))}
        <Link
          href={"offers/add"}
          className="border border-dashed border-primary w-[80%] md:w-[48%] lg:w-[31%] min-h-[180px] rounded-lg flex flex-col justify-center items-center mt-8 min-w-fit md:min-w-0"
        >
          <p className="text-xl font-semibold text-primary">+ Create Offer</p>
        </Link>
      </div>
    </div>
  );
};

export default Page;
