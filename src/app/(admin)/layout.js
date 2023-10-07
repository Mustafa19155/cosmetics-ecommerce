// "use client";
import { getAdminBrands } from "@/api/brands";
import { getAdmin } from "@/api/user";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
// import { useEffect } from "react";

export default async function RootLayout({ children }) {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  try {
    await getAdmin();
  } catch (err) {
    redirect("/adminLogin");
  }

  return (
    // <html lang="en">
    //   <head>
    //     <link rel="preconnect" href="https://fonts.googleapis.com" />
    //     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    //     <link
    //       href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
    //       rel="stylesheet"
    //     ></link>
    //   </head>
    <div className="overflow-x-hidden relative !top-0">
      <div className="flex min-h-screen">
        <Sidebar />
        <div
          className={`flex flex-col h-full w-full ml-[40px] sm:ml-[260px] ${
            activePath == "/admin" ? "bg-white" : "bg-gray-1"
          } min-h-screen`}
        >
          <Navbar />
          <div className="m-6 mb-16 mt-[90px]">{children}</div>
        </div>
      </div>
    </div>
    // </html>
  );
}
