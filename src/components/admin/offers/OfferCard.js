"use client";
import moment from "moment";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DeleteIcon from "@/assets/icons/delete-black.svg";
import DeleteModal from "@/components/Modals/DeleteModal";

const OfferCard = ({ offer }) => {
  const router = useRouter();
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);

  const handleDeleteOffer = () => {
    window.location.reload();
    setdeleteModalOpen(false);
  };

  return (
    <div
      className="text-white w-[80%] md:w-[48%] lg:w-[31%] rounded-lg shadow-dropdown-shadow cursor-pointer mt-8  min-w-fit md:min-w-0 relative"
      style={{
        background:
          "linear-gradient(258.35deg, rgba(209, 18, 96, 0.5) -0.65%, #FB6B90 96.47%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      }}
    >
      <Image
        src={DeleteIcon}
        className="absolute top-2 right-2 cursor-pointer"
        onClick={() => setdeleteModalOpen(true)}
      />
      <DeleteModal
        open={deleteModalOpen}
        onclose={() => setdeleteModalOpen(false)}
        onconfirm={handleDeleteOffer}
        type={"Offer"}
      />
      <div className="p-5" onClick={() => router.push(`offers/${offer._id}`)}>
        <div className="flex flex-col gap-16">
          <div>
            <p className="text-xl">{offer.name}</p>
            <p className="text-xs">{offer.discount}% off</p>
          </div>
          <div className="flex items-center gap-8">
            <div>
              <p>Starting Date</p>
              <p className="text-xs">
                {moment(offer.starting_date).format("DD MMM, YYYY")}
              </p>
            </div>
            <div>
              <p>Ending Date</p>
              <p className="text-xs">
                {moment(offer.ending_date).format("DD MMM, YYYY")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
