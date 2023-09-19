import FeaturedProducts from "@/components/About/FeaturedProducts";
import AboutImg from "../../../assets/images/about.png";
import FacebookIcon from "../../../assets/icons/about/facebook.svg";
import TwitterIcon from "../../../assets/icons/about/twitter.svg";
import LinkedInIcon from "../../../assets/icons/about/linkedIn.svg";
import FoundationImg from "../../../assets/images/home/foundation.png";
import React from "react";
import Image from "next/image";
import PinkButton from "@/components/buttons/PinkButton";

const getData = async () => {
  return [
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
    {
      name: "Nars Foundation",
      rating: 4,
      originalPrice: 25,
      discountedPrice: 25,
      image: FoundationImg,
      type: "new",
    },
  ];
};

const Page = async () => {
  const data = await getData();
  return (
    <div className="my-16 px-3 sm:px-0">
      <div className="flex items-center flex-wrap gap-10 md:gap-0">
        <div className="w-full md:w-[45%] lg:px-8 h-full">
          {/* <div
            className="h-[23vw] min-h-[530px]"
            style={{
              backgroundImage: `url(${AboutImg.src})`,
              backgroundSize: "100% 100%",
            }}
          ></div> */}
          <Image src={AboutImg} className="w-full h-full max-h-[450px]" />
        </div>
        <div className="w-full md:w-[55%] flex flex-col gap-8 md:px-8 lg:px-0">
          <div className="flex flex-col gap-1 border-b-2 border-primary w-fit pr-3 pb-2">
            <p className="text-xl font-bold">About</p>
            <p className="text-xl font-bold">Our Shop</p>
          </div>
          <p className="lg:pr-10 xl:pr-48">
            At Treasure Haven, we're more than just a store; we're your shopping
            sanctuary. Discover a world of extraordinary products and
            exceptional service that will make every visit memorable.At Treasure
            Haven, we're more than just a store; we're your shopping sanctuary.
            Discover a world of extraordinary products and exceptional service
            that will make every visit memorable.At Treasure Haven, we're more
            than just a store; we're your shopping sanctuary. Discover a world
            of extraordinary products and At Treasure Haven, we're more than
            just a store;
          </p>
          <div className="flex gap-5">
            <Image src={FacebookIcon} />
            <Image src={TwitterIcon} />
            <Image src={LinkedInIcon} />
          </div>
          <PinkButton text={"CONTACT US"} className={"!w-fit px-20"} />
        </div>
      </div>
      <div className="mt-20">
        <div className="text-center">
          <p className="font-bold text-3xl">Featured Products</p>
          <p className="text-secondary text-lg">Discover Our Top Picks!</p>
        </div>
        <FeaturedProducts products={data} />
      </div>
    </div>
  );
};

export default Page;
