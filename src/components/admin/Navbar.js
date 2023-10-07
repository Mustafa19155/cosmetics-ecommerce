"use client";
import React, { useContext, useEffect, useState } from "react";
import defaultPic from "@/assets/icons/profile.svg";
import NotificationIcon from "../../assets/icons/notification.svg";
import Image from "next/image";
import ProfileDropdown from "./ProfileDropdown";
import { AuthContext } from "@/contexts/userContext";

const Navbar = () => {
  const [showDropdown, setshowDropdown] = useState(false);
  const [loading, setloading] = useState(true);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setloading(false);
  }, []);

  return (
    <>
      {loading ? (
        ""
      ) : (
        <div className="shadow-admin-navbar w-[calc(100vw_-_40px)] sm:w-[calc(100vw_-_260px)] flex justify-between p-4 bg-white fixed z-30">
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
              <p className="font-bold">{currentUser?.name}</p>
              <img
                src={
                  currentUser?.picture ? currentUser.picture : defaultPic.src
                }
                className="h-[45px] w-[45px] rounded-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
