import "./globals.css";
import { Inter } from "next/font/google";
import AuthContextProvider from "@/contexts/userContext";
import AlertContextProvider from "@/contexts/alertContext";
import AlertPopup from "@/components/AlertPopup";
import StripeLayout from "@/components/StripeLayout";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Aliyaa Beauty",
//   description: "Aliyaa Beauty Store",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title className="notranslate">Aliyaa Beauty</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <AlertContextProvider>
        <AuthContextProvider>
          <body className="overflow-x-hidden relative !top-0">
            <StripeLayout>
              <AlertPopup />
              {children}
            </StripeLayout>
          </body>
        </AuthContextProvider>
      </AlertContextProvider>
    </html>
  );
}
