"use client";

import PinkButton from "@/components/buttons/PinkButton";
import TransparentButton from "@/components/buttons/TransparentButton";
import React from "react";
import GoogleIcon from "../../assets/icons/google.svg";
import Link from "next/link";
import Image from "next/image";
import LoginMainImg from "../../assets/images/login.png";
import PrimaryInput from "@/components/Inputs/PrimaryInput";

export default function Page() {
  return (
    <div className="flex h-screen">
      <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center px-8 sm:px-16 py-8">
        <div className="md:max-w-[700px] w-full">
          <p className="font-bold text-3xl text-center">Welcome Back!</p>
          <p className="text-gray-400 text-center mb-3 w-[70%] mx-auto mt-3">
            you have been missed for long Time
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <PrimaryInput
                type="email"
                placeholder="Example@yahoo.com"
                value={""}
                changeHandler={() => {}}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <PrimaryInput
                type="password"
                placeholder="******"
                value={""}
                changeHandler={() => {}}
              />
            </div>

            <PinkButton text={"LOGIN"} />
            <TransparentButton
              text={"Continue with Google"}
              icon={GoogleIcon}
            />
          </div>
        </div>
        <p className="text-sm text-center mt-2">
          Dont Have an Account?
          <Link className="font-bold underline" href="/signup">
            Signup
          </Link>
        </p>
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
