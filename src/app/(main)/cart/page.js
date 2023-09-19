import React from "react";
import ProImg from "../../../assets/images/product-detail.png";
import CartLeft from "@/components/Cart/CartLeft";
import CartRight from "@/components/Cart/CartRight";

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
      <div className="md:w-[60%] xl:w-[65%]">
        <CartLeft data={data} />
      </div>
      <div className="md:w-[37%] lg:w-[35%] xl:w-[30%] p-10 rounded-lg shadow-cart-wrapper border border-primary h-fit ml-[3%]">
        <CartRight data={data} />
      </div>
    </div>
  );
};

export default Page;
