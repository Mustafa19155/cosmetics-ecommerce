"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsappIcon from "@/components/WhatsappIcon";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/userContext";
import { useRouter } from "next/navigation";
import ProductFilterProvider from "@/contexts/productFilterConext";
import { getUser } from "@/api/user";
import { validateCart } from "@/api/cart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

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
        res.map((pro) => {
          const foundItem = cartCopy.items.find(
            (item) => item.product._id == pro._id
          );
          if (pro.quantity < foundItem.quantity) {
            foundItem.quantity = pro.quantity;
          }
          foundItem.product = pro;
          cartCopy.total += foundItem.quantity * pro.price;
        });

        setcart(cartCopy);
      })
      .catch((err) => {});
  }, []);

  const [clientSecret, setClientSecret] = useState(
    "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
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

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

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
      {/* <Elements options={options} stripe={stripePromise}> */}
      <ProductFilterProvider>
        <body className="overflow-x-hidden">
          <WhatsappIcon />
          <Navbar />
          {/* <CheckoutForm /> */}
          <div className="container mx-auto">{children}</div>
          <Footer />
        </body>
      </ProductFilterProvider>
      {/* </Elements> */}
    </html>
  );
}
