"use client";
import { updateUserFromAdmin } from "@/api/users";
import React from "react";
import ManageUser from "./ManageUser";
import useAlert from "@/hooks/useAlert";
import { useState } from "react";

const UserWrapper = ({ user }) => {
  const { setAlert } = useAlert();

  const handleUpdateUser = async ({ data, id }) => {
    updateUserFromAdmin({ data, id })
      .then((res) => {
        setAlert("User successfully updated", "success");
      })
      .catch((err) => {
        setAlert("Email already eixsts", "danger");
      });
  };

  return <ManageUser onconfirm={handleUpdateUser} data={user} />;
};

export default UserWrapper;
