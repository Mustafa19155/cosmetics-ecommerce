"use client";
import { updateUserFromAdmin } from "@/api/users";
import React from "react";
import ManageUser from "./ManageUser";

const UserWrapper = ({ user }) => {
  const handleUpdateUser = async ({ data, id }) => {
    updateUserFromAdmin({ data, id })
      .then((res) => {})
      .catch((err) => {
        throw err;
      });
  };

  return <ManageUser onconfirm={handleUpdateUser} data={user} />;
};

export default UserWrapper;
