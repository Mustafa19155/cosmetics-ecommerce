"use client";
import { createPayment } from "@/api/payment";
import { AuthContext } from "@/contexts/userContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext, useEffect, useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY);

const StripeLayout = ({ children }) => {
  const { setpaymentIntentId } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    createPayment({ amount: 10 })
      .then((res) => {
        setpaymentIntentId(res.id);
        setClientSecret(res.clientSecret);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      {clientSecret && (
        <Elements stripe={stripePromise} options={options}>
          {children}
        </Elements>
      )}
    </>
  );
};

export default StripeLayout;
