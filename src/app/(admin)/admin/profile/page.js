"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import BackIcon from "@/assets/icons/back.svg";
import Image from "next/image";
import ManageUser from "@/components/admin/users/ManageUser";
import { AuthContext } from "@/contexts/userContext";
import { getAdmin, updateAdmin } from "@/api/user";

const Page = () => {
  const { currentUser, setUser } = useContext(AuthContext);

  const handleUpdate = ({ data }) => {
    updateAdmin({ data })
      .then(async (res) => {
        getAdmin()
          .then((adminData) => {
            setUser({
              name: adminData?.name,
              email: adminData?.email,
              picture: adminData?.picture,
            });
            window.location.reload();
          })

          .catch((err) => {});
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
    <div>
      <>
        <div className="flex items-center gap-4">
          <Link href={"/admin/product"}>
            <Image src={BackIcon} />
          </Link>
          <p className="font-bold text-3xl">Profile</p>
        </div>
        <ManageUser data={currentUser} onconfirm={handleUpdate} />
      </>
    </div>
  );
};

export default Page;
