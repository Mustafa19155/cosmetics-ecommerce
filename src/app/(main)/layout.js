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
import { recalculateDiscount } from "@/actions/recalculateDiscount";
import { getUserOffers } from "@/api/offers";
import { createPayment } from "@/api/payment";
import { deleteCookie, setCookie } from "@/actions/serverActions";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

export default function RootLayout({ children }) {
  const router = useRouter();
  const {
    currentUser,
    setUser,
    cart,
    setcart,
    offers,
    setoffers,
    wishlist,
    setwishlist,
    setpaymentIntentId,
  } = useContext(AuthContext);

  const handleGetOffers = () => {
    getUserOffers()
      .then((res) => {
        setoffers(res);
      })
      .catch((err) => {});
  };

  const handleCartRecal = () => {
    getUser()
      .then((res) => {
        setUser(res.user);
      })
      .catch(async (err) => {
        await deleteCookie({ cookieName: "jwt" });
        setUser(null);
      });

    setwishlist(recalculateDiscount({ products: wishlist, allOffers: offers }));

    const cartCopy = { ...cart };

    cartCopy.total = 0;
    validateCart({ array: cart.items.map((item) => item.product._id) })
      .then((res) => {
        res.map(async (pro, index) => {
          if (!pro) {
            cartCopy.items.splice(index, 1);
          } else {
            pro = recalculateDiscount({
              products: [pro],
              allOffers: offers,
            })[0];

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
  };

  useEffect(() => {
    handleCartRecal();
  }, [offers]);

  useEffect(() => {
    handleGetOffers();
  }, []);

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    createPayment({ amount: 10 })
      .then((res) => {
        setpaymentIntentId(res.id);
        setClientSecret(res.clientSecret);
      })
      .catch((err) => {});
  }, []);

  // const options = {
  //   mode: "payment",
  //   amount: 1099,
  //   currency: "eur",
  //   appearance: {
  //     theme: "stripe",
  //   },
  // };

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
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
    <>
      {clientSecret && (
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
      )}
    </>
    // </html>
  );
}
