"use client";
import React, { useEffect, useState } from "react";
import FoundationImg from "../../assets/images/home/foundation.png";
import Image from "next/image";
import HeartIcon from "../../assets/icons/heart.svg";
import PinkButton from "../buttons/PinkButton";
import { useRouter } from "next/navigation";
import Stars from "../Stars";
import ProductsWrapper from "../Products/ProductsWrapper";

const TrendingProducts = ({ products }) => {
  const router = useRouter();

  const [activeTab, setactiveTab] = useState("new");

  const handleChangeTab = (value) => {
    setactiveTab(value);
  };

  const filterProducts = (pros) => {
    return pros.filter((pro) => pro.type == activeTab);
  };

  useEffect(() => {}, [activeTab]);

  return (
    <div>
      <p className="text-3xl font-bold text-center">Latest Products</p>
      <p className="text-secondary text-lg text-center">
        Discover Our Top Picks!
      </p>
      <ProductsWrapper products={products} />
      <div className="mt-8 w-full justify-center flex flex-wrap gap-[4%] lg:gap-[2%]">
        {/* {products.map((pro) => (
          <div className="w-[90%] sm:w-[48%] lg:w-[23.5%] mt-10 relative">
            <div className="relative h-[15vw] min-h-[270px] mb-2">
              <Image
                src={pro.images[0]}
                fill
                // width={30}
                // height={30}
                className="w-full object-cover"
              />
            </div>
            <Stars rating={pro.review} starColor={"#FDCC0D"} />
            <div className="flex flex-col gap-2 mt-2">
              <div className="flex justify-between">
                <p className="text-xl font-semibold">{pro.name}</p>
                <Image src={HeartIcon} className="cursor-pointer" />
              </div>
              <div className="flex items-end gap-3">
                <p className="font-semibold">${pro.discountedPrice}</p>
                <p className="text-sm text-gray-500 line-through">
                  ${pro.price}
                </p>
              </div>
              <PinkButton
                text={"Buy Now"}
                clickHandler={() => router.push(`/product/${pro._id}`)}
              />
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default TrendingProducts;
