"use client";
import React, { useState } from "react";

const ProductDetails = ({ product }) => {
  const [showInfo, setshowInfo] = useState(false);
  const [showIngredients, setshowIngredients] = useState(false);
  const [showPrecautions, setshowPrecautions] = useState(false);

  return (
    <div className="flex justify-center">
      <div className="w-full md:w-[70%]">
        <div className="mt-8">
          <div className="flex justify-between pb-6 border-b-4 border-primary items-center w-full">
            <p className="px-2 text-2xl font-bold">Product Information</p>
            {!showInfo ? (
              <svg
                className="cursor-pointer"
                onClick={() => setshowInfo(true)}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50019 15C6.79715 15 6.22656 14.429 6.22656 13.7255V1.2745C6.22656 0.570975 6.79715 0 7.50019 0C8.20324 0 8.77383 0.570975 8.77383 1.2745V13.7255C8.77383 14.429 8.20324 15 7.50019 15Z"
                  fill="#000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7264 8.7736H1.27363C0.568889 8.7736 0 8.20263 0 7.49911C0 6.79558 0.568889 6.22461 1.27363 6.22461H13.7264C14.4294 6.22461 15 6.79558 15 7.49911C15 8.20263 14.4294 8.7736 13.7264 8.7736Z"
                  fill="#000"
                />
              </svg>
            ) : (
              <svg
                className="cursor-pointer"
                onClick={() => setshowInfo(false)}
                width="15"
                height="3"
                viewBox="0 0 15 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7264 2.7751H1.27363C0.568889 2.7751 0 2.2039 0 1.5001C0 0.796298 0.568889 0.225098 1.27363 0.225098H13.7264C14.4294 0.225098 15 0.796298 15 1.5001C15 2.2039 14.4294 2.7751 13.7264 2.7751Z"
                  fill="#000"
                />
              </svg>
            )}
          </div>
          {showInfo && (
            <p className="px-2 border-b-4 border-primary py-6">
              {product.information}
            </p>
          )}
        </div>
        <div className="mt-8">
          <div className="flex justify-between pb-6 border-b-4 border-primary items-center w-full">
            <p className="px-2 text-2xl font-bold">Ingredient</p>
            {!showIngredients ? (
              <svg
                className="cursor-pointer"
                onClick={() => setshowIngredients(true)}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50019 15C6.79715 15 6.22656 14.429 6.22656 13.7255V1.2745C6.22656 0.570975 6.79715 0 7.50019 0C8.20324 0 8.77383 0.570975 8.77383 1.2745V13.7255C8.77383 14.429 8.20324 15 7.50019 15Z"
                  fill="#000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7264 8.7736H1.27363C0.568889 8.7736 0 8.20263 0 7.49911C0 6.79558 0.568889 6.22461 1.27363 6.22461H13.7264C14.4294 6.22461 15 6.79558 15 7.49911C15 8.20263 14.4294 8.7736 13.7264 8.7736Z"
                  fill="#000"
                />
              </svg>
            ) : (
              <svg
                className="cursor-pointer"
                onClick={() => setshowIngredients(false)}
                width="15"
                height="3"
                viewBox="0 0 15 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7264 2.7751H1.27363C0.568889 2.7751 0 2.2039 0 1.5001C0 0.796298 0.568889 0.225098 1.27363 0.225098H13.7264C14.4294 0.225098 15 0.796298 15 1.5001C15 2.2039 14.4294 2.7751 13.7264 2.7751Z"
                  fill="#000"
                />
              </svg>
            )}
          </div>
          {showIngredients && (
            <p className="px-2 border-b-4 border-primary py-6">
              {product.ingredients}
            </p>
          )}
        </div>
        <div className="mt-8">
          <div className="flex justify-between pb-6 border-b-4 border-primary items-center w-full">
            <p className="px-2 text-2xl font-bold">Precautionary</p>
            {!showPrecautions ? (
              <svg
                className="cursor-pointer"
                onClick={() => setshowPrecautions(true)}
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.50019 15C6.79715 15 6.22656 14.429 6.22656 13.7255V1.2745C6.22656 0.570975 6.79715 0 7.50019 0C8.20324 0 8.77383 0.570975 8.77383 1.2745V13.7255C8.77383 14.429 8.20324 15 7.50019 15Z"
                  fill="#000"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7264 8.7736H1.27363C0.568889 8.7736 0 8.20263 0 7.49911C0 6.79558 0.568889 6.22461 1.27363 6.22461H13.7264C14.4294 6.22461 15 6.79558 15 7.49911C15 8.20263 14.4294 8.7736 13.7264 8.7736Z"
                  fill="#000"
                />
              </svg>
            ) : (
              <svg
                className="cursor-pointer"
                onClick={() => setshowPrecautions(false)}
                width="15"
                height="3"
                viewBox="0 0 15 3"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.7264 2.7751H1.27363C0.568889 2.7751 0 2.2039 0 1.5001C0 0.796298 0.568889 0.225098 1.27363 0.225098H13.7264C14.4294 0.225098 15 0.796298 15 1.5001C15 2.2039 14.4294 2.7751 13.7264 2.7751Z"
                  fill="#000"
                />
              </svg>
            )}
          </div>
          {showPrecautions && (
            <p className="px-2 py-6">{product.precautions}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
