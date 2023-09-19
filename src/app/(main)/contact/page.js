"use client";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import PinkButton from "@/components/buttons/PinkButton";
import React from "react";
import FacebookIcon from "../../assets/icons/footer/facebook.svg";
import TwitterIcon from "../../assets/icons/footer/twitter.svg";
import LinkedInIcon from "../../assets/icons/footer/linkedIn.svg";
import LocationIcon from "../../assets/icons/footer/location.svg";
import PhoneIcon from "../../assets/icons/footer/phone.svg";
import EmailIcon from "../../assets/icons/email.svg";
import Image from "next/image";

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
              <p>123 Main StreetAnytown</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={EmailIcon} />
              <p>example @gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <Image src={PhoneIcon} />
              <p>+92-344445</p>
            </div>
          </div>
        </div>
        <div className="flex gap-5">
          <Image src={FacebookIcon} />
          <Image src={TwitterIcon} />
          <Image src={LinkedInIcon} />
        </div>
      </div>
    </div>
  );
};

export default Page;
