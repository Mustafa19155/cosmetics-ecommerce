import React from "react";
import ProImg from "@/assets/images/product-detail.png";
import OrderTop from "@/components/admin/order/OrderTop";
import Details from "@/components/admin/order/Details";
import ProductInformation from "@/components/admin/order/ProductInformation";

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
  const data = await getData();
  return (
    <div>
      <OrderTop />
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
