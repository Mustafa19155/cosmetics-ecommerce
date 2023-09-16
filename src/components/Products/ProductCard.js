"use client";
import React from "react";
import HeartIcon from "../../assets/icons/heart.svg";
import PinkButton from "../buttons/PinkButton";
import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="sm:w-[44%] lg:w-[23%] relative mt-16">
      <div className="absolute top-0 right-0 bg-primary w-[50%] px-3 py-2 text-center min-w-fit">
        <p className="text-white whitespace-nowrap">
          {product.discountPercent} % discount
        </p>
      </div>
      <div className="bg-[#FAFAFA]">
        <Image src={product.image} className="w-full h-[15vw] min-h-[270px]" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">{product.name}</p>
          <Image src={HeartIcon} className="cursor-pointer" />
        </div>
        <div className="flex items-end gap-3">
          <p className="font-semibold">${product.discountedPrice}</p>
          <p className="text-sm text-gray-500 line-through">
            ${product.originalPrice}
          </p>
        </div>
        <PinkButton text={"Buy Now"} />
      </div>
    </div>
  );
};

export default ProductCard;
