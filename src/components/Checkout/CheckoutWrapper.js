"use client";
import React, { useState } from "react";
import CheckoutLeft from "@/components/Checkout/CheckoutLeft";
import CheckoutRight from "@/components/Checkout/CheckoutRight";
import Link from "next/link";
import TransparentButton from "../buttons/TransparentButton";

const CheckoutWrapper = ({ data }) => {
  const [deliveryMethod, setdeliveryMethod] = useState("pickup");
  return (
    <div className="flex flex-wrap my-16 justify-center gap-10 md:gap-0">
      <div className="w-full md:w-[57%] xl:w-[65%]">
        <CheckoutLeft
          deliveryMethod={deliveryMethod}
          setdeliveryMethod={setdeliveryMethod}
        />
      </div>
      <div className="w-full md:w-[40%] xl:w-[30%] p-5 xl:p-10 rounded-lg shadow-cart-wrapper border border-[rgba(251,107,144,0.2)] h-fit ml-[3%]">
        <CheckoutRight
          deliveryMethod={deliveryMethod}
          data={data}
          SubmitBtn={SubmitBtn}
        />
      </div>
    </div>
  );
};

export default CheckoutWrapper;

const SubmitBtn = () => {
  return (
    <Link href={"/orderSuccess"}>
      <TransparentButton text={"PLACE ORDER"} />
    </Link>
  );
};
