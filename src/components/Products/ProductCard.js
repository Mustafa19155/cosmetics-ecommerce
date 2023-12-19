"use client";
import React, { useContext, useEffect, useState } from "react";
import HeartIcon from "../../assets/icons/heart.svg";
import HeartFillIcon from "../../assets/icons/heart-fill.svg";
import PinkButton from "../buttons/PinkButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Stars from "../Stars";
import { AuthContext } from "@/contexts/userContext";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const { wishlist, setwishlist, setcart } = useContext(AuthContext);
  // const [isFavourite, setisFavourite] = useState(false);

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    checkFav()
      ? setwishlist(wishlist.filter((pro) => pro._id != product._id))
      : setwishlist([...wishlist, product]);
  };

  const checkFav = () => {
    if (wishlist.find((pro) => pro._id == product._id)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div
      onClick={() => router.push(`/product/${product._id}`)}
      className="w-[90%] sm:w-[48%] lg:w-[23.5%] mt-10 relative cursor-pointer flex flex-col justify-between gap-5"
    >
      <div>
        {product.discount > 0 && (
          <div className="absolute top-0 right-0 bg-primary w-[50%] px-3 py-2 text-center min-w-fit z-20">
            <p className="text-white whitespace-nowrap">
              {product.discount} % discount
            </p>
          </div>
        )}
        <div className="relative h-[15vw] min-h-[270px] mb-2 flex justify-center items-center overflow-hidden">
          <img src={product.images[0]} className="max-w-auto max-h-full" />
        </div>
        <Stars rating={product.review} starColor={"#FDCC0D"} />
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex justify-between">
            <p className="text-xl font-semibold notranslate">{product.name}</p>
            <Image
              onClick={handleToggleWishlist}
              src={checkFav() ? HeartFillIcon : HeartIcon}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-end gap-3">
            <p className="font-semibold notranslate">
              €{product.discountedPrice}
            </p>
            {product.discount > 0 && (
              <p className="text-sm text-gray-500 line-through notranslate">
                €{product.price}
              </p>
            )}
          </div>
        </div>
      </div>
      <PinkButton
        text={"Buy Now"}
        clickHandler={(e) => {
          e.stopPropagation();
          setcart({
            total: product.discountedPrice,
            items: [{ product, quantity: 1 }],
          });
          router.push("/checkout");
        }}
      />
    </div>
  );
};

export default ProductCard;
