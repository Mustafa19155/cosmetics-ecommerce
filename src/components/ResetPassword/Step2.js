import React, { useEffect, useState } from "react";
import PrimaryInput from "../Inputs/PrimaryInput";
import useAlert from "@/hooks/useAlert";
import { requestOtp, verifyOtp } from "@/api/user";
import PinkButton from "../buttons/PinkButton";

const Step2 = ({ email, setstep }) => {
  const [numberOne, setnumberOne] = useState("");
  const [numberTwo, setnumberTwo] = useState("");
  const [numberThree, setnumberThree] = useState("");
  const [numberFour, setnumberFour] = useState("");
  const [apiCalled, setapiCalled] = useState(false);

  const [seconds, setSeconds] = useState(59);

  const { setAlert } = useAlert();

  const handleGetOtp = () => {
    setapiCalled(true);
    requestOtp({ email })
      .then((res) => {
        setapiCalled(false);
        setSeconds(59);
      })

      .catch((err) => {
        setapiCalled(false);
      });
  };

  const handleVerifyOtp = () => {
    setapiCalled(true);
    verifyOtp({ email, otp: numberOne + numberTwo + numberThree + numberFour })
      .then((res) => {
        setstep((step) => step + 1);
        setapiCalled(false);
      })
      .catch((err) => {
        setAlert(err, "danger");
        setapiCalled(false);
      });
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

  return (
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
  );
};

export default Step2;
