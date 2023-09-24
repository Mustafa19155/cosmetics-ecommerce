import Link from "next/link";
import React from "react";
import BackIcon from "@/assets/icons/back.svg";
import Image from "next/image";
import ManageUser from "@/components/admin/users/ManageUser";

const Page = () => {
  return (
    <div>
      <div className="flex items-center gap-4">
        <Link href={"/admin/product"}>
          <Image src={BackIcon} />
        </Link>
        <p className="font-bold text-3xl">Profile</p>
      </div>
      <ManageUser />
    </div>
  );
};

export default Page;
