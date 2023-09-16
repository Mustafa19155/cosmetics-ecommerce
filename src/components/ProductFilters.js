"use client";
import React, { useState } from "react";
import SelectInput from "./Inputs/SelectInput";

const ProductFilters = () => {
  const [typeOptions, settypeOptions] = useState([
    { name: "Men's", value: "men" },
    { name: "Women's", value: "women" },
    { name: "Children's", value: "children" },
  ]);

  const [sortOptions, setsortOptions] = useState([
    { name: "Highest Price", value: "highest" },
    { name: "Lowest Price", value: "lowest" },
  ]);

  return (
    <div className="flex justify-center sm:justify-end gap-5  text-center sm:text-start">
      <div className="w-[25%] min-w-fit">
        <p className="font-bold text-lg mb-1">Type</p>
        <div className="cursor-pointer">
          <SelectInput options={typeOptions} />
        </div>
      </div>
      <div className="w-[25%] min-w-fit">
        <p className="font-bold text-lg mb-1">Sort By</p>
        <div className="cursor-pointer">
          <SelectInput options={sortOptions} />
        </div>
      </div>
    </div>
  );
};

export default ProductFilters;
