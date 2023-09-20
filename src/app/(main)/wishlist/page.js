import ProductFilters from "@/components/ProductFilters";
import ProductsWrapper from "@/components/Products/ProductsWrapper";
import PinkButton from "@/components/buttons/PinkButton";
import React from "react";
import FoundationImg from "../../../assets/images/home/foundation.png";

const getData = async () => {
  return [
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
      isFavourite: true,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
      isFavourite: true,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
      isFavourite: true,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
      isFavourite: true,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
      isFavourite: true,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
      isFavourite: true,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
      isFavourite: true,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
      isFavourite: true,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
      isFavourite: true,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
      isFavourite: true,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
      isFavourite: true,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
      isFavourite: true,
    },
  ];
};

const Page = async () => {
  const data = await getData();

  return (
    <div className="my-16">
      <div className="text-center">
        <p className="font-bold  text-3xl">Favourite</p>
        <p className="text-secondary mt-1">Shop Our Favorites</p>
      </div>
      <div className="my-16">
        <ProductFilters />
      </div>
      <ProductsWrapper products={data} />
      <div className="w-fit mt-16 m-auto">
        <PinkButton text={"VIEW MORE"} className={"px-16"} />
      </div>
    </div>
  );
};

export default Page;
