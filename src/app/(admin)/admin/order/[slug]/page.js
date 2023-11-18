import React from "react";
import ProImg from "@/assets/images/product-detail.png";
import OrderTop from "@/components/admin/order/OrderTop";
import Details from "@/components/admin/order/Details";
import ProductInformation from "@/components/admin/order/ProductInformation";
import { getSingleOrder } from "@/api/order";
import { headers } from "next/headers";

const Page = async ({ params }) => {
  const data = await getSingleOrder({
    id: params.slug,
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
