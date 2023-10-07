"use client";
import React, { useContext, useEffect, useState } from "react";
import ProImg from "../../../assets/images/product-detail.png";
import CartLeft from "@/components/Cart/CartLeft";
import CartRight from "@/components/Cart/CartRight";
import { AuthContext } from "@/contexts/userContext";

const Page = () => {
  const [isLoading, setisLoading] = useState(true);

  // const { cart, setcart } = useContext(AuthContext);

  useEffect(() => {
    setisLoading(false);
  }, []);

  const data = [];
  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <div className="flex flex-wrap my-16 justify-center gap-10 md:gap-0">
          <div className="md:w-[60%] xl:w-[65%]">
            <CartLeft />
          </div>
          <div className="md:w-[37%] lg:w-[35%] xl:w-[30%] p-10 rounded-lg shadow-cart-wrapper border border-primary h-fit ml-[3%]">
            <CartRight />
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
