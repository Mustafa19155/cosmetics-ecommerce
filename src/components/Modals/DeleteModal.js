import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import PrimaryInput from "../Inputs/PrimaryInput";
import TransparentButton from "../buttons/TransparentButton";
import PinkButton from "../buttons/PinkButton";
import DeleteIcon from "@/assets/icons/modals/delete-pink.svg";
import Image from "next/image";

const DeleteModal = ({ open, onclose, onconfirm, type }) => {
  return (
    <ModalWrapper open={open}>
      <div className="p-8">
        <div className="text-center flex flex-col items-center gap-7">
          <Image src={DeleteIcon} />
          <p className="text-xl font-bold">
            Are you sure you want to delete this {type}?
          </p>
        </div>
        <div className="flex items-center justify-between gap-5 mt-8">
          <TransparentButton text={"CANCEL"} clickHandler={onclose} />
          <PinkButton text={"DELETE"} clickHandler={onconfirm} />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default DeleteModal;
