import Link from "next/link";
import React from "react";
import BackIcon from "@/assets/icons/back.svg";
import Image from "next/image";
import ManageUser from "@/components/admin/users/ManageUser";
import { headers } from "next/headers";
import { getSingleUser, updateUserFromAdmin } from "@/api/users";
import { redirect } from "next/navigation";
import UserWrapper from "@/components/admin/users/UserWrapper";

const Page = async () => {
  const headersList = headers();
  const activePath = headersList.get("x-invoke-path");

  const user = await getSingleUser({
    id: activePath.split("/")[activePath.split("/").length - 1],
  });

  return (
    <div>
      <div className="flex items-center gap-4">
        <Link href={"/admin/users"}>
          <Image src={BackIcon} />
        </Link>
        <p className="font-bold text-3xl">Profile</p>
      </div>
      <UserWrapper user={user} />
    </div>
  );
};

export default Page;
