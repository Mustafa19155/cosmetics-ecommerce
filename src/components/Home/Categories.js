"use client";
import React, { useState } from "react";
import CosIcon from "../../assets/images/home/cosmetics.png";
import PerIcon from "../../assets/images/home/perfumes.png";
import HairIcon from "../../assets/images/home/hair.png";
import HairIcon2 from "../../assets/images/home/hair2.png";
import Image from "next/image";

const Categories = () => {
  const [categories, setcategories] = useState([
    {
      image: CosIcon,
      name: "Cosmetics",
    },
    {
      image: PerIcon,
      name: "perfumes",
    },
    {
      image: HairIcon,
      name: "Hair",
    },
    {
      image: HairIcon2,
      name: "Hair",
    },
  ]);
  return (
    <div>
      <p className="text-3xl font-bold text-center">Categories</p>
      <div className="flex justify-center sm:justify-between flex-wrap px-5 md:px-10 xl:px-20 mt-8 w-[90%] mx-auto">
        {categories.map((cat) => (
          <div className="w-[85%] sm:w-[44%] lg:w-[22%] text-center cursor-pointer mt-10">
            <Image src={cat.image} className="w-full h-[9vw] min-h-[170px]" />
            <p className="text-xl mt-2 font-semibold">{cat.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
