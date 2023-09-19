import React from "react";
import TickIcon from "../../assets/icons/tick.svg";
import Image from "next/image";
import moment from "moment";
import ProImg from "../../assets/images/product-detail.png";
import CheckoutRight from "@/components/Checkout/CheckoutRight";
import Link from "next/link";
import PinkButton from "@/components/buttons/PinkButton";

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
    <div className="my-16 border border-primary w-[95%] lg:w-[75%] xl:w-[50%] mx-auto py-8 px-8 sm:px-16 rounded-lg flex flex-col gap-3">
      <div className="text-center flex justify-center">
        <Image src={TickIcon} />
      </div>
      <p className="text-3xl font-bold text-center">Thanks for the order</p>
      <p className="text-lg text-secondary text-center">
        The order confirmation has been sent email@gmail.com
      </p>
      <div>
        <p className="font-bold text-lg">Transcation Date</p>
        <p className="text-secondary text-sm">
          {moment(Date.now()).format("dddd, MMMM DD, YYYY")}
        </p>
      </div>
      <div>
        <p className="font-bold text-lg">Payment Method</p>
        <p className="text-secondary text-sm">Mastercard ending with 456</p>
      </div>
      <p className="text-lg font-semibold text-primary text-center py-2">
        Your order will be delievered in 5 to 7 buisness days
      </p>
      <div>
        <CheckoutRight data={data} SubmitBtn={SubmitBtn} />
      </div>
    </div>
  );
};

export default Page;

const SubmitBtn = () => {
  return (
    <Link href={"/"}>
      <PinkButton text={"CONTINUE SHOPPING"} />
    </Link>
  );
};
