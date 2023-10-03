import React from "react";

const Details = ({ order }) => {
  return (
    <div>
      <div className="bg-white shadow-cart-wrapper flex items-center justify-between flex-wrap p-8 break-all">
        <div className="flex items-center gap-20 mt-10 w-full md:w-[60%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Username</p>
          <p className="text-gray-500">{order.name}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[40%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Email</p>
          <p className="text-gray-500">{order.email}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[60%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Phone Number</p>
          <p className="text-gray-500">{order.number}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[40%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Address</p>
          <p className="text-gray-500">{order.address}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[60%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Amount</p>
          <p className="text-gray-500">${order.total}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[40%]">
          <p className="font-bold w-[20%] whitespace-nowrap">City</p>
          <p className="text-gray-500">{order.city}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[60%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Region</p>
          <p className="text-gray-500">{order.region}</p>
        </div>
        <div className="flex items-center gap-20 mt-10 w-full md:w-[40%]">
          <p className="font-bold w-[20%] whitespace-nowrap">Country</p>
          <p className="text-gray-500">{order.country}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
