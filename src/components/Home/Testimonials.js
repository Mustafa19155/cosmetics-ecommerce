"use client";
import React, { useState } from "react";
import TestImg from "../../assets/icons/profile2.svg";
import { Carousel } from "react-responsive-carousel";
import Stars from "../Stars";

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
                    !isSelected ? "bg-black" : "bg-primary"
                  }`}
                />
              </div>
            );
          }}
        >
          {reviews.reduce((result, testimonial, index) => {
            if (index % 2 === 0) {
              result.push(
                <div key={index} className="flex justify-between">
                  {/* First review */}
                  <div
                    className={`${
                      index + 1 < reviews.length
                        ? "w-[45%]"
                        : "w-full sm:w-[45%]"
                    } bg-primary mx-auto mt-8 px-4`}
                  >
                    <div className="flex flex-wrap items-center">
                      <div className="w-[100%] md:w-[20%] h-[200px] flex justify-center">
                        <img
                          src={
                            testimonial.picture
                              ? testimonial.picture
                              : TestImg.src
                          }
                          className="w-full object-contain"
                        />
                      </div>
                      <div className="md:w-[60%] text-xl md:min-h-[200px] text-white py-8 sm:p-8 xl:p-12 relative text-start flex flex-col gap-2 justify-center">
                        <div>
                          <p>{testimonial.name}</p>
                        </div>
                        <p className="truncate !whitespace-normal line-clamp-5">
                          "{testimonial.description}"
                        </p>
                        <Stars
                          rating={testimonial.rating}
                          starColor={"white"}
                          showNumbers={false}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second review (if available) */}
                  {index + 1 < reviews.length && (
                    <div className="w-[45%] bg-primary mx-auto mt-8 px-4">
                      <div className="flex flex-wrap items-center">
                        <div className="w-[100%] md:w-[20%] h-[200px] flex justify-center">
                          <img
                            src={
                              reviews[index + 1].picture
                                ? reviews[index + 1].picture
                                : TestImg.src
                            }
                            className="w-full object-contain"
                          />
                        </div>
                        <div className="md:w-[60%] text-xl md:min-h-[200px] text-white py-8 sm:p-8 xl:p-12 relative text-start flex flex-col gap-2 justify-center">
                          <div>
                            <p>{reviews[index + 1].name}</p>
                          </div>
                          <p className="truncate !whitespace-normal line-clamp-5">
                            "{reviews[index + 1].description}"
                          </p>
                          <Stars
                            rating={reviews[index + 1].rating}
                            starColor={"white"}
                            showNumbers={false}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return result;
          }, [])}
          {/* {reviews.map((testimonial) => (
            <div className="w-[90%] bg-primary mx-auto mt-8">
              <div className="p-6 sm:p-12 flex flex-wrap">
                <div className="w-[100%] md:w-[40%] md:min-h-[200px] flex justify-center">
                  <img
                    src={
                      testimonial.picture ? testimonial.picture : TestImg.src
                    }
                    className="w-full object-contain"
                  />
                </div>
                <div className="md:w-[60%] text-xl md:min-h-[200px] text-white py-8 sm:p-8 xl:p-12 relative text-start flex flex-col gap-2 justify-center">
                  <div>
                    <p>{testimonial.name}</p>
                  </div>
                  <p className="truncate !whitespace-normal line-clamp-5">
                    "{testimonial.description}"
                  </p>
                </div>
              </div>
            </div>
          ))} */}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
