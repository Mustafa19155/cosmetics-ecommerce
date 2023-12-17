"use client";
import React, { useState } from "react";
import LoginMainImg from "../../assets/images/login.png";
import Step1 from "@/components/ResetPassword/Step1";
import Step2 from "@/components/ResetPassword/Step2";
import Step3 from "@/components/ResetPassword/Step3";

export default function Page() {
  const [email, setemail] = useState("");
  const [currentStep, setcurrentStep] = useState(1);

  return (
    <div className="flex h-screen">
      {currentStep == 1 ? (
        <Step1
          email={email}
          setemail={setemail}
          setcurrentStep={setcurrentStep}
        />
      ) : currentStep == 2 ? (
        <Step2 email={email} setstep={setcurrentStep} />
      ) : (
        <Step3 />
      )}
      <div
        className="w-[50%] h-full hidden md:block"
        style={{
          backgroundImage: `url(${LoginMainImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      ></div>
    </div>
  );
}
