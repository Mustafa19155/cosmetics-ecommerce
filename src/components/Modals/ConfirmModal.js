import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import PrimaryInput from "../Inputs/PrimaryInput";
import TransparentButton from "../buttons/TransparentButton";
import PinkButton from "../buttons/PinkButton";
import DeleteIcon from "@/assets/icons/confirm-modal.svg";
import Image from "next/image";

const ConfirmModal = ({ open, onclose, onconfirm, description }) => {
  const [apiCalled, setapiCalled] = useState(false);

  return (
    <ModalWrapper open={open}>
      <div className="p-8 text-black">
        <div className="text-center flex flex-col items-center gap-7">
          <Image src={DeleteIcon} />
          <p className="text-xl font-bold">{description}</p>
        </div>
        <div className="flex items-center justify-between gap-5 mt-8">
          <TransparentButton text={"CANCEL"} clickHandler={onclose} />
          <PinkButton
            disabled={apiCalled}
            text={"CONFIRM"}
            clickHandler={() => {
              setapiCalled(true);
              onconfirm();
            }}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default ConfirmModal;
