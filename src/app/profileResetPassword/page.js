"use client";
import PinkButton from "@/components/buttons/PinkButton";
import React, { useContext, useEffect, useState } from "react";
import LoginMainImg from "../../assets/images/profile-reset-password.png";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import { resetPasword } from "@/api/user";
import { AuthContext } from "@/contexts/userContext";
import useAlert from "@/hooks/useAlert";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [newPassword, setnewPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [email, setemail] = useState("");
  const [apiCalled, setapiCalled] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { setAlert } = useAlert();

  const handleResetPassword = () => {
    setapiCalled(true);
    if (newPassword == confirmPassword) {
      resetPasword({ email, password: newPassword })
        .then((res) => {
          setapiCalled(false);
          setAlert("Password reset successfully", "success");
          router.push("/userProfiling");
        })
        .catch((err) => {
          setapiCalled(false);
        });
    } else {
      setAlert("Passwords donot match", "danger");
    }
  };

  useEffect(() => {
    if (currentUser?.source == "google") {
      router.replace("/");
    }
    setemail(currentUser?.email);
  }, [currentUser]);

  return (
    <div className="flex h-screen">
      <div className="w-[100%] md:w-[50%] flex flex-col justify-center items-center px-8 sm:px-16 py-8">
        <div className="md:max-w-[700px] w-full">
          <p className="font-bold text-3xl text-center">Create New Password</p>
          <p className="text-gray-400 text-center mb-3 w-[70%] mx-auto mt-3">
            Your new password must be different from previous used password
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">New Password</label>
              <PrimaryInput
                type="password"
                placeholder="******"
                value={newPassword}
                changeHandler={(e) => {
                  setnewPassword(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Confirm Password</label>
              <PrimaryInput
                type="password"
                placeholder="*******"
                value={confirmPassword}
                changeHandler={(e) => {
                  setconfirmPassword(e.target.value);
                }}
              />
            </div>
            <PinkButton
              text={"SUBMIT"}
              clickHandler={handleResetPassword}
              disabled={apiCalled}
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
