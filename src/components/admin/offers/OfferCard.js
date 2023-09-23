"use client";
import moment from "moment";
import { useRouter } from "next/navigation";
import React from "react";

const OfferCard = ({ offer }) => {
  const router = useRouter();
  return (
    <div
      className="text-white w-[80%] md:w-[48%] lg:w-[31%] p-5 rounded-lg shadow-dropdown-shadow cursor-pointer mt-8  min-w-fit md:min-w-0"
      onClick={() => router.push("offers/1")}
      style={{
        background:
          "linear-gradient(258.35deg, rgba(209, 18, 96, 0.5) -0.65%, #FB6B90 96.47%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      }}
    >
      <div className="flex flex-col gap-16">
        <div>
          <p className="text-xl">{offer.name}</p>
          <p className="text-xs">{offer.discount}% off</p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <p>Starting Date</p>
            <p className="text-xs">
              {moment(offer.startDate).format("DD MMM, YYYY")}
            </p>
          </div>
          <div>
            <p>Ending Date</p>
            <p className="text-xs">
              {moment(offer.endDate).format("DD MMM, YYYY")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
