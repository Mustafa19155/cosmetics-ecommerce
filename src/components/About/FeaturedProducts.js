"use client";
import React from "react";
import PinkButton from "../buttons/PinkButton";
import Image from "next/image";
import HeartIcon from "../../assets/icons/heart.svg";
import NewsLetter from "./NewsLetter";

const FeaturedProducts = ({ products }) => {
  return (
    <div className="justify-center sm:justify-between px-5 md:px-10 mt-8 overflow-scroll w-full whitespace-nowrap home-pro-wrapper">
      {products.map((pro) => (
        <div className="sm:w-[44%] lg:w-[28%] mx-4 inline-block">
          <Image src={pro.image} className="w-full h-[15vw] min-h-[270px]" />
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p className="text-xl font-semibold">{pro.name}</p>
              <Image src={HeartIcon} className="cursor-pointer" />
            </div>
            <div className="flex items-end gap-3">
              <p className="font-semibold">${pro.discountedPrice}</p>
              <p className="text-sm text-gray-500 line-through">
                ${pro.originalPrice}
              </p>
            </div>
            <PinkButton text={"Buy Now"} />
          </div>
        </div>
      ))}
      <div className="mt-16">
        <NewsLetter />
      </div>
    </div>
  );
};

export default FeaturedProducts;
