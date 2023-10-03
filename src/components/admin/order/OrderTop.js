"use client";
import React, { useEffect, useState } from "react";
import BackIcon from "@/assets/icons/back.svg";
import Link from "next/link";
import Image from "next/image";
import SelectInput from "@/components/Inputs/SelectInput";
import { completeOrder } from "@/api/order";
import ConfirmModal from "@/components/Modals/ConfirmModal";
import PinkButton from "@/components/buttons/PinkButton";

const OrderTop = ({ order }) => {
  const statusOptions = [
    { name: "Pending", value: "pending" },
    // { name: "In Progress", value: "inprogress" },
    { name: "Completed", value: "completed" },
  ];

  const [confirmModalOpen, setconfirmModalOpen] = useState(false);

  const [currStatus, setcurrStatus] = useState(
    statusOptions.find((s) => s.value == order.status)
  );

  const handleCompleteOrder = () => {
    completeOrder({ id: order._id })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  return (
    <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
      <ConfirmModal
        description={"Are you sure you want to complete this order?"}
        onclose={() => {
          setconfirmModalOpen(false);
        }}
        onconfirm={handleCompleteOrder}
        open={confirmModalOpen}
      />
      <div className="flex items-center gap-4">
        <Link href={"/admin/order"}>
          <Image src={BackIcon} />
        </Link>
        <p className="font-bold text-3xl">Order Details</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        {currStatus.value == "completed" && order.status != "completed" && (
          <PinkButton
            text={"Update Status"}
            className={"px-8 !w-fit"}
            clickHandler={() => setconfirmModalOpen(true)}
          />
        )}
        <SelectInput
          disabled={true}
          active={currStatus}
          setactive={(st) => {
            setcurrStatus(st);
          }}
          options={statusOptions}
          className={"w-40"}
          dropdownClassName={"w-full top-[55px] !min-w-0"}
        />
      </div>
    </div>
  );
};

export default OrderTop;
