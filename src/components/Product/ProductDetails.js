import React from "react";

const ProductDetails = ({ product }) => {
  return (
    <div className="md:w-[70%] mx-auto">
      <div className="mt-8">
        <div className="flex justify-between pb-6 border-b-4 border-primary">
          <p className="px-2 text-2xl font-bold">Product Information</p>
          <svg
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
        </div>
        <p className="px-2 border-b-4 border-primary py-6">
          {product.information}
        </p>
      </div>
      <div className="mt-8">
        <div className="flex justify-between pb-6 border-b-4 border-primary">
          <p className="px-2 text-2xl font-bold">Ingredient</p>
          <svg
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
        </div>
        <p className="px-2 border-b-4 border-primary py-6">
          {product.ingredients}
        </p>
      </div>
      <div className="mt-8">
        <div className="flex justify-between pb-6 border-b-4 border-primary">
          <p className="px-2 text-2xl font-bold">Precautionary</p>
          <svg
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
        </div>
        <p className="px-2 py-6">{product.precautions}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
