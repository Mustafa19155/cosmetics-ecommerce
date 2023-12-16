"use client";
import Image from "next/image";
import React from "react";
import PinkButton from "../buttons/PinkButton";
import AboutImg from "../../assets/images/about.png";
import FacebookIcon from "../../assets/icons/about/facebook.svg";
import TwitterIcon from "../../assets/icons/about/twitter.svg";
import LinkedInIcon from "../../assets/icons/about/linkedIn.svg";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AboutTop = () => {
  const router = useRouter();

  return (
    <div className="flex items-center flex-wrap gap-10 md:gap-0">
      <div className="w-full md:w-[45%] lg:px-8 h-full">
        <Image src={AboutImg} className="w-full h-full max-h-[450px]" />
      </div>
      <div className="w-full md:w-[55%] flex flex-col gap-8 md:px-8 lg:px-0">
        <div className="flex flex-col gap-1 border-b-2 border-primary w-fit pr-3 pb-2">
          <p className="text-xl font-bold">About</p>
          <p className="text-xl font-bold">Our Shop</p>
        </div>
        <p className="lg:pr-10 xl:pr-48">
        Welcome to Aliyaa Beauty, your ultimate beauty hub where convenience meets elegance. Dive into a world of top-notch brands 
        and diverse categories, from skincare essentials to makeup must-haves, carefully curated to make your beauty routine 
        effortless and stylish. Experience exceptional service with each visit, as we strive to make your time with us truly 
        memorable. At Aliyaa Beauty, we celebrate individuality with a wide array of categories catering to everyone,
         ensuring there's something for every unique style. Join us on this beauty adventure and explore the magic that 
         lies within Aliyaa Beauty your go-to destination for all things beautiful.
        </p>
        <div className="flex gap-5">
          <Link
            href={"https://www.facebook.com/profile.php?id=61552280721223"}
            target="_blank"
          >
            <div className="bg-primary rounded-lg p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                />
              </svg>
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/aliyaabeautyintl/"}
            target="_blank"
          >
            <div className="bg-primary rounded-lg p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 20 20"
              >
                <path
                  fill="white"
                  d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10S7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3c-.7.3-1.3.9-1.5 1.6c-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5c1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5c.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5c-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4c-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3c-.8-.9-1.3-2.1-1.3-3.4V6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3c.8.9 1.3 2.1 1.3 3.4V10z"
                />
              </svg>
            </div>
          </Link>
          <Link href={"https://www.tiktok.com/@aliyaabeauty"} target="_blank">
            <div className="bg-primary rounded-lg p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                />
              </svg>
            </div>
          </Link>
        </div>
        <PinkButton
          text={"CONTACT US"}
          className={"!w-fit px-20"}
          clickHandler={() => router.push("/contact")}
        />
      </div>
    </div>
  );
};

export default AboutTop;
