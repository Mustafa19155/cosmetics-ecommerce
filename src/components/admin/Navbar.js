"use client";
import React from "react";
import UserImg from "../../assets/images/admin-user.png";
import NotificationIcon from "../../assets/icons/notification.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="shadow-admin-navbar w-full flex justify-between p-4 bg-white">
      <div className="flex items-center gap-2">
        <p className="font-bold text-2xl">Hello Admin</p>
        <div className="relative">
          <p className="h-[9px] w-[9px] rounded-full bg-primary top-0 z-10 absolute left-3" />
          <Image src={NotificationIcon} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="font-bold">Alex Hales</p>
        <Image src={UserImg} className="h-[45px] w-[45px] rounded-full" />
      </div>
    </div>
  );
};

export default Navbar;
