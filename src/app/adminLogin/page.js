"use client";

import PinkButton from "@/components/buttons/PinkButton";
import React, { useContext, useEffect, useState } from "react";
import LoginMainImg from "../../assets/images/login.png";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import { useRouter } from "next/navigation";
import { getAdmin, getUser, loginAdmin, loginUser } from "@/api/user";
import { AuthContext } from "@/contexts/userContext";
import useAlert from "@/hooks/useAlert";
import { setCookie } from "@/actions/serverActions";
import EyeIcon from "@/assets/icons/eye.svg";

export default function Page() {
  const router = useRouter();

  const [email, setemail] = useState("");
  const { setAlert } = useAlert();
  const [password, setpassword] = useState("");
  const [apiCalled, setapiCalled] = useState(false);
  const [loading, setloading] = useState(true);
  const [showPass, setshowPass] = useState(false);

  const { setUser } = useContext(AuthContext);

  const handleLogin = () => {
    setapiCalled(true);
    loginAdmin({ email, password })
      .then((res) => {
        setCookie({ cookieName: "token", cookieValue: res.token });
        // localStorage.setItem("token", res.token);
        getAdmin()
          .then((res) => {
            setapiCalled(false);
            setUser({ name: res.name, email: res.email, picture: res.picture });
            router.push("/admin");
          })
          .catch((err) => {
            setapiCalled(false);
          });
      })
      .catch((err) => {
        setapiCalled(false);
        setAlert(err, "danger");
      });
  };

  useEffect(() => {
    getAdmin()
      .then((res) => {
        window.location = "/admin";
      })
      .catch((err) => {
        setloading(false);
      });
  }, []);

  if (loading) return null;

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
              {/* <Link href={"/resetPassword"}>
                <p className="text-sm text-end mt-1 underline">
                  Forgot Password
                </p>
              </Link> */}
            </div>

            <PinkButton
              text={"LOGIN"}
              clickHandler={handleLogin}
              disabled={apiCalled}
            />
            {/* <TransparentButton
              clickHandler={() =>
                router.push(
                  `${process.env.NEXT_PUBLIC_BASE_URL}/users/auth/google`
                )
              }
              text={"Continue with Google"}
              icon={GoogleIcon}
            /> */}
          </div>
        </div>
        {/* <p className="text-sm text-center mt-2 flex gap-1">
          Dont Have an Account?
          <Link className="font-bold underline" href="/signup">
            Signup
          </Link>
        </p> */}
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
