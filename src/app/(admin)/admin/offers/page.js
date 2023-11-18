"use client";
import { getOffers } from "@/api/offers";
import OfferCard from "@/components/admin/offers/OfferCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setdata] = useState(null);

  const getData = async () => {
    setdata(await getOffers());
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data && (
        <>
          <p className="text-3xl font-bold">Offers</p>
          <div className="mt-8 flex gap-[3%] flex-wrap justify-center md:justify-start">
            {data.map((offer) => (
              <OfferCard offer={offer} />
            ))}
            <Link
              href={"offers/add"}
              className="border border-dashed border-primary w-[80%] md:w-[48%] lg:w-[31%] min-h-[180px] rounded-lg flex flex-col justify-center items-center mt-8 min-w-fit md:min-w-0"
            >
              <p className="text-xl font-semibold text-primary">
                + Create Offer
              </p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
