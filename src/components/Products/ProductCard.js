"use client";
import React, { useContext, useEffect, useState } from "react";
import HeartIcon from "../../assets/icons/heart.svg";
import HeartFillIcon from "../../assets/icons/heart-fill.svg";
import PinkButton from "../buttons/PinkButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Stars from "../Stars";
import { AuthContext } from "@/contexts/userContext";

const ProductCard = ({ product }) => {
  const router = useRouter();

  const { wishlist, setwishlist } = useContext(AuthContext);
  const [isFavourite, setisFavourite] = useState(false);

  const handleToggleWishlist = () => {
    if (isFavourite) {
      setisFavourite(false);
      setwishlist(wishlist.filter((pro) => pro._id != product._id));
    } else {
      setisFavourite(true);
      setwishlist([...wishlist, product]);
    }
  };

  useEffect(() => {
    if (wishlist.find((pro) => pro._id == product._id)) {
      setisFavourite(true);
    }
  }, []);

  return (
    <div className="w-[90%] sm:w-[48%] lg:w-[23.5%] mt-10 relative">
      <div className="absolute top-0 right-0 bg-primary w-[50%] px-3 py-2 text-center min-w-fit z-20">
        <p className="text-white whitespace-nowrap">
          {product.discount} % discount
        </p>
      </div>
      <div className="relative h-[15vw] min-h-[270px] mb-2">
        <Image
          src={product.images[0]}
          fill
          // width={30}
          // height={30}
          className="w-full object-cover"
        />
      </div>
      <Stars rating={product.review} starColor={"#FDCC0D"} />
      <div className="flex flex-col gap-2 mt-2">
        <div className="flex justify-between">
          <p className="text-xl font-semibold">{product.name}</p>
          <Image
            onClick={handleToggleWishlist}
            src={isFavourite ? HeartFillIcon : HeartIcon}
            className="cursor-pointer"
          />
        </div>
        <div className="flex items-end gap-3">
          <p className="font-semibold">${product.discountedPrice}</p>
          <p className="text-sm text-gray-500 line-through">${product.price}</p>
        </div>
        <PinkButton
          text={"Buy Now"}
          clickHandler={() => router.push(`/product/${product._id}`)}
        />
      </div>
    </div>

    // <div className="sm:w-[44%] lg:w-[23%] relative mt-16">
    //   <div className="absolute top-0 right-0 bg-primary w-[50%] px-3 py-2 text-center min-w-fit">
    //     <p className="text-white whitespace-nowrap">
    //       {product.discount} % discount
    //     </p>
    //   </div>
    //   <div className="bg-[#FAFAFA]">
    //     <div className="relative h-[15vw] min-h-[270px] mb-2">
    //       <Image src={product.images[0]} fill className="w-full object-cover" />
    //     </div>
    //     {/* <Image
    //       src={product.images[0]}
    //       className="w-full h-[15vw] min-h-[270px]"
    //     /> */}
    //   </div>
    //   <div className="flex flex-col gap-2">
    //     <div className="flex justify-between">
    //       <p className="text-xl font-semibold">{product.name}</p>
    //       <Image
    //         onClick={handleToggleWishlist}
    //         src={isFavourite ? HeartFillIcon : HeartIcon}
    //         className="cursor-pointer"
    //       />
    //     </div>
    //     <Stars rating={product.review} starColor={"#FDCC0D"} />
    //     <div className="flex items-end gap-3">
    //       <p className="font-semibold">${product.discountedPrice}</p>
    //       <p className="text-sm text-gray-500 line-through">
    //         ${product.originalPrice}
    //       </p>
    //     </div>
    //     <PinkButton
    //       text={"Buy Now"}
    //       clickHandler={() => router.push(`/product/${1}`)}
    //     />
    //   </div>
    // </div>
  );
};

export default ProductCard;
