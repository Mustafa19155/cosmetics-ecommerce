import React from "react";
import ProImg from "@/assets/images/product-detail.png";
import OrderTop from "@/components/admin/order/OrderTop";
import Details from "@/components/admin/order/Details";
import ProductInformation from "@/components/admin/order/ProductInformation";
import { getSingleOrder } from "@/api/order";
import { headers } from "next/headers";

const getData = async () => {
  return {
    status: "pending",
    finalTotal: 10,
    userDetails: {
      username: "Alex Costa",
      email: "costa@example.com",
      phone: "(99) 436-46-15",
      address: "Park Lane",
      city: "Karachi",
      region: "Karachi",
      country: "Pakistan",
    },
    orderDetails: {
      total: 25,
      discount: 10,
      items: [
        {
          name: "Nars Foundation",
          description: "mahogany shade",
          quantity: 1,
          price: 25,
          image: ProImg,
        },
        {
          name: "Nars Foundation",
          description: "mahogany shade",
          quantity: 1,
          price: 25,
          image: ProImg,
        },
        {
          name: "Nars Foundation",
          description:
            "mahogany shade mahogany shade mahogany shademahogany shade mahogany shademahogany shademahogany shade",
          quantity: 1,
          price: 25,
          image: ProImg,
        },
      ],
    },
  };
};

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  const data = await getSingleOrder({
    id: activePath.split("/")[activePath.split("/").length - 1],
  });

  return (
    <div>
      <OrderTop order={data} />
      <div className="mt-16">
        <Details order={data} />
      </div>
      <div className="mt-16">
        <ProductInformation order={data} />
      </div>
    </div>
  );
};

export default Page;
