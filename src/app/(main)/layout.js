"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";
import { useContext, useEffect } from "react";
import { AuthContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import ProductFilterProvider from "@/contexts/productFilterConext";
import { getUser } from "@/api/user";

export default function RootLayout({ children }) {
  const router = useRouter();
  const { currentUser, setUser } = useContext(AuthContext);

  useEffect(() => {
    getUser()
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        setUser(null);
      });

    // if (!currentUser) router.push("/login");
  }, []);

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
      <ProductFilterProvider>
        <body className="overflow-x-hidden">
          <WhatsappIcon />
          <Navbar />
          <div className="container mx-auto">{children}</div>
          <Footer />
        </body>
      </ProductFilterProvider>
    </html>
  );
}
