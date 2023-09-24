import React from "react";
import PinkButton from "../buttons/PinkButton";
import TransparentButton from "../buttons/TransparentButton";
import Image from "next/image";

const CheckoutRight = ({ data, SubmitBtn, deliveryMethod }) => {
  return (
    <div className="flex flex-col gap-3 xl:gap-5">
      <p className="text-xl font-bold">Your Order</p>
      <div>
        <div className="flex flex-col gap-2">
          {data.items.map((item) => (
            <div class="flex gap-2 items-center w-full">
              <Image src={item.image} className="w-[75px] h-[75px]" />
              <div className="flex flex-col justify-center overflow-hidden w-full">
                <div className="flex justify-between items-center w-full">
                  <p className="font-bold max-w-[120px] sm:max-w-[300px] md:max-w-[150px] lg:max-w-[280px] truncate line-clamp-2 whitespace-normal">
                    {item.name}
                  </p>
                  <p>${item.price}</p>
                </div>
                <p className="text-secondary text-sm">{item.description}</p>
                <p className="text-sm">x{item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">SubTotal</p>
        <p className="font-bold">${data.total}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Discount</p>
        <p className="text-secondary">${data.total - data.finalTotal}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Delivery fee</p>
        <p className="text-secondary">
          $ {deliveryMethod == "pickup" ? 0 : 15}
        </p>
      </div>
      <div className="flex justify-between items-center text-xl font-bold">
        <p>Grand Total</p>
        <p>${data.finalTotal}</p>
      </div>
      <SubmitBtn />
    </div>
  );
};

export default CheckoutRight;
