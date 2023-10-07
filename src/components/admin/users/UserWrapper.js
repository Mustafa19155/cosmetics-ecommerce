"use client";
import { updateUserFromAdmin } from "@/api/users";
import useAlert from "@/hooks/useAlert";
import React from "react";
import ManageUser from "./ManageUser";

const UserWrapper = ({ user }) => {
  const { setAlert } = useAlert();

  const handleUpdateUser = async ({ data, id }) => {
    updateUserFromAdmin({ data, id })
      .then((res) => {
        setAlert("User successfully updated", "success");
      })
      .catch((err) => {});
  };

  return <ManageUser onconfirm={handleUpdateUser} data={user} />;
};

export default UserWrapper;
