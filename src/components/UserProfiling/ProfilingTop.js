"use client";
import React, { useContext, useEffect, useState } from "react";
import ProfileImg from "../../assets/icons/profile.svg";
import Image from "next/image";
import EditIcon from "../../assets/icons/edit.svg";
import DollarIcon from "../../assets/icons/dollar-yellow.svg";
import PinkButton from "../buttons/PinkButton";
import WhiteArrow from "../../assets/icons/arrow-white.svg";
import { useRouter } from "next/navigation";
import { logout, updateUser } from "@/api/user";
import { AuthContext } from "@/contexts/userContext";
import PrimaryInput from "../Inputs/PrimaryInput";

const ProfilingTop = () => {
  const router = useRouter();

  const { currentUser, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then((res) => {
        setUser(null);
        router.push("/login");
      })
      .catch((err) => {});
  };

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");

  const [isEditing, setisEditing] = useState(false);

  const handleUpdateProfile = () => {
    if (email && name) {
      const formData = new FormData();

      formData.append("email", email);
      formData.append("name", name);
      if (image instanceof File) formData.append("images", image);

      updateUser({ data: formData })
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {});
    }
  };

  useEffect(() => {
    if (currentUser) {
      setname(currentUser.name);
      setemail(currentUser.email);
      setimage(currentUser.picture);
    }
  }, [currentUser]);

  return (
    <div>
      <div className="shadow-cart-wrapper border-[rgba(251,107,144,0.2)] border p-6 flex flex-col gap-5 items-center w-[95%] sm:w-[70%] mx-auto">
        <div className="flex flex-col gap-1 items-center">
          <label for="file" className={`${isEditing ? "cursor-pointer" : ""}`}>
            {console.log(image)}
            <img
              src={
                image
                  ? image instanceof File
                    ? URL.createObjectURL(image)
                    : image
                  : ProfileImg.src
              }
              className="h-[167px] w-[167px] rounded-full"
            />

            <input
              disabled={!isEditing}
              type="file"
              id="file"
              name="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setimage(e.target.files[0]);
                }
              }}
            />
          </label>

          <div className="flex items-center gap-2 relative">
            <PrimaryInput
              textCenter={true}
              disabled={!isEditing}
              className={`${isEditing ? "" : "bg-white shadow-none"}`}
              value={name}
              changeHandler={(e) => setname(e.target.value)}
            />

            <Image
              src={EditIcon}
              className="h-[16px] w-[16px] cursor-pointer absolute right-0"
              onClick={() => setisEditing(!isEditing)}
            />
          </div>
          <PrimaryInput
            textCenter={true}
            disabled={!isEditing}
            className={`${isEditing ? "" : "bg-white shadow-none"}`}
            value={email}
            changeHandler={(e) => setemail(e.target.value)}
          />

          <div className="flex items-center gap-1">
            <Image src={DollarIcon} />
            <p>{currentUser?.coins} points</p>
          </div>
          {isEditing && (
            <PinkButton text={"Save"} clickHandler={handleUpdateProfile} />
          )}
        </div>
        <PinkButton
          text={"Rateu Us"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
        />
        <PinkButton
          clickHandler={() => router.push("/wishlist")}
          text={"Favourites"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
        />
        <PinkButton
          text={"Change Password"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
          clickHandler={() => router.push("/profileResetPassword")}
        />
        <PinkButton
          text={"Logout"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
          clickHandler={handleLogout}
        />
      </div>
    </div>
  );
};

export default ProfilingTop;
