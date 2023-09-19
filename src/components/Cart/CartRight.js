import React from "react";
import PinkButton from "../buttons/PinkButton";

const CartRight = ({ data }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="font-bold">SubTotal</p>
        <p className="font-bold">${data.total}</p>
      </div>
      <div className="flex gap-3 text-sm items-center">
        <div className="h-3 w-3 rounded-sm bg-primary" />
        <p>Do you want to claim your points</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Discount</p>
        <p className="text-secondary">{data.discount}%</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Discount Amount</p>
        <p className="text-secondary">${data.total - data.finalTotal}</p>
      </div>
      <div className="flex justify-between items-center text-xl font-bold">
        <p>Grand Total</p>
        <p>${data.finalTotal}</p>
      </div>
      <PinkButton text={"CHECKOUT NOW"} />
    </div>
  );
};

export default CartRight;
