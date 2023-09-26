"use client";

import PinkButton from "@/components/buttons/PinkButton";
import TransparentButton from "@/components/buttons/TransparentButton";
import React, { useCallback, useEffect, useRef, useState } from "react";
import GoogleIcon from "../../assets/icons/google.svg";
import Link from "next/link";
import Image from "next/image";
import LoginMainImg from "../../assets/images/login.png";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import { useRouter } from "next/navigation";
import moment from "moment";
import { requestOtp, verifyOtp } from "@/api/user";

export default function Page() {
  const router = useRouter();

  const [numberOne, setnumberOne] = useState("");
  const [numberTwo, setnumberTwo] = useState("");
  const [numberThree, setnumberThree] = useState("");
  const [numberFour, setnumberFour] = useState("");
  const [email, setemail] = useState("");

  const [seconds, setSeconds] = useState(59);

  const handleGetOtp = () => {
    requestOtp({ email })
      .then((res) => {
        setSeconds(59);
      })
      .catch((err) => {});
  };

  const handleVerifyOtp = () => {
    verifyOtp({ email, otp: numberOne + numberTwo + numberThree + numberFour })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    router.push("/newPassword");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    setemail(localStorage.getItem("otp-email"));
  }, []);

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
                value={numberOne}
                changeHandler={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 9)
                    setnumberOne(e.target.value);
                }}
                type="number"
                className="bg-white shadow-custom-2 h-16 !text-center rounded-lg outline-none w-[23%]"
              />
              <PrimaryInput
                value={numberTwo}
                changeHandler={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 9)
                    setnumberTwo(e.target.value);
                }}
                type="number"
                className="bg-white shadow-custom-2 h-16 !text-center rounded-lg outline-none w-[23%]"
              />
              <PrimaryInput
                value={numberThree}
                changeHandler={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 9)
                    setnumberThree(e.target.value);
                }}
                type="number"
                className="bg-white shadow-custom-2 h-16 !text-center rounded-lg outline-none w-[23%]"
              />
              <PrimaryInput
                value={numberFour}
                changeHandler={(e) => {
                  if (e.target.value >= 0 && e.target.value <= 9)
                    setnumberFour(e.target.value);
                }}
                type="number"
                className="bg-white shadow-custom-2 h-16 !text-center rounded-lg outline-none w-[23%]"
              />
            </div>
            <p className="text-center text-primary">00:{seconds}</p>
            <p className="text-center">
              Dont recieve the OTP?{" "}
              <span
                className="text-primary cursor-pointer"
                onClick={handleGetOtp}
              >
                RESEND OTP
              </span>
            </p>
            <PinkButton text={"VERIFY NOW"} clickHandler={handleVerifyOtp} />
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
