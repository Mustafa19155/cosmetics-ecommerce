import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const ProductGallery = ({ images }) => {
  const selectedRef = Array.from({ length: images.length }, () => useRef(null));
  const scrollableContainerRef = useRef(null);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleIncrement = () => {
    if (selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };
  const handleDecremnt = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };
  useEffect(() => {
    setSelectedImageIndex(0);
  }, [images]);

  useEffect(() => {
    if (selectedRef[selectedImageIndex]?.current) {
      selectedRef[selectedImageIndex]?.current.scrollIntoView({
        behavior: "smooth",
        container: scrollableContainerRef?.current,
        block: "nearest",
        inline: "nearest",
      });
    }
  }, [selectedImageIndex]);

  return (
    <>
      <div className="overflow-hidden">
        <img
          src={images[selectedImageIndex]}
          className="h-[400px] object-contain mx-auto"
        />
      </div>
      <div className="flex items-center gap-3 justify-between">
        <div
          className="bg-primary p-3 rounded-full flex justify-center items-center cursor-pointer"
          onClick={handleDecremnt}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-90"
          >
            <path
              d="M5.83817 6.66733C5.72849 6.66796 5.61977 6.64694 5.51824 6.60547C5.41671 6.564 5.32437 6.5029 5.2465 6.42566L0.246499 1.42566C0.168392 1.34819 0.106397 1.25602 0.0640893 1.15447C0.0217821 1.05293 0 0.944004 0 0.833994C0 0.723984 0.0217821 0.615062 0.0640893 0.513513C0.106397 0.411964 0.168392 0.319796 0.246499 0.242327C0.402634 0.0871179 0.613844 0 0.833999 0C1.05415 0 1.26536 0.0871179 1.4215 0.242327L5.83817 4.65899L10.2465 0.242327C10.4026 0.0871179 10.6138 0 10.834 0C11.0542 0 11.2654 0.0871179 11.4215 0.242327C11.4996 0.319796 11.5616 0.411964 11.6039 0.513513C11.6462 0.615062 11.668 0.723984 11.668 0.833994C11.668 0.944004 11.6462 1.05293 11.6039 1.15447C11.5616 1.25602 11.4996 1.34819 11.4215 1.42566L6.4215 6.42566C6.26628 6.57962 6.05678 6.66641 5.83817 6.66733Z"
              fill="#fff"
            />
          </svg>
        </div>
        <div
          className="py-1 overflow-x-auto p-[10px] flex image-gallery-bot"
          ref={scrollableContainerRef}
        >
          <div className="flex gap-[10px] w-100 relative">
            {images.map((image, index) => (
              <img
                ref={selectedRef[index]}
                className={`rounded w-[60px] h-[60px] cursor-pointer object-cover ${
                  selectedImageIndex == index ? "" : "opacity-60"
                }`}
                src={image}
                alt={`Image ${index}`}
                onClick={() => handleImageClick(index)}
              />
            ))}
          </div>
        </div>
        <div
          className="bg-primary p-3 rounded-full flex justify-center items-center cursor-pointer"
          onClick={handleIncrement}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="rotate-[-90deg]"
          >
            <path
              d="M5.83817 6.66733C5.72849 6.66796 5.61977 6.64694 5.51824 6.60547C5.41671 6.564 5.32437 6.5029 5.2465 6.42566L0.246499 1.42566C0.168392 1.34819 0.106397 1.25602 0.0640893 1.15447C0.0217821 1.05293 0 0.944004 0 0.833994C0 0.723984 0.0217821 0.615062 0.0640893 0.513513C0.106397 0.411964 0.168392 0.319796 0.246499 0.242327C0.402634 0.0871179 0.613844 0 0.833999 0C1.05415 0 1.26536 0.0871179 1.4215 0.242327L5.83817 4.65899L10.2465 0.242327C10.4026 0.0871179 10.6138 0 10.834 0C11.0542 0 11.2654 0.0871179 11.4215 0.242327C11.4996 0.319796 11.5616 0.411964 11.6039 0.513513C11.6462 0.615062 11.668 0.723984 11.668 0.833994C11.668 0.944004 11.6462 1.05293 11.6039 1.15447C11.5616 1.25602 11.4996 1.34819 11.4215 1.42566L6.4215 6.42566C6.26628 6.57962 6.05678 6.66641 5.83817 6.66733Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default ProductGallery;
