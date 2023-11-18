"use client";
import { getAdmin } from "@/api/user";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  // const headersList = headers();
  // const activePath = headersList.get("x-invoke-path");

  useEffect(() => {
    getAdmin()
      .then((res) => {})
      .catch((err) => {
        window.location = "/adminLogin";
      });
  }, []);

  return (
    <div className="overflow-x-hidden relative !top-0">
      <div className="flex min-h-screen">
        <Sidebar />
        <div
          className={`flex flex-col h-full w-full ml-[40px] sm:ml-[260px] 
          ${pathname == "/admin" ? "bg-white" : "bg-gray-1"} 
          min-h-screen`}
        >
          <Navbar />
          <div className="m-6 mb-16 mt-[90px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
