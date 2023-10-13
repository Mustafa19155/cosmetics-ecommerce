"use client";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";

const SpecialOffers = ({ offers }) => {
  const settings = {
    showArrows: false,
    // interval: 3500,
    // dynamicHeight: false,
    // stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: offers.length > 1 ? true : false,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
  };
  return (
    <div>
      <div className="text-center">
        <p className="text-3xl font-bold">Special Offers</p>
        <p className="text-gray-500 mt-1">
          Discover Unique and Exclusive Offerings
        </p>
      </div>
      <div>
        <div className="custom-full-width-child home-sec-1 mt-8">
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
            {offers.map((offer) => (
              <>
                <div
                  className="h-[35vw] min-h-[350px] max-h-[600px] w-[100%] rounded-lg"
                  style={{
                    backgroundImage: `url(${offer.images[0]})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                  }}
                />
              </>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
