"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

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
                <td className="px-3 py-4 border-r">
                  <Link href={`/admin/users/${item._id}`}>{item.name}</Link>
                </td>
                <td class="px-3 py-4 border-r">{item.email}</td>
                <td class="px-3 py-4 border-r notranslate">€{item.spent}</td>
                <td class="px-3 py-4 border-r">{item.coins}</td>
                <td class="px-3 py-4 border-r">{item.orders}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
