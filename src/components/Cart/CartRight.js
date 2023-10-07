"use client";
import React, { useContext, useEffect, useState } from "react";
import PinkButton from "../buttons/PinkButton";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/userContext";

const CartRight = () => {
  const router = useRouter();

  const { cart, setcart } = useContext(AuthContext);

  const [discountPercent, setdiscountPercent] = useState(0);
  const [discountAmount, setdiscountAmount] = useState(0);
  const [originalTotal, setoriginalTotal] = useState(0);

  useEffect(() => {
    // if (cart.items.length > 0) {
    let disAm = 0;
    let disPer = 0;
    let total = 0;
    cart.items.map((item) => {
      total += item.quantity * item.product.price;
      disPer += item.product.discount;
      disAm +=
        item.quantity * (item.product.price - item.product.discountedPrice);
    });
    setoriginalTotal(total);
    setdiscountPercent(
      (disPer / cart.items.length > 0 ? cart.items.length : 0).toFixed(0)
    );
    setdiscountAmount(disAm);
    // }
  }, [cart]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <p className="font-bold">SubTotal</p>
        <p className="font-bold">$ {originalTotal}</p>
      </div>
      <div className="flex gap-3 text-sm items-center">
        <input type="checkbox" className="accent-primary bg-primary" />
        <p>Do you want to claim your points</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Discount</p>

        <p className="text-secondary">{discountPercent}%</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Discount Amount</p>
        <p className="text-secondary">${discountAmount}</p>
      </div>
      <div className="flex justify-between items-center text-xl font-bold">
        <p>Grand Total</p>
        <p>${cart.total}</p>
        {/* <p>${total}</p> */}
      </div>
      <PinkButton
        text={"CHECKOUT NOW"}
        clickHandler={() => router.push("/checkout")}
      />
    </div>
  );
};

export default CartRight;
