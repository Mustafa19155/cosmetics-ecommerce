import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import PrimaryInput from "../Inputs/PrimaryInput";
import TransparentButton from "../buttons/TransparentButton";
import PinkButton from "../buttons/PinkButton";

const CategoryModal = ({ open, onclose, category, onconfirm }) => {
  const [categoryName, setcategoryName] = useState("");
  useEffect(() => {
    setcategoryName(category?.name);
  }, [category]);

  return (
    <ModalWrapper open={open}>
      <div>
        <p className="p-5">{category ? "Edit" : "Create"} Brand</p>
        <hr />
        <div className="p-8">
          <div className="">
            <label>Brand</label>
            <PrimaryInput
              className={"mt-1"}
              placeholder={"Perfume"}
              changeHandler={(e) => setcategoryName(e.target.value)}
              value={categoryName}
            />
          </div>
          <div className="flex items-center justify-between gap-5 mt-8">
            <TransparentButton text={"CANCEL"} clickHandler={onclose} />
            <PinkButton
              text={`${category ? "EDIT" : "ADD"}`}
              clickHandler={() => onconfirm({ name: categoryName })}
            />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CategoryModal;
