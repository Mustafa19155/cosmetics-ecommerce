"use client";
import React, { useState } from "react";
import BackIcon from "@/assets/icons/back.svg";
import Image from "next/image";
import TransparentButton from "@/components/buttons/TransparentButton";
import PinkButton from "@/components/buttons/PinkButton";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import SelectInput from "@/components/Inputs/SelectInput";
import Link from "next/link";
import DeleteIcon from "@/assets/icons/delete-black.svg";
import moment from "moment";
import { useRouter } from "next/navigation";

const ManageOffer = ({ offer }) => {
  const router = useRouter();
  const [isEditing, setisEditing] = useState(offer ? true : false);
  const [name, setname] = useState(offer?.name);
  const [images, setimages] = useState(offer ? offer.images : []);
  const [startDate, setstartDate] = useState(
    offer ? moment(offer.startDate).format("DD MMM, YYYY") : ""
  );
  const [endDate, setendDate] = useState(
    offer ? moment(offer.endDate).format("DD MMM, YYYY") : ""
  );
  const [discount, setdiscount] = useState(offer?.discount);

  const handleRemoveImage = (index) => {
    setimages(
      images.filter((img, i) => {
        return index != i;
      })
    );
  };

  return (
    <div>
      <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/admin/offers"}>
            <Image src={BackIcon} />
          </Link>
          <p className="font-bold text-3xl">
            {isEditing ? "Edit" : "Add"} Offer
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap min-[400px]:flex-nowrap">
          <TransparentButton
            text={"DISCARD"}
            className={"px-16"}
            clickHandler={() => router.push("/admin/offers")}
          />

          <PinkButton text={"SAVE"} className={"px-16"} />
        </div>
      </div>
      <div className="w-[100%] md:w-[60%]">
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Offer Name</label>
          <PrimaryInput
            className={"!p-3"}
            value={name}
            changeHandler={(e) => setname(e.target.value)}
            placeholder={"Offer Name"}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">
            Starting Date
          </label>
          <PrimaryInput
            className={"!p-3"}
            value={startDate}
            changeHandler={(e) => setstartDate(e.target.value)}
            placeholder={moment(Date.now()).format("DD MMM, YYYY")}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">
            Ending Date
          </label>
          <PrimaryInput
            className={"!p-3"}
            value={endDate}
            changeHandler={(e) => setendDate(e.target.value)}
            placeholder={moment(Date.now()).format("DD MMM, YYYY")}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Discount</label>
          <PrimaryInput
            className={"!p-3"}
            value={discount}
            changeHandler={(e) => setdiscount(e.target.value)}
            placeholder={"50%"}
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-5 flex-wrap">
          {images.map((file, index) => (
            <div className="w-[90%] md:w-[50%] relative h-[20vw] max-h-[315px] min-h-[200px] overflow-hidden">
              <Image
                src={DeleteIcon}
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => handleRemoveImage(index)}
              />
              <img
                src={file instanceof File ? URL.createObjectURL(file) : file}
                className="h-full w-full object-cover"
              />
            </div>
          ))}

          <label for="upload-image-input" class={`cursor-pointer`}>
            <div class="flex gap-3 border-dashed border-primary border w-fit p-12">
              <p className="font-bold text-lg">+ Add Photo</p>
            </div>
            <input
              accept="image/*"
              id="upload-image-input"
              type="file"
              class="hidden"
              onChange={(e) => setimages([...images, e.target.files[0]])}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default ManageOffer;
