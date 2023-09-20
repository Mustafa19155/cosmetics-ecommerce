"use client";
import React, { useState } from "react";
import TestImg from "../../assets/images/home/testimonial.png";
import Image from "next/image";
import TransparentButton from "../buttons/TransparentButton";
import ArrowRight from "../../assets/icons/arrow-right.svg";

const Testimonials = () => {
  const [testimonial, settestimonial] = useState({
    name: "Sarah Morgan",
    description:
      "I've been using [Your Company Name] for a while now, and overall, I'm quite satisfied. The customer service team is responsive, and the products/services are reliable. However, there's room for improvement in terms of pricing.",
    rating: 4,
  });

  return (
    <div>
      <p className="text-3xl font-bold text-center">
        What Our People Has To Say About Us
      </p>
      <div className="w-[90%] bg-primary mx-auto mt-8">
        <div className="p-6 sm:p-12 flex flex-wrap">
          <div className="w-[100%] md:w-[40%] flex justify-center">
            <Image src={TestImg} className="w-full" />
          </div>
          <div className="md:w-[60%] text-xl text-white flex flex-col justify-center py-8 sm:p-8 xl:p-12 relative">
            <div>
              <p>{testimonial.name}</p>
            </div>
            <p>"{testimonial.description}"</p>
            <TransparentButton
              text={"SEE MORE"}
              icon={ArrowRight}
              className={
                "bg-white text-black w-[80%] sm:w-[40%] md:w-[70%] lg:w-[60%] self-end mt-8 flex-row-reverse font-semibold border-0 h-[60px] relative lg:absolute bottom-[-10px]"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
