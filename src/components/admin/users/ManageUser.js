"use client";
import Image from "next/image";
import React, { useState } from "react";
import PortfileImg from "@/assets/images/profile.png";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import PinkButton from "@/components/buttons/PinkButton";

const ManageUser = () => {
  const [username, setusername] = useState("username");
  const [email, setemail] = useState("email@email.com");
  const [image, setimage] = useState("");
  const [isEditing, setisEditing] = useState(false);

  return (
    <div className="bg-white shadow-cart-wrapper mt-16 flex flex-col items-center gap-10 py-8 sm:px-4 sm:py-8 md:p-8 lg:p-16">
      <label for="file" className="cursor-pointer">
        <img
          src={image ? URL.createObjectURL(image) : PortfileImg.src}
          className="h-[167px] w-[167px] rounded-full"
        />

        <input
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
      <div className="flex items-center gap-20 ml-8 sm:ml-24">
        <label>Name</label>
        <PrimaryInput
          disabled={!isEditing}
          className={`${isEditing ? "" : "bg-white shadow-none"}`}
          value={username}
          changeHandler={(e) => setusername(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-20 ml-8 sm:ml-24">
        <label>Email</label>
        <PrimaryInput
          disabled={!isEditing}
          className={`${isEditing ? "" : "bg-white shadow-none"}`}
          x
          value={email}
          changeHandler={(e) => setemail(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        {isEditing ? (
          <PinkButton
            text={"SAVE"}
            className={"px-16"}
            clickHandler={() => setisEditing(false)}
          />
        ) : (
          <PinkButton
            text={"EDIT"}
            className={"px-16"}
            clickHandler={() => setisEditing(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ManageUser;
