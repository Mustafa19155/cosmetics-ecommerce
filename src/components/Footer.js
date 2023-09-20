import React from "react";
import FacebookIcon from "../assets/icons/footer/facebook.svg";
import TwitterIcon from "../assets/icons/footer/twitter.svg";
import LinkedInIcon from "../assets/icons/footer/linkedIn.svg";
import LocationIcon from "../assets/icons/footer/location.svg";
import PhoneIcon from "../assets/icons/footer/phone.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-secondary text-white custom-full-width-child px-6 lg:px-20 pt-20 pb-2">
      <div className="container mx-auto">
        <div className="flex gap-5 mb-10">
          <Image src={FacebookIcon} />
          <Image src={TwitterIcon} />
          <Image src={LinkedInIcon} />
        </div>
        <div className="flex justify-between flex-wrap">
          <div className="w-[100%] sm:w-[60%] lg:w-[37%] mb-4 sm:mb-16">
            <p className="text-2xl font-semibold mb-2">About Us</p>
            <p className="sm:pr-16 md:pr-32 lg:pr-10 xl:pr-32">
              At Your E-commerce Business Name, we are passionate about
              delivering the best shopping experience to our customers. With a
              commitment to quality, convenience, and innovation .
            </p>
          </div>
          <div className="w-[100%] sm:w-[40%] lg:mb-0 lg:w-[21%]  mb-4 sm:mb-0">
            <p className="text-2xl font-semibold mb-2">Information</p>
            <div className="flex flex-col gap-2">
              <p>My account</p>
              <p>Checkout</p>
              <p>Cart</p>
              <p>Shop</p>
              <p>Sample Page</p>
            </div>
          </div>
          <div className="w-[100%] sm:w-[60%] lg:mb-0 lg:w-[21%]  mb-4 sm:mb-0">
            <p className="text-2xl font-semibold mb-2">Quick Links</p>
            <div className="flex flex-col gap-2">
              <p>Wishlist</p>
              <p>My account</p>
              <p>Checkout</p>
              <p>Cart</p>
              <p>Shop</p>
            </div>
          </div>
          <div className="w-[100%] sm:w-[40%] lg:mb-0 lg:w-[21%]  mb-4 sm:mb-0">
            <p className="text-2xl font-semibold mb-2">Shop Information</p>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <Image src={LocationIcon} />
                <p>123 Main StreetAnytown</p>
              </div>
              <div className="flex gap-3 items-center">
                <Image src={PhoneIcon} />
                <p>+92-344445</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-sm mt-8">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end lg:w-[80%] gap-5 lg:gap-0">
          <p className="order-2 lg:order-1 text-center">
            <span className="whitespace-nowrap">
              COPYRIGHT © 2023 Aliyaa Beauty.
            </span>{" "}
            ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-8 items-center mt-4 whitespace-nowrap">
            <Link href={"/"}>
              <p>Privacy Policy</p>
            </Link>
            <Link href={"/"}>
              <p>Terms and Conditions</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
