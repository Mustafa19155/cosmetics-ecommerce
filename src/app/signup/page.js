"use client";

import PinkButton from "@/components/buttons/PinkButton";
import TransparentButton from "@/components/buttons/TransparentButton";
import React, { useContext, useEffect, useState } from "react";
import GoogleIcon from "../../assets/icons/google.svg";
import Link from "next/link";
import LoginMainImg from "../../assets/images/login.png";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import { useRouter } from "next/navigation";
import { registerUser } from "@/api/user";
import useAlert from "@/hooks/useAlert";
import { AuthContext } from "@/contexts/userContext";
import EyeIcon from "@/assets/icons/eye.svg";

export default function Page() {
  const router = useRouter();

  const { setAlert } = useAlert();

  const { currentUser } = useContext(AuthContext);

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState();
  const [apiCalled, setapiCalled] = useState(false);
  const [loading, setloading] = useState(true);
  const [showPass, setshowPass] = useState(false);
  const [showConfirmPass, setshowConfirmPass] = useState(false);

  const handleRegister = () => {
    if (email && password && name)
      if (password == confirmPassword) {
        setapiCalled(true);
        registerUser({ name, email, password })
          .then((res) => {
            setapiCalled(false);
            setAlert(
              "Account created succesfully. Please Login to continue",
              "success"
            );
          })
          .catch((err) => {
            setapiCalled(false);
            setAlert(err, "danger");
          });
      } else {
        setAlert("Passwords Donot Match", "danger");
      }
  };

  useEffect(() => {
    if (currentUser) {
      router.push("/");
    } else {
      setloading(false);
    }
  }, []);

  if (loading) return null;

  return (
    <div className="flex h-screen">
      <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center px-8 sm:px-16 py-8">
        <div className="md:max-w-[700px] w-full">
          <p className="font-bold text-3xl text-center">Create Account</p>
          <p className="text-gray-400 text-center mb-3 w-[70%] mx-auto mt-3">
            Create your account for better Experience
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label>Name</label>
              <PrimaryInput
                type="text"
                placeholder="David John"
                value={name}
                changeHandler={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <PrimaryInput
                type="email"
                placeholder="Example@yahoo.com"
                value={email}
                changeHandler={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Password</label>
              <div className="relative">
                <PrimaryInput
                  type={showPass ? "text" : "password"}
                  placeholder="******"
                  value={password}
                  changeHandler={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <img
                  onClick={() => setshowPass(!showPass)}
                  src={EyeIcon.src}
                  className="absolute h-5 w-5 top-2 right-3 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label>Confirm Password</label>
              <div className="relative">
                <PrimaryInput
                  type={showConfirmPass ? "text" : "password"}
                  placeholder="*******"
                  value={confirmPassword}
                  changeHandler={(e) => {
                    setconfirmPassword(e.target.value);
                  }}
                />
                <img
                  onClick={() => setshowConfirmPass(!showConfirmPass)}
                  src={EyeIcon.src}
                  className="absolute h-5 w-5 top-2 right-3 cursor-pointer"
                />
              </div>
            </div>
            <PinkButton text={"REGISTER"} clickHandler={handleRegister} />
            <TransparentButton
              clickHandler={() =>
                router.push(
                  `${process.env.NEXT_PUBLIC_BASE_URL}users/auth/google`
                )
              }
              text={"Continue with Google"}
              icon={GoogleIcon}
            />
          </div>
        </div>
        <p className="text-sm text-center mt-2 flex gap-1">
          Already Have an Account?
          <Link className="font-bold underline" href="/login">
            Login
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
