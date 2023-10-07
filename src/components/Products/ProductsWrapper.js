"use client";
import React, { useEffect, useState } from "react";
import ProductFilters from "../ProductFilters";
import ProductCard from "./ProductCard";
import SelectInput from "../Inputs/SelectInput";

const ProductsWrapper = ({ products }) => {
  const options = [
    { name: "Highest Price", value: "highest" },
    { name: "Lowest Price", value: "lowest" },
  ];

  const [productsCopy, setproductsCopy] = useState([]);
  const [currentFilter, setcurrentFilter] = useState(options[0]);

  useEffect(() => {
    const sortedPros = [...products];
    if (currentFilter.value == "highest") {
      sortedPros.sort((a, b) => b.discountedPrice - a.discountedPrice);
    } else {
      sortedPros.sort((a, b) => a.discountedPrice - b.discountedPrice);
    }
    setproductsCopy([...sortedPros]);
  }, [products, currentFilter]);

  return (
    <div>
      <div className="my-16">
        <div className="flex justify-end gap-5 ">
          <div className="w-[25%] min-w-fit">
            <p className="font-bold text-lg mb-1">Sort By</p>
            <div className="cursor-pointer">
              <SelectInput
                options={options}
                active={currentFilter}
                setactive={(e) => setcurrentFilter(e)}
                dropdownClassName={"top-10"}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full justify-center sm:justify-start flex flex-wrap gap-[4%] lg:gap-[2%]">
        {productsCopy.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsWrapper;
