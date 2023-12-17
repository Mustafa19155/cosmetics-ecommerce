"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { BrandsContext } from "@/contexts/brandsContext";
import { useRouter } from "next/navigation";

const Categories = () => {
  const router = useRouter();
  const { brands } = useContext(BrandsContext);

  return (
    <div>
      <p className="text-3xl font-bold text-center">Brands</p>
      <div className="flex justify-center sm:justify-between flex-wrap px-5 md:px-10 xl:px-20 mt-8 w-[90%] mx-auto">
        {brands.slice(0, 4).map((cat) => (
          <div
            className="w-[85%] sm:w-[44%] lg:w-[22%] text-center cursor-pointer mt-10"
            onClick={() => router.push(`/brand/${cat.brand._id}`)}
          >
            <div className="h-[5vw] min-h-[160px] flex justify-center items-center mb-4">
              <img src={cat.brand.image} className="max-w-auto" />
            </div>
            <p className="text-xl mt-2 font-semibold notranslate">
              {cat.brand.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
