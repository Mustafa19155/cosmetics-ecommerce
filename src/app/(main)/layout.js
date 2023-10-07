"use client";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import { getUser } from "@/api/user";
import { validateCart } from "@/api/cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import OffersContextProvider from "@/contexts/OffersConext";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

export default function RootLayout({ children }) {
  const router = useRouter();
  const { currentUser, setUser, cart, setcart } = useContext(AuthContext);

  useEffect(() => {
    getUser()
      .then((res) => {
        setUser(res.user);
      })
      .catch((err) => {
        setUser(null);
      });

    const cartCopy = { ...cart };
    cartCopy.total = 0;
    validateCart({ array: cart.items.map((item) => item.product._id) })
      .then((res) => {
        res.map((pro, index) => {
          if (!pro) {
            cartCopy.items.splice(index, 1);
          } else {
            const foundItem = cartCopy.items.find(
              (item) => item.product._id == pro._id
            );
            if (pro.quantity < foundItem.quantity) {
              foundItem.quantity = pro.quantity;
            }
            foundItem.product = pro;
            cartCopy.total += foundItem.quantity * pro.discountedPrice;
          }
        });

        setcart(cartCopy);
      })
      .catch((err) => {});
  }, []);

  const [clientSecret, setClientSecret] = useState(
    "sk_test_51I5EU6DbwDQYqmKoHRVYU2jw4jtzB8aQa6byuVIMyfDvYl3lxHOzmIRUZ6SabMmk1TV0jNu4w9akIgPY4E3krUbj00ewcroCvC"
  );

  // useEffect(() => {
  //   // Create PaymentIntent as soon as the page loads
  //   fetch("/create-payment-intent", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  // const appearance = {
  //   theme: "stripe",
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  const options = {
    mode: "payment",
    currency: "usd",
    amount: 1099,
  };

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
    <Elements stripe={stripePromise} options={options}>
      <OffersContextProvider>
        <div className="overflow-x-hidden relative !top-0">
          <WhatsappIcon />
          <Navbar />
          <div className="container mx-auto relative top-[75px]">
            <div className="mb-[150px]">{children}</div>
          </div>
          <Footer />
        </div>
      </OffersContextProvider>
    </Elements>
    // </html>
  );
}
