"use client";
import React from "react";
import PinkButton from "../buttons/PinkButton";
import { useRouter } from "next/navigation";

const CartRight = ({ data }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="font-bold">SubTotal</p>
        <p className="font-bold">${data.total}</p>
      </div>
      <div className="flex gap-3 text-sm items-center">
        <input type="checkbox" className="accent-primary bg-primary" />
        <p>Do you want to claim your points</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Discount</p>
        <p className="text-secondary">{data.discount}%</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Delivery fee</p>
        <p className="text-secondary">$ 15</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Discount Amount</p>
        <p className="text-secondary">${data.total - data.finalTotal}</p>
      </div>
      <div className="flex justify-between items-center text-xl font-bold">
        <p>Grand Total</p>
        <p>${data.finalTotal}</p>
      </div>
      <PinkButton
        text={"CHECKOUT NOW"}
        clickHandler={() => router.push("/checkout")}
      />
    </div>
  );
};

export default CartRight;
