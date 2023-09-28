import React, { useState } from "react";
import PinkButton from "../buttons/PinkButton";
import TransparentButton from "../buttons/TransparentButton";
import { requestOtp } from "@/api/user";

const Step1 = ({ email, setemail, setcurrentStep }) => {
  const [apiCalled, setapiCalled] = useState(false);
  const handleGetOtp = () => {
    setapiCalled(true);
    requestOtp({ email })
      .then((res) => {
        setapiCalled(false);
        // localStorage.setItem("otp-email", email);
        setcurrentStep((step) => step + 1);
      })
      .catch((err) => {
        setapiCalled(false);
        setAlert(err, "danger");
      });
  };

  return (
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
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="email"
              placeholder="Example@yahoo.com"
              className="bg-gray-1 shadow-custom-1 py-2 outline-none"
            />
          </div>
          <PinkButton text={"GET CODE"} clickHandler={handleGetOtp} />
          <TransparentButton
            disabled={apiCalled}
            clickHandler={() => {
              router.push("/login");
            }}
            text={"BACK TO LOGIN"}
            className={"font-bold border-0"}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1;
