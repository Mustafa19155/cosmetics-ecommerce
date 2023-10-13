"use client";
import React, { useState } from "react";
import TestImg from "../../assets/images/home/testimonial.png";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";

const Testimonials = ({ reviews }) => {
  const settings = {
    showArrows: false,
    // interval: 3500,
    // dynamicHeight: false,
    // stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: reviews.length > 1 ? true : false,
    swipeable: true,
    emulateTouch: true,
    // autoPlay: true,
  };

  return (
    <div className="home-sec-1">
      <p className="text-3xl font-bold text-center">
        What Our People Has To Say About Us
      </p>
      <div>
        <Carousel
          {...settings}
          showArrows={false}
          renderIndicator={(onClickHandler, isSelected, index, label) => {
            return (
              <div
                className={`${isSelected ? "selected" : ""}`}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                aria-label={`${label} ${index + 1}`}
              >
                <p
                  className={`w-3 h-3 rounded-full  ${
                    !isSelected ? "bg-black" : "bg-white"
                  }`}
                />
              </div>
            );
          }}
        >
          {reviews.map((testimonial) => (
            <div className="w-[90%] bg-primary mx-auto mt-8">
              <div className="p-6 sm:p-12 flex flex-wrap">
                <div className="w-[100%] md:w-[40%] h-[300px] flex justify-center">
                  {testimonial.picture && (
                    <img
                      src={testimonial.picture}
                      className="w-full object-contain"
                    />
                  )}
                </div>
                <div className="md:w-[60%] text-xl h-[300px] text-white py-8 sm:p-8 xl:p-12 relative text-start flex flex-col gap-2 justify-center">
                  <div>
                    <p>{testimonial.name}</p>
                  </div>
                  <p className="truncate !whitespace-normal line-clamp-5">
                    "{testimonial.description}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
