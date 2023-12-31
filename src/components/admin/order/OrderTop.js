"use client";
import React, { useEffect, useState } from "react";
import BackIcon from "@/assets/icons/back.svg";
import Link from "next/link";
import Image from "next/image";
import SelectInput from "@/components/Inputs/SelectInput";
import { cancelOrder, completeOrder } from "@/api/order";
import ConfirmModal from "@/components/Modals/ConfirmModal";
import PinkButton from "@/components/buttons/PinkButton";

const OrderTop = ({ order }) => {
  const [apiCalled, setapiCalled] = useState(false);

  const statusOptions = [
    { name: "Pending", value: "pending" },
    { name: "Completed", value: "completed" },
    { name: "Cancelled", value: "cancelled" },
  ];

  const [confirmModalOpen, setconfirmModalOpen] = useState(false);

  const [currStatus, setcurrStatus] = useState(
    statusOptions.find((s) => s.value == order.status)
  );

  const handleCompleteOrder = () => {
    setapiCalled(true);
    completeOrder({ id: order._id })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        setapiCalled(false);
      });
  };

  const handleCancelOrder = () => {
    setapiCalled(true);
    cancelOrder({ id: order._id })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        setapiCalled(false);
      });
  };

  return (
    <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
      <ConfirmModal
        description={`Are you sure you want to ${
          currStatus.value == "completed" ? "complete" : "cancel"
        } this order?`}
        onclose={() => {
          setconfirmModalOpen(false);
        }}
        onconfirm={
          currStatus.value == "completed"
            ? handleCompleteOrder
            : handleCancelOrder
        }
        open={confirmModalOpen}
      />
      <div className="flex items-center gap-4">
        <Link href={"/admin/order"}>
          <Image src={BackIcon} />
        </Link>
        <p className="font-bold text-3xl">Order Details</p>
      </div>
      <div className="flex gap-3 items-center flex-wrap">
        {(currStatus.value == "completed" || currStatus.value == "cancelled") &&
          order.status != "completed" &&
          order.status != "cancelled" && (
            <PinkButton
              disabled={apiCalled}
              text={"Update Status"}
              className={"px-8 !w-fit"}
              clickHandler={() => setconfirmModalOpen(true)}
            />
          )}
        <SelectInput
          disabled={order.status == "completed" || order.status == "cancelled"}
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
