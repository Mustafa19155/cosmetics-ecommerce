"use client";
import React, { useContext, useState } from "react";
import ProductGallery from "./ProductGallery";
import PinkButton from "../buttons/PinkButton";
import TransparentButton from "../buttons/TransparentButton";
import PlusIcon from "../../assets/icons/plus.svg";
import MinusIcon from "../../assets/icons/minus.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/userContext";
import PrimaryInput from "../Inputs/PrimaryInput";

const ProductTop = ({ product }) => {
  const router = useRouter();
  const [quantity, setquantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < product.quantity) setquantity(quantity + 1);
  };

  const { cart, setcart } = useContext(AuthContext);

  const handleAddToCart = () => {
    const itemIndex = cart.items.findIndex(
      (item) => item.product._id == product._id
    );

    if (itemIndex > -1) {
      const itemsCopy = [...cart.items];
      if (
        quantity + itemsCopy[itemIndex].quantity <=
        itemsCopy[itemIndex].product.quantity
      ) {
        itemsCopy[itemIndex].quantity += quantity;

        setcart({
          ...cart,
          items: itemsCopy,
          total: product.discountedPrice * itemsCopy[itemIndex].quantity,
        });
      }
    } else {
      setcart({
        ...cart,
        items: [...cart.items, { product, quantity }],
        total: cart.total + product.discountedPrice * quantity,
      });
    }

    router.push("/cart");
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-[40%] md:p-0">
        <ProductGallery images={product.images} />
      </div>
      <div className="md:w-[60%] p-5 flex flex-col gap-8">
        <div>
          <div className="flex flex-col md:flex-row items-end gap-3">
            <p className="font-bold text-3xl notranslate">{product.name}</p>
            <p className="text-sm text-primary whitespace-nowrap">
              {product.quantity > 0
                ? "Available in stock"
                : "Not Available in stock"}
            </p>
          </div>
        </div>
        <p>{product.desc}</p>
        <div className="flex items-center gap-3">
          <p className="text-3xl font-bold notranslate">
            {product.discountedPrice}€
          </p>
          {product.discount > 0 && (
            <p className="line-through text-secondary notranslate">
              {product.price}€
            </p>
          )}
        </div>
        <div className="flex gap-8 text-lg items-center px-4 py-2 border-primary border w-fit">
          <Image
            src={MinusIcon}
            onClick={handleDecrement}
            className="cursor-pointer"
          />
          <PrimaryInput
            textCenter={true}
            type={"number"}
            className="w-[40px] px-0 shadow-none bg-white"
            value={quantity}
            changeHandler={(e) => {
              if (e.target.value >= 0 && e.target.value < product.quantity) {
                setquantity(parseInt(e.target.value));
              }
            }}
          >
            {quantity}
          </PrimaryInput>
          <Image
            src={PlusIcon}
            onClick={handleIncrement}
            className="cursor-pointer"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-6 sm:pr-20">
          <TransparentButton
            disabled={product.quantity == 0}
            text={"BUY NOW"}
            className={"text-primary"}
            clickHandler={() => {
              setcart({
                total: product.discountedPrice * quantity,
                items: [{ product, quantity }],
              });
              router.push("/checkout");
            }}
          />
          <PinkButton
            disabled={product.quantity == 0}
            text={"ADD TO CART"}
            clickHandler={handleAddToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTop;
