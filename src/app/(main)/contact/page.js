"use client";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import PinkButton from "@/components/buttons/PinkButton";
import React from "react";
import FacebookIcon from "../../../assets/icons/footer/facebook.svg";
import TwitterIcon from "../../../assets/icons/footer/twitter.svg";
import LinkedInIcon from "../../../assets/icons/footer/linkedIn.svg";
import LocationIcon from "../../../assets/icons/footer/location.svg";
import PhoneIcon from "../../../assets/icons/footer/phone.svg";
import EmailIcon from "../../../assets/icons/email.svg";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex justify-center flex-wrap my-16 p-8 md:p-0">
      <div className="md:w-[50%] md:p-8 lg:p-16">
        <p className="text-3xl font-bold text-center">Contact Us</p>
        <p className="mt-1 text-secondary text-center">
          You can’t Find what you looking for.It’s Okay We will help you{" "}
        </p>
        <div className="flex flex-col gap-5 mt-12 lg:p-6">
          <div className="flex flex-col gap-2">
            <label>Name</label>
            <PrimaryInput
              type="text"
              placeholder="David John"
              value={""}
              changeHandler={() => {}}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <PrimaryInput
              type="email"
              placeholder="Example@yahoo.com"
              value={""}
              changeHandler={() => {}}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Your Message</label>
            <textarea
              placeholder=""
              className="resize-none bg-gray-1 shadow-custom-1 p-2 outline-none rounded-md"
              rows={6}
            />
          </div>
          <PinkButton text={"SUBMIT"} />
        </div>
      </div>
      <div className="bg-primary text-white md:w-[50%] md:mb-8 lg:mb-16 pt-16 pb-10 px-10 rounded-lg hidden md:flex flex-col justify-between">
        <div>
          <p className="text-3xl font-bold">Contact Information</p>
          <p className="text-gray-1">
            when you will fill this form, our team will get back to you within
            24 hours
          </p>

          <div className="flex flex-col gap-2 mt-16">
            <div className="flex gap-3 items-center">
              <Image src={LocationIcon} />
              <p>Avenida san memes local 15 postal code 24007 León Spain</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={EmailIcon} />
              <p>info@aliyaabeauty.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={PhoneIcon} />
              <p>+34615971758</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Link
            href={"https://www.facebook.com/profile.php?id=61552280721223"}
            target="_blank"
          >
            <div className="bg-white rounded-lg p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FB6B90"
                  d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"
                />
              </svg>
            </div>
          </Link>
          <Link
            href={"https://www.instagram.com/aliyaabeautyintl/"}
            target="_blank"
          >
            <div className="bg-white rounded-lg p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 20 20"
              >
                <path
                  fill="#FB6B90"
                  d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10S7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3c-.7.3-1.3.9-1.5 1.6c-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5c1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5c.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5c-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4c-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3c-.8-.9-1.3-2.1-1.3-3.4V6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3c.8.9 1.3 2.1 1.3 3.4V10z"
                />
              </svg>
            </div>
          </Link>
          <Link href={"https://www.tiktok.com/@aliyaabeauty"} target="_blank">
            <div className="bg-white rounded-lg p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FB6B90"
                  d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
