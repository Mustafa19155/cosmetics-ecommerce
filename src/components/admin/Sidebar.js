"use client";
import React, { useState } from "react";
import SidebarRoutes from "@/constants/SidebarRoutes";
import { usePathname, useRouter } from "next/navigation";
import HamIcon from "@/assets/icons/hamburger.svg";
import Image from "next/image";

const Sidebar = () => {
  const [showSidebar, setshowSidebar] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const hasRoute = ({ route }) => {
    const a = route.link.replace("/admin", "");
    const b = pathname.replace("/admin", "");

    if (a == "") {
      if (b == "") {
        return true;
      } else {
        return false;
      }
    }
    return b.includes(a);
  };

  return (
    // absolute z-50 sm:relative
    <div
      className={`bg-primary text-white w-[40px] sm:w-[260px] min-h-screen p-0 sm:px-4 flex flex-col gap-5 pt-20 relative z-30 ${
        showSidebar ? "left-0" : ""
      }`}
    >
      {/* <svg
        width="21"
        height="16"
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-5 right-3"
      >
        <path d="M20 1H1H20ZM20 8H1H20ZM20 15H1H20Z" fill="#fff" />
        <path
          d="M20 1H1M20 8H1M20 15H1"
          stroke="#fff"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg> */}

      {SidebarRoutes.map((route) => (
        <div
          className={`flex items-center gap-3 rounded-lg px-3 sm:px-3 p-3 cursor-pointer justify-end sm:justify-start ${
            hasRoute({ route }) ? "bg-white text-primary" : ""
          }`}
          onClick={() => router.push(route.link)}
        >
          <div className="order-2 sm:order-1">
            {hasRoute({ route }) ? route.activeIcon : route.icon}
          </div>
          <p className="capitalize order-1 sm:order-2">{route.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
