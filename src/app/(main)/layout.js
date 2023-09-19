import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
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
        <div className="container mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}