"use client";
import React, { useState } from "react";
import FoundationImg from "../../assets/images/home/foundation.png";
import ProductCard from "./ProductCard";

const ProductsWrapper = () => {
  const [products, setproducts] = useState([
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 10,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
    },
    {
      name: "Top Selling",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 20,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
    },
    {
      name: "Featured",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      discountPercent: 30,
    },
  ]);

  return (
    <div className="flex flex-wrap justify-center sm:justify-between">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductsWrapper;
