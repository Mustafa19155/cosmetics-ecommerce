import React from "react";
import ProImg from "../../assets/images/product-detail.png";
import CheckoutLeft from "@/components/Checkout/CheckoutLeft";
import CheckoutRight from "@/components/Checkout/CheckoutRight";
import Link from "next/link";
import TransparentButton from "@/components/buttons/TransparentButton";

const getData = async () => {
  return {
    total: 25,
    discount: 10,
    finalTotal: 10,
    items: [
      {
        name: "Nars Foundation",
        description: "mahogany shade",
        quantity: 1,
        price: 25,
        image: ProImg,
      },
      {
        name: "Nars Foundation",
        description: "mahogany shade",
        quantity: 1,
        price: 25,
        image: ProImg,
      },
      {
        name: "Nars Foundation Nars Foundation Nars Foundation Nars Foundation",
        description: "mahogany shade",
        quantity: 1,
        price: 25,
        image: ProImg,
      },
    ],
  };
};

const Page = async () => {
  const data = await getData();
  return (
    <div className="flex flex-wrap my-16 justify-center gap-10 md:gap-0">
      <div className="w-full md:w-[57%] xl:w-[65%]">
        <CheckoutLeft />
      </div>
      <div className="w-full md:w-[40%] xl:w-[30%] p-5 xl:p-10 rounded-lg shadow-cart-wrapper border border-[rgba(251,107,144,0.2)] h-fit ml-[3%]">
        <CheckoutRight data={data} SubmitBtn={SubmitBtn} />
      </div>
    </div>
  );
};

const SubmitBtn = () => {
  return (
    <Link href={"/orderSuccess"}>
      <TransparentButton text={"PLACE ORDER"} />
    </Link>
  );
};

export default Page;
