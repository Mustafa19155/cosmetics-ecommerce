"use client";
import React, { useEffect, useState } from "react";
import FoundationImg from "../../assets/images/home/foundation.png";
import Image from "next/image";
import HeartIcon from "../../assets/icons/heart.svg";
import PinkButton from "../buttons/PinkButton";

const TrendingProducts = () => {
  const [products, setproducts] = useState([
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "top",
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "top",
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "top",
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "top",
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "featured",
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "featured",
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "featured",
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "featured",
    },
  ]);

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
      <p className="text-3xl font-bold text-center">Trending Products</p>
      <div className="flex justify-center gap-5 mt-8">
        <p
          className={`cursor-pointer text-xl pb-1 ${
            activeTab == "new" ? "border-b-[4px] border-primary" : ""
          }`}
          onClick={() => {
            handleChangeTab("new");
          }}
        >
          New Products
        </p>
        <p
          className={`cursor-pointer text-xl pb-1 ${
            activeTab == "top" ? "border-b-[4px] border-primary" : ""
          }`}
          onClick={() => {
            handleChangeTab("top");
          }}
        >
          Top Selling
        </p>
        <p
          className={`cursor-pointer text-xl pb-1 ${
            activeTab == "featured" ? "border-b-[4px] border-primary" : ""
          }`}
          onClick={() => {
            handleChangeTab("featured");
          }}
        >
          Featured
        </p>
      </div>
      <div className="justify-center sm:justify-between px-5 md:px-10 mt-8 overflow-scroll w-full whitespace-nowrap home-pro-wrapper">
        {filterProducts(products).map((pro) => (
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
      </div>
    </div>
  );
};

export default TrendingProducts;
