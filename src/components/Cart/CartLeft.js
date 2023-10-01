"use client";
import React, { useContext } from "react";
import DeleteIcon from "../../assets/icons/delete.svg";
import Image from "next/image";
import { AuthContext } from "@/contexts/userContext";
import CartItem from "./CartItem";

const CartLeft = ({ data }) => {
  const { cart, setcart } = useContext(AuthContext);

  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <p className="text-3xl font-bold">Cart</p>
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => setcart({ total: 0, items: [] })}
        >
          <Image src={DeleteIcon} />
          <p>Remove All</p>
        </div>
      </div>

      <div class="relative overflow-x-auto">
        <table class="w-full text-left">
          <thead>
            <tr class="bg-white border-b border-primary">
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.items.map((item, index) => {
              return <CartItem item={item} index={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CartLeft;
