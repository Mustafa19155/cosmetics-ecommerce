"use client";
import React, { useState } from "react";
import MainImg from "../../assets/images/home/section1.png";
import { Carousel } from "react-responsive-carousel";

const SectionOne = () => {
  const [images, setimages] = useState([MainImg, MainImg, MainImg]);

  return (
    <div className="custom-full-width-child home-sec-1">
      <Carousel
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
        {images.map((image) => (
          <div
            className="h-[35vw] min-h-[350px] max-h-[600px] w-[100%] rounded-lg"
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
