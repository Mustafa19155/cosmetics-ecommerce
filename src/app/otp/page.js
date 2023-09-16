"use client";

import PinkButton from "@/components/buttons/PinkButton";
import TransparentButton from "@/components/buttons/TransparentButton";
import React from "react";
import GoogleIcon from "../../assets/icons/google.svg";
import Link from "next/link";
import Image from "next/image";
import LoginMainImg from "../../assets/images/login.png";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center px-8 sm:px-16 py-8">
        <div className="md:max-w-[700px] w-full">
          <div className="flex flex-col gap-5">
            <p className="font-bold text-3xl text-center">OTP Verification</p>
            <p className="text-gray-400 text-center mb-3 w-[70%] mx-auto mt-3">
              We have sent a 4 digit code to your email address
            </p>

            <div className="flex gap-5">
              <PrimaryInput
                type="number"
                className="bg-white shadow-custom-2 h-16 text-center rounded-lg outline-none w-[23%]"
              />
              <PrimaryInput
                type="number"
                className="bg-white shadow-custom-2 h-16 text-center rounded-lg outline-none w-[23%]"
              />
              <PrimaryInput
                type="number"
                className="bg-white shadow-custom-2 h-16 text-center rounded-lg outline-none w-[23%]"
              />
              <PrimaryInput
                type="number"
                className="bg-white shadow-custom-2 h-16 text-center rounded-lg outline-none w-[23%]"
              />
            </div>
            <p className="text-center text-primary">00:19</p>
            <p className="text-center">
              Dont recieve the OTP?{" "}
              <span className="text-primary">RESEND OTP</span>
            </p>
            <PinkButton
              text={"VERIFY NOW"}
              clickHandler={() => {
                router.push("/newPassword");
              }}
            />
          </div>
        </div>
      </div>
      <div
        className="w-[50%] h-full hidden md:block"
        style={{
          backgroundImage: `url(${LoginMainImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        {/* <Image src={LoginMainImg} className="h-full w-[100%] object-cover" /> */}
      </div>
    </div>
  );
}
