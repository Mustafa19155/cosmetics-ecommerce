import ProductFilters from "@/components/ProductFilters";
import ProductsWrapper from "@/components/Products/ProductsWrapper";
import FoundationImg from "../../../assets/images/home/foundation.png";
import React from "react";

const getData = async () => {
  return [
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
      isFavourite: false,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
      isFavourite: false,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
      isFavourite: false,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
      isFavourite: false,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
      isFavourite: false,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
      isFavourite: false,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
      isFavourite: false,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
      isFavourite: false,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
      isFavourite: false,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
      isFavourite: false,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
      isFavourite: false,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
      isFavourite: false,
    },
  ];
};

const Page = async () => {
  const data = await getData();

  return (
    <div className="my-16">
      <div className="text-center">
        <p className="font-bold  text-3xl">Perfume</p>
        <p className="text-secondary mt-1">
          Indulge in Luxury: Explore our Exquisite Perfume Gift Sets Collection
        </p>
      </div>
      <div className="my-16">
        <ProductFilters />
      </div>
      <ProductsWrapper products={data} />
    </div>
  );
};

export default Page;
