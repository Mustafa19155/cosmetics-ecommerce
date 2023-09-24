"use client";
import React, { useState } from "react";
import UserImg from "../../assets/images/admin-user.png";
import NotificationIcon from "../../assets/icons/notification.svg";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";

const Navbar = () => {
  const [showDropdown, setshowDropdown] = useState(false);

  return (
    <div className="shadow-admin-navbar w-full flex justify-between p-4 bg-white">
      <div className="flex items-center gap-2">
        <p className="font-bold text-2xl">Hello Admin</p>
        <div className="relative">
          <p className="h-[9px] w-[9px] rounded-full bg-primary top-0 z-10 absolute left-3" />
          <Image src={NotificationIcon} />
        </div>
      </div>
      <div className="relative">
        <ProfileDropdown show={showDropdown} setshow={setshowDropdown} />
        <div
          className="flex items-center gap-2 relative cursor-pointer"
          onClick={() => setshowDropdown(true)}
        >
          <p className="font-bold">Alex Hales</p>
          <Image src={UserImg} className="h-[45px] w-[45px] rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
