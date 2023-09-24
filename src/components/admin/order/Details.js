import React from "react";

const Details = ({ order }) => {
  return (
    <div>
      <div className="bg-white shadow-cart-wrapper flex items-center justify-between flex-wrap p-8 break-all">
        <div className="flex items-center gap-20 mt-10 w-full md:w-[60%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Username</p>
          <p className="text-gray-500">{order.userDetails.username}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[40%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Email</p>
          <p className="text-gray-500">{order.userDetails.email}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[60%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Phone Number</p>
          <p className="text-gray-500">{order.userDetails.phone}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[40%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Address</p>
          <p className="text-gray-500">{order.userDetails.address}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[60%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Amount</p>
          <p className="text-gray-500">${order.finalTotal}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[40%]">
          <p className="font-bold w-[20%] whitespace-nowrap">City</p>
          <p className="text-gray-500">{order.userDetails.city}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[60%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Region</p>
          <p className="text-gray-500">{order.userDetails.region}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[40%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Country</p>
          <p className="text-gray-500">{order.userDetails.country}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
