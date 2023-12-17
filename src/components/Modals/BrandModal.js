import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import PrimaryInput from "../Inputs/PrimaryInput";
import TransparentButton from "../buttons/TransparentButton";
import PinkButton from "../buttons/PinkButton";
import useAlert from "@/hooks/useAlert";

const CategoryModal = ({ open, onclose, category, onconfirm }) => {
  const [categoryName, setcategoryName] = useState("");
  const [image, setimage] = useState("");
  const [description, setdescription] = useState("");
  const [url, seturl] = useState("");
  const [apiCalled, setapiCalled] = useState(false);

  const { setAlert } = useAlert();

  useEffect(() => {
    setcategoryName(category?.data.name);
    setimage(category?.data.image);
    setdescription(category?.data.description);
    seturl(category?.data.url);
  }, [category]);

  const handleAddBrand = () => {
    if (categoryName && description && image) {
      setapiCalled(true);
      const formData = new FormData();
      formData.append("name", categoryName);
      formData.append("description", description);
      if (url) formData.append("url", url);
      formData.append("images", image);
      onconfirm({ data: formData });
    } else {
      setAlert("Please fill all fields", "danger");
    }
  };

  return (
    <ModalWrapper open={open}>
      <div className="w-[800px] max-w-[100vw]">
        <p className="p-5">{category ? "Edit" : "Create"} Brand</p>
        <hr />
        <div className="flex p-8 justify-between flex-wrap">
          <div className="flex flex-col gap-5 w-[100%] md:w-[40%] order-2 md:order-1">
            <div className="flex flex-col gap-1">
              <label>Brand Name</label>
              <PrimaryInput
                placeholder={"Perfume"}
                changeHandler={(e) => setcategoryName(e.target.value)}
                value={categoryName}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Brand Description</label>
              <textarea
                placeholder="Description"
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="bg-gray-1 shadow-custom-1 py-2 px-2 rounded-md outline-none resize-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label>Youtube video url</label>
              <PrimaryInput
                placeholder={"URL"}
                changeHandler={(e) => seturl(e.target.value)}
                value={url}
              />
            </div>
          </div>
          <div className="w-[100%] md:w-[60%] flex justify-center items-center relative p-8 order-1 md:order-2">
            <label
              for={`upload-image-input-${category?.data._id}`}
              class={`cursor-pointer`}
            >
              {image ? (
                <div className="h-[200px] w-[350px] flex justify-center items-center overflow-hidden">
                  <img
                    src={
                      image instanceof File ? URL.createObjectURL(image) : image
                    }
                    className="max-h-full max-w-auto"
                  />
                </div>
              ) : (
                <div class="flex gap-3 border-dashed border-primary border w-[350px] p-12 justify-center">
                  <p className="font-bold text-lg">+ Add Photo</p>
                </div>
              )}
              <input
                accept="image/*"
                id={`upload-image-input-${category?.data._id}`}
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
            text={`${category ? "EDIT" : "ADD"}`}
            clickHandler={() => handleAddBrand()}
          />
        </div>
      </div>
    </ModalWrapper>
  );
};

export default CategoryModal;
