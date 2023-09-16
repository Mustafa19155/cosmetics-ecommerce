"use client";

import PinkButton from "@/components/buttons/PinkButton";
import TransparentButton from "@/components/buttons/TransparentButton";
import React from "react";
import GoogleIcon from "../../assets/icons/google.svg";
import Link from "next/link";
import LoginMainImg from "../../assets/images/login.png";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center px-8 sm:px-16 py-8">
        <div className="md:max-w-[700px] w-full">
          <p className="font-bold text-3xl text-center">Reset Password</p>
          <p className="text-gray-400 text-center mb-3 w-[70%] mx-auto mt-3">
            Enter the email associated with your account to recieve a reset
            password mail
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Example@yahoo.com"
                className="bg-gray-1 shadow-custom-1 py-2 outline-none"
              />
            </div>
            <PinkButton
              text={"GET CODE"}
              clickHandler={() => {
                router.push("/otp");
              }}
            />
            <TransparentButton
              clickHandler={() => {
                router.push("/login");
              }}
              text={"BACK TO LOGIN"}
              className={"font-bold border-0"}
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
