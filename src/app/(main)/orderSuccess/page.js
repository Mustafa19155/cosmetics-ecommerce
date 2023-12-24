"use client";
import React, { useContext, useEffect, useState } from "react";
import TickIcon from "../../../assets/icons/tick.svg";
import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import PinkButton from "@/components/buttons/PinkButton";
import { AuthContext } from "@/contexts/userContext";
import { recalculateDiscount } from "@/actions/recalculateDiscount";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [deliveryInformation, setdeliveryInformation] = useState(null);
  const [loading, setloading] = useState(true);
  const [originalTotal, setoriginalTotal] = useState(0);

  const { offers } = useContext(AuthContext);

  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("deliveryInformation"));
    if (info) {
      setdeliveryInformation(
        JSON.parse(localStorage.getItem("deliveryInformation"))
      );
    } else {
      return router.push("/");
    }

    setloading(false);
  }, []);

  const [discountAmount, setdiscountAmount] = useState(0);

  useEffect(() => {
    if (deliveryInformation?.items.length > 0) {
      let disAm = 0;
      let total = 0;
      deliveryInformation?.items.map((item) => {
        total += item.quantity * item.product.price;
        item.product = recalculateDiscount({
          products: [item.product],
          allOffers: offers,
        })[0];

        disAm +=
          item.quantity *
          (item.product.price - item.product.discountedPrice).toFixed(1);
      });
      setoriginalTotal(total);
      setdiscountAmount(disAm);
    }
  }, [deliveryInformation]);

  return (
    <>
      {loading ? (
        ""
      ) : (
        <div className="my-16 border border-primary w-[95%] lg:w-[75%] xl:w-[50%] mx-auto py-8 px-8 sm:px-16 rounded-lg flex flex-col gap-3">
          <div className="text-center flex justify-center">
            <Image src={TickIcon} />
          </div>
          <p className="text-3xl font-bold text-center">Thanks for the order</p>
          <p className="text-lg text-secondary text-center">
            The order confirmation has been sent {deliveryInformation.email}
          </p>
          <div>
            <p className="font-bold text-lg">Transcation Date</p>
            <p className="text-secondary text-sm">
              {moment(Date.now()).format("dddd, MMMM DD, YYYY")}
            </p>
          </div>
          <div>
            <p className="font-bold text-lg">Payment Method</p>
            {deliveryInformation.payment_method == "card" ? (
              <p className="text-secondary text-sm">
                Payment with card
                {/* Mastercard ending with{" "}
                {deliveryInformation.card_number.slice(
                  deliveryInformation.card_number.length - 4,
                  deliveryInformation.card_number.length
                )} */}
              </p>
            ) : (
              <p className="text-secondary text-sm">Cash on Delivery</p>
            )}
          </div>
          <p className="text-lg font-semibold text-primary text-center py-2">
            Your order will be delivered in 5 to 7 buisness days
          </p>

          <div className="flex flex-col gap-3 xl:gap-5">
            <p className="text-xl font-bold">Your Order</p>
            <div>
              <div className="flex flex-col gap-2">
                {deliveryInformation.items.map((item) => (
                  <div class="flex gap-2 items-center w-full">
                    <img
                      src={item.product.images[0]}
                      className="w-[75px] h-[75px]"
                    />
                    <div className="flex flex-col justify-center overflow-hidden w-full">
                      <div className="flex justify-between items-center w-full">
                        <p className="font-bold max-w-[120px] sm:max-w-[300px] md:max-w-[150px] lg:max-w-[280px] truncate line-clamp-2 whitespace-normal notranslate">
                          {item.product.name}
                        </p>
                        <p className="notranslate">
                          €{item.product.discountedPrice}
                        </p>
                      </div>
                      <p className="text-secondary text-sm truncate line-clamp-2 whitespace-normal">
                        {item.product.description}
                      </p>
                      <p className="text-sm">x{item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">SubTotal</p>
              <p className="font-bold notranslate">€{originalTotal}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Discount</p>
              <p className="text-secondary notranslate">€{discountAmount}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Delivery fee</p>
              <p className="text-secondary notranslate">
                € {deliveryInformation?.method == "online" ? 15 : 0}
              </p>
            </div>

            <div className="flex justify-between items-center text-xl font-bold">
              <p>Grand Total</p>
              <p className="notranslate">
                €
                {deliveryInformation.total -
                  (deliveryInformation?.online ? 15 : 0)}
              </p>
            </div>
            {deliveryInformation?.method == "online" && (
              <div className="flex flex-col gap-3 my-5">
                <p className="text-xl font-bold">Delievery Details</p>
                <div className="flex justify-between">
                  <p className="font-bold text-lg">Username:</p>
                  <p>{deliveryInformation.name}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-lg">Email:</p>
                  <p>{deliveryInformation.email}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-lg">Phone:</p>
                  <p>{deliveryInformation.number}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-lg">Region:</p>
                  <p>{deliveryInformation.region}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-lg">City:</p>
                  <p>{deliveryInformation.city}</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-bold text-lg">State:</p>
                  <p>{deliveryInformation.state}</p>
                </div>
              </div>
            )}
            <Link
              href={"/"}
              onClick={() => localStorage.removeItem("deliveryInformation")}
            >
              <PinkButton text={"CONTINUE SHOPPING"} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
