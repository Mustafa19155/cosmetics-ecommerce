import FoundationImg from "../../../assets/images/home/foundation.png";
import React from "react";
import AboutTop from "@/components/About/AboutTop";
import TrendingProducts from "@/components/Home/TrendingProducts";
import { getLatestProducts } from "@/api/products";

const Page = async () => {
  const data = await getLatestProducts();
  return (
    <div className="my-16 px-3 sm:px-0">
      <AboutTop />
      <div className="mt-20">
        {/* <div className="text-center">
          <p className="font-bold text-3xl">Latest Products</p>
          <p className="text-secondary text-lg">Discover Our Top Picks!</p>
        </div> */}
        <TrendingProducts products={data} />
        {/* <FeaturedProducts products={data} /> */}
      </div>
    </div>
  );
};

export default Page;
