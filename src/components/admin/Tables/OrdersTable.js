"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@/assets/icons/delete-gray.svg";
import EditIcon from "@/assets/icons/edit-gray.svg";
import moment from "moment";

const OrdersTable = ({ mainPros, setmainPros }) => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-white border-b-2 border-gray-2">
            <th className="p-3">Order Id</th>
            <th className="p-3" scope="col">
              Price
            </th>
            <th className="p-3" scope="col">
              Order Date
            </th>
            <th className="p-3" scope="col">
              User
            </th>
            <th className="p-3" scope="col">
              Status
            </th>
            <th className="p-3" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {mainPros.map((item, index) => {
            return (
              <tr class="bg-white border-b border-gray-2 rounded-lg">
                <td className="px-3 py-4">{item._id}</td>
                <td class="px-3 py-4">${item.price}</td>
                <td class="px-3 py-4">
                  <p className="sm:max-w-[300px] md:max-w-[150px] lg:max-w-[400px] truncate line-clamp-3 whitespace-normal">
                    {moment(item.date).format("MMM, D, YYYY")}
                  </p>
                </td>
                <td class="px-3 py-4">{item.username}</td>
                <td class="px-3 py-4 text-[#FDCC0D]">{item.status}</td>
                <td class="px-3 py-4">
                  <div className="flex items-center gap-4">
                    <Image src={DeleteIcon} />
                    <Image src={EditIcon} />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
