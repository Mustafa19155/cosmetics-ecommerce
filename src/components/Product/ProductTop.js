"use client";
import React, { useState } from "react";
import ProductGallery from "./ProductGallery";
import PinkButton from "../buttons/PinkButton";
import TransparentButton from "../buttons/TransparentButton";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductTop = ({ product }) => {
  const router = useRouter();
  const [quantity, setquantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setquantity(quantity + 1);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-[40%] md:p-0">
        <ProductGallery images={product.images} />
      </div>
      <div className="md:w-[60%] p-5 flex flex-col gap-8">
        <div>
          <div className="flex items-end gap-3">
            <p className="font-bold text-3xl">{product.name}</p>
            <p className="text-sm text-primary">
              {product.available
                ? "Available in stock"
                : "Not Available in stock"}
            </p>
          </div>
          <p className="text-secondary text-lg">{product.smallDesc}</p>
        </div>
        <p>{product.desc}</p>
        <div className="flex items-center gap-3">
          <p className="text-3xl font-bold">${product.discountedPrice}</p>
          <p className="line-through text-secondary">
            ${product.originalPrice}
          </p>
        </div>
        <div className="flex gap-8 text-lg items-center px-4 py-2 border-primary border w-fit">
          <Image
            src={MinusIcon}
            onClick={handleDecrement}
            className="cursor-pointer"
          />
          <p className="font-bold w-[25px] text-center">{quantity}</p>
          <Image
            src={PlusIcon}
            onClick={handleIncrement}
            className="cursor-pointer"
          />
        </div>
        <div className="flex gap-6 sm:pr-20">
          <TransparentButton
            text={"BUY NOW"}
            className={"text-primary"}
            clickHandler={() => router.push("/checkout")}
          />
          <PinkButton
            text={"ADD TO CART"}
            clickHandler={() => router.push("/cart")}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTop;
