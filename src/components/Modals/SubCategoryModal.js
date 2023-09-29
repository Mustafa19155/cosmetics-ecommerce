import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import PrimaryInput from "../Inputs/PrimaryInput";
import TransparentButton from "../buttons/TransparentButton";
import PinkButton from "../buttons/PinkButton";
import SelectInput from "../Inputs/SelectInput";

const SubCategoryModal = ({
  open,
  onclose,
  subcategory,
  onconfirm,
  brands,
}) => {
  const [category, setcategory] = useState("");
  const [activeBrand, setactiveBrand] = useState(null);
  useEffect(() => {
    setcategory(subcategory?.name);
    brands = brands.map((cat) => {
      return {
        ...cat,
        name: cat.name,
        value: cat._id,
      };
    });
    setactiveBrand(brands[0]);
  }, [subcategory]);

  return (
    <ModalWrapper open={open}>
      <div>
        <p className="p-5">{subcategory ? "Edit" : "Create"} Subcategory</p>
        <hr />
        <div className="p-8">
          <div className="">
            <label>Name</label>
            <PrimaryInput
              className={"mt-1"}
              placeholder={"Perfume"}
              changeHandler={(e) => setcategory(e.target.value)}
              value={category}
            />
          </div>
          <div className="mt-10 flex flex-col gap-3">
            <label>Select Brand</label>
            <SelectInput
              placeholder={"Brand"}
              options={brands}
              dropdownClassName={"top-12"}
              active={activeBrand}
              setactive={setactiveBrand}
            />
          </div>
          <div className="flex items-center justify-between gap-5 mt-8">
            <TransparentButton text={"CANCEL"} clickHandler={onclose} />
            <PinkButton
              text={`${subcategory ? "EDIT" : "ADD"}`}
              clickHandler={() => {
                if (category && activeBrand) {
                  onconfirm({ name: category, brand: activeBrand.value });
                }
              }}
            />
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SubCategoryModal;
