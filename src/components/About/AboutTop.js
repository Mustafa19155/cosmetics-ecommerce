"use client";
import Image from "next/image";
import React from "react";
import PinkButton from "../buttons/PinkButton";
import AboutImg from "../../assets/images/about.png";
import FacebookIcon from "../../assets/icons/about/facebook.svg";
import TwitterIcon from "../../assets/icons/about/twitter.svg";
import LinkedInIcon from "../../assets/icons/about/linkedIn.svg";
import { useRouter } from "next/navigation";

const AboutTop = () => {
  const router = useRouter();

  return (
    <div className="flex items-center flex-wrap gap-10 md:gap-0">
      <div className="w-full md:w-[45%] lg:px-8 h-full">
        <Image src={AboutImg} className="w-full h-full max-h-[450px]" />
      </div>
      <div className="w-full md:w-[55%] flex flex-col gap-8 md:px-8 lg:px-0">
        <div className="flex flex-col gap-1 border-b-2 border-primary w-fit pr-3 pb-2">
          <p className="text-xl font-bold">About</p>
          <p className="text-xl font-bold">Our Shop</p>
        </div>
        <p className="lg:pr-10 xl:pr-48">
          At Treasure Haven, we're more than just a store; we're your shopping
          sanctuary. Discover a world of extraordinary products and exceptional
          service that will make every visit memorable.At Treasure Haven, we're
          more than just a store; we're your shopping sanctuary. Discover a
          world of extraordinary products and exceptional service that will make
          every visit memorable.At Treasure Haven, we're more than just a store;
          we're your shopping sanctuary. Discover a world of extraordinary
          products and At Treasure Haven, we're more than just a store;
        </p>
        <div className="flex gap-5">
          <Image src={FacebookIcon} />
          <Image src={TwitterIcon} />
          <Image src={LinkedInIcon} />
        </div>
        <PinkButton
          text={"CONTACT US"}
          className={"!w-fit px-20"}
          clickHandler={() => router.push("/contact")}
        />
      </div>
    </div>
  );
};

export default AboutTop;
