"use client";
import React from "react";
import AboutImg from "../../assets/images/home/about.png";
import TransparentButton from "../buttons/TransparentButton";
import { useRouter } from "next/navigation";

const AboutProduct = () => {
  const router = useRouter();
  return (
    <div className="custom-full-width-child bg-primary">
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 py-8 px-5 sm:p-10 max-w-[1700px] mx-auto">
        <div
          className="w-[100%] md:w-[50%] min-h-[350px]"
          style={{
            backgroundImage: `url(${AboutImg.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>
        <div className="md:w-[50%] md:p-8 lg:p-16 2xl:p-28">
          <p className="text-3xl text-white font-bold">
            About Our Iconic Product
          </p>
          <p className="text-white mt-8 mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <TransparentButton
            text={"BUY NOW"}
            className={"bg-white border-0"}
            clickHandler={() => router.push("/products")}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;
