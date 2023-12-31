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
import { deleteCookie } from "@/actions/serverActions";

const ProfilingTop = () => {
  const router = useRouter();

  const { currentUser, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(async (res) => {
        await deleteCookie({ cookieName: "token" });
        setUser(null);
        router.push("/login");
      })
      .catch((err) => {});
  };

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const [apiCalled, setapiCalled] = useState(false);

  const [isEditing, setisEditing] = useState(false);

  const handleUpdateProfile = async () => {
    if (email && name) {
      setapiCalled(true);
      const formData = new FormData();

      formData.append("email", email);
      formData.append("name", name);
      if (image instanceof File) {
        formData.append("images", image);
      } else {
        // const response = await fetch(image);
        // const imgData = await response.blob();
        // const fileName = "updatedImage";
        // formData.append(
        //   "images",
        //   new File([imgData], fileName, {
        //     type: imgData.type,
        //   })
        // );
      }

      updateUser({ data: formData })
        .then((res) => {
          setapiCalled(false);
          window.location.reload();
        })
        .catch((err) => {
          setapiCalled(false);
        });
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

          <div className="flex items-center justify-center gap-2 relative mb-2 w-full">
            {isEditing ? (
              <PrimaryInput
                textCenter={true}
                disabled={!isEditing}
                className={`${isEditing ? "" : "bg-white shadow-none"}`}
                value={name}
                changeHandler={(e) => setname(e.target.value)}
              />
            ) : (
              <p>{name}</p>
            )}
            <Image
              src={EditIcon}
              className="h-[16px] w-[16px] cursor-pointer absolute right-0"
              onClick={() => setisEditing(!isEditing)}
            />
          </div>
          {isEditing ? (
            <PrimaryInput
              textCenter={true}
              disabled={!isEditing}
              className={`${isEditing ? "" : "bg-white shadow-none"}`}
              value={email}
              changeHandler={(e) => setemail(e.target.value)}
            />
          ) : (
            <p>{email}</p>
          )}
          <div className="flex items-center gap-1">
            <Image src={DollarIcon} />
            <p>{currentUser?.coins} points</p>
          </div>
          {isEditing && (
            <PinkButton
              text={"Save"}
              clickHandler={handleUpdateProfile}
              disabled={apiCalled}
            />
          )}
        </div>
        <PinkButton
          text={"Rate Us"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
        />
        <PinkButton
          clickHandler={() => router.push("/wishlist")}
          text={"Favourites"}
          icon={WhiteArrow}
          className={"justify-between flex-row-reverse px-8"}
        />
        {currentUser?.source != "google" && (
          <PinkButton
            text={"Change Password"}
            icon={WhiteArrow}
            className={"justify-between flex-row-reverse px-8"}
            clickHandler={() => router.push("/profileResetPassword")}
          />
        )}
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
