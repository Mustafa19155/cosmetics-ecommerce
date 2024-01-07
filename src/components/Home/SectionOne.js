"use client";
import React, { useState } from "react";
import Img1 from "@/assets/images/home/slider-1.jpg";
import Img2 from "@/assets/images/home/slider-2.jpg";
import Img3 from "@/assets/images/home/slider-3.jpg";
import { Carousel } from "react-responsive-carousel";

const SectionOne = () => {
  const [images, setimages] = useState([Img2, Img1, Img3]);

  const settings = {
    showArrows: false,
    // interval: 3500,
    // dynamicHeight: false,
    // stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    // showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
    preventMovementUntilSwipeScrollTolerance: true,
    swipeScrollTolerance: 50,
  };

  return (
    <div className="custom-full-width-child home-sec-1">
      <Carousel
        {...settings}
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
        {images.map((image) => (
          <div
            className="h-[102vh] lg:h-[100vh] w-[100%]"
            style={{
              backgroundImage: `url(${image.src})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              backgroundPosition: "center center",
            }}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default SectionOne;
