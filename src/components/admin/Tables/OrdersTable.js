"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@/assets/icons/delete-gray.svg";
import EditIcon from "@/assets/icons/edit-gray.svg";
import moment from "moment";
import Link from "next/link";
import DeleteModal from "@/components/Modals/DeleteModal";
import { deleteOrder } from "@/api/order";

const OrdersTable = ({ mainPros, setmainPros }) => {
  const [activeModalData, setactiveModalData] = useState(null);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);

  const handleDelete = () => {
    deleteOrder({ id: activeModalData._id })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        setdeleteModalOpen(false);
      });
  };

  return (
    <div class="relative overflow-x-auto">
      <DeleteModal
        onclose={() => setdeleteModalOpen(false)}
        onconfirm={handleDelete}
        open={deleteModalOpen}
        type={"Order"}
      />
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
                <td className="px-3 py-4">{item.order_id}</td>
                <td class="px-3 py-4">${item.total}</td>
                <td class="px-3 py-4">
                  <p className="sm:max-w-[300px] md:max-w-[150px] lg:max-w-[400px] truncate line-clamp-3 whitespace-normal">
                    {moment(item.createdAt).format("MMM, D, YYYY")}
                  </p>
                </td>
                <td class="px-3 py-4">{item.name}</td>
                <td class="px-3 py-4 text-[#FDCC0D]">{item.status}</td>
                <td class="px-3 py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={DeleteIcon}
                      className="cursor-pointer"
                      onClick={() => {
                        setactiveModalData(item);
                        setdeleteModalOpen(true);
                      }}
                    />
                    <Link href={`order/${item._id}`}>
                      <Image src={EditIcon} />
                    </Link>
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
