"use client";
import React from "react";
import OrdersWrapper from "../order/OrdersWrapper";

const LatestOrders = () => {
  return (
    <div>
      <p className="font-bold text-3xl">Latest Orders</p>
      <OrdersWrapper />
    </div>
  );
};

export default LatestOrders;
