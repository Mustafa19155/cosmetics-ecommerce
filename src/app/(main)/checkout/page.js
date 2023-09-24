import React from "react";
import ProImg from "../../../assets/images/product-detail.png";
import Link from "next/link";
import TransparentButton from "@/components/buttons/TransparentButton";
import CheckoutWrapper from "@/components/Checkout/CheckoutWrapper";

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
  return <CheckoutWrapper data={data} />;
};

export default Page;
