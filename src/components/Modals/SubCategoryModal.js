import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import PrimaryInput from "../Inputs/PrimaryInput";
import TransparentButton from "../buttons/TransparentButton";
import PinkButton from "../buttons/PinkButton";
import SelectInput from "../Inputs/SelectInput";
import useAlert from "@/hooks/useAlert";
import { getBrands } from "@/api/brands";

const SubCategoryModal = ({ open, onclose, subcategory, onconfirm }) => {
  const [category, setcategory] = useState("");
  const [activeBrand, setactiveBrand] = useState(null);
  const [image, setimage] = useState("");
  const [randId, setrandId] = useState("");
  const [apiCalled, setapiCalled] = useState(false);
  const [brands, setbrands] = useState([]);

  const { setAlert } = useAlert();

  const handleGetAllBrands = () => {
    getBrands()
      .then((res) => {
        setbrands(res);
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const handleAddCategory = async () => {
    if (category && activeBrand && image) {
      setapiCalled(true);
      const formData = new FormData();
      formData.append("name", category);
      formData.append("brand", activeBrand._id);
      if (image instanceof File) {
        formData.append("images", image);
      } else {
        // const response = await fetch(image);
        // const data = await response.blob();
        // const fileName = "updatedImage";
        // formData.append(
        //   "images",
        //   new File([data], fileName, {
        //     type: data.type,
        //   })
        // );
      }

      onconfirm({ data: formData });
    } else {
      setAlert("Please fill all fields", "danger");
    }
  };

  useEffect(() => {
    handleGetAllBrands();
    setcategory(subcategory?.data.name);
    setimage(subcategory?.data.image);
    setrandId(Math.random() * 10);
    setactiveBrand(brands[0]?.data);
  }, [subcategory]);

  return (
    <ModalWrapper open={open}>
      <div className="w-[800px] max-w-[100vw]">
        <p className="p-5">{subcategory ? "Edit" : "Create"} Brand</p>
        <hr />
        <div className="flex p-8 justify-between flex-wrap">
          <div className="flex flex-col gap-5 w-[100%] md:w-[50%] order-2 md:order-1">
            <div className="flex flex-col gap-1">
              <label>Category Name</label>
              <PrimaryInput
                placeholder={"Perfume"}
                changeHandler={(e) => setcategory(e.target.value)}
                value={category}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Select Brand</label>
              <SelectInput
                placeholder={"Brand"}
                options={brands}
                dropdownClassName={
                  "!top-12 max-h-[140px] overflow-scroll brand-select-drop"
                }
                active={activeBrand}
                setactive={(e) => setactiveBrand(e)}
              />
            </div>
          </div>
          <div className="w-[100%] md:w-[50%] flex justify-center items-center relative p-8 order-1 md:order-2">
            <label
              for={`upload-image-input-${randId}`}
              class={`cursor-pointer`}
            >
              {image ? (
                <div className="h-[200px] w-[200px] flex justify-center items-center">
                  <img
                    src={
                      image instanceof File ? URL.createObjectURL(image) : image
                    }
                    className="max-h-full max-w-auto"
                  />
                </div>
              ) : (
                <div class="flex gap-3 border-dashed border-primary border w-fit p-12">
                  <p className="font-bold text-lg">+ Add Photo</p>
                </div>
              )}
              <input
                accept="image/*"
                id={`upload-image-input-${randId}`}
                type="file"
                class="hidden"
                onChange={(e) => setimage(e.target.files[0])}
              />
            </label>
          </div>
        </div>
        <div className="flex items-center justify-between gap-5 px-8 pb-5">
          <TransparentButton text={"CANCEL"} clickHandler={onclose} />
          <PinkButton
            disabled={apiCalled}
            text={`${subcategory ? "EDIT" : "ADD"}`}
            clickHandler={() => handleAddCategory()}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default SubCategoryModal;
