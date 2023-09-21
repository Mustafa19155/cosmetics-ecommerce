"use client";
import React from "react";
import SidebarRoutes from "@/constants/SidebarRoutes";
import { usePathname, useRouter } from "next/navigation";

const Sidebar = () => {
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
    <div className="bg-primary text-white w-[260px] min-h-screen p-4 flex flex-col gap-5 pt-20">
      {SidebarRoutes.map((route) => (
        <div
          className={`flex items-center gap-3 rounded-lg p-3 cursor-pointer ${
            hasRoute({ route }) ? "bg-white text-primary" : ""
          }`}
          onClick={() => router.push(route.link)}
        >
          {hasRoute({ route }) ? route.activeIcon : route.icon}
          <p className="capitalize">{route.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
