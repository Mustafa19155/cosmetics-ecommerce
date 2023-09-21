"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@/assets/icons/delete-gray.svg";
import EditIcon from "@/assets/icons/edit-gray.svg";
import moment from "moment";

const UsersTable = ({ mainPros, setmainPros }) => {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-white border-b-2 border-gray-2">
            <th className="p-3">Name</th>
            <th className="p-3" scope="col">
              Email
            </th>
            <th className="p-3" scope="col">
              Spent
            </th>
            <th className="p-3" scope="col">
              User Points
            </th>
            <th className="p-3" scope="col">
              Orders Count
            </th>
          </tr>
        </thead>
        <tbody>
          {mainPros.map((item, index) => {
            return (
              <tr class="bg-white border-b border-gray-2 rounded-lg">
                <td className="px-3 py-4 border-r">{item.username}</td>
                <td class="px-3 py-4 border-r">{item.email}</td>
                <td class="px-3 py-4 border-r">${item.spent}</td>
                <td class="px-3 py-4 border-r">{item.points}</td>
                <td class="px-12 py-4 border-r">{item.ordersCount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
