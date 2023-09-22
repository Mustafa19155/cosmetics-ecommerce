"use client";
import React from "react";
import BackIcon from "@/assets/icons/back.svg";
import Link from "next/link";
import Image from "next/image";
import SelectInput from "@/components/Inputs/SelectInput";

const OrderTop = ({ order }) => {
  const statusOptions = [
    { name: "Pending", value: "pending" },
    { name: "In Progress", value: "inprogress" },
    { name: "Completed", value: "completed" },
  ];

  return (
    <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
      <div className="flex items-center gap-4">
        <Link href={"/admin/order"}>
          <Image src={BackIcon} />
        </Link>
        <p className="font-bold text-3xl">Order Details</p>
      </div>
      <SelectInput
        options={statusOptions}
        className={"w-40"}
        dropdownClassName={"w-full top-[55px] !min-w-0"}
      />
    </div>
  );
};

export default OrderTop;
