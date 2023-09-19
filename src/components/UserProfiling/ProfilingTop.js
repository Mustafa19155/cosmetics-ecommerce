"use client";
import React from "react";
import AboutImg from "../../assets/images/about.png";
import Image from "next/image";
import EditIcon from "../../assets/icons/edit.svg";
import DollarIcon from "../../assets/icons/dollar-yellow.svg";
import PinkButton from "../buttons/PinkButton";
import WhiteArrow from "../../assets/icons/arrow-white.svg";
import { useRouter } from "next/navigation";

const ProfilingTop = () => {
  const router = useRouter();

  return (
    <div>
      <div className="shadow-cart-wrapper border-[rgba(251,107,144,0.2)] border p-6 flex flex-col gap-5 items-center w-[95%] sm:w-[70%] mx-auto">
        <div className="flex flex-col gap-1 items-center">
          <Image src={AboutImg} className="rounded-full h-[180px] w-[180px]" />
          <div className="flex items-center gap-2">
            <p className="font-bold text-xl">Sarah M</p>
            <Image src={EditIcon} className="h-[16px] w-[16px]" />
          </div>
          <p className="font-bold text-secondary">sarah@gmail.com</p>
          <div className="flex items-center gap-1">
            <Image src={DollarIcon} />
            <p>40 points</p>
          </div>
        </div>
        <PinkButton
          text={"Rateu Us"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
        />
        <PinkButton
          text={"Favourites"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
        />
        <PinkButton
          text={"Change Password"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
          clickHandler={() => router.push("/profileResetPassword")}
        />
        <PinkButton
          text={"Logout"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
        />
      </div>
    </div>
  );
};

export default ProfilingTop;
