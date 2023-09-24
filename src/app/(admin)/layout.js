"use client";
import Navbar from "@/components/admin/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="overflow-x-hidden">
        <div className="flex min-h-screen">
          <Sidebar />
          <div
            className={`flex flex-col h-full w-full ${
              pathname == "/admin" ? "bg-white" : "bg-gray-1"
            } min-h-screen`}
          >
            <Navbar />
            <div className="m-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}