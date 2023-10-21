"use client";
import React, { useState } from "react";
import BackIcon from "@/assets/icons/back.svg";
import Image from "next/image";
import TransparentButton from "@/components/buttons/TransparentButton";
import PinkButton from "@/components/buttons/PinkButton";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import SelectInput from "@/components/Inputs/SelectInput";
import Link from "next/link";
import DeleteIcon from "@/assets/icons/delete-black.svg";
import { useRouter } from "next/navigation";
import PlusIcon from "@/assets/icons/plus.svg";
import MinusIcon from "@/assets/icons/minus.svg";
import ConfirmModal from "@/components/Modals/ConfirmModal";
import { addProduct, editProduct } from "@/api/products";
import useAlert from "@/hooks/useAlert";
import axios from "axios";
import { axiosClient } from "@/api/axios";
import moment from "moment";

const ManageProduct = ({ product, categories }) => {
  const router = useRouter();

  const [isEditing, setisEditing] = useState(product ? true : false);
  const [name, setname] = useState(product?.name);
  const [description, setdescription] = useState(product?.description);
  const [price, setprice] = useState(product?.price);
  const [images, setimages] = useState(product ? product.images : []);
  const [confirmModalOpen, setconfirmModalOpen] = useState(false);
  const [discount, setdiscount] = useState(product ? product.discount : 0);
  const [quantity, setquantity] = useState(product ? product.quantity : 0);
  const [category, setcategory] = useState(
    product ? product.category : categories[0]
  );
  const [apiCalled, setapiCalled] = useState(false);

  const { setAlert } = useAlert();

  const handleRemoveImage = (index) => {
    setimages(
      images.filter((img, i) => {
        return index != i;
      })
    );
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setquantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setquantity(quantity + 1);
  };
  const handleDiscard = () => {
    router.push("/admin/product");
  };

  const handleAddProduct = async () => {
    if (
      name &&
      description &&
      quantity > 0 &&
      price &&
      discount >= 0 &&
      category &&
      images.length > 0
    ) {
      setapiCalled(true);
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("quantity", quantity);
      formData.append("discount", discount);
      formData.append("price", price);
      formData.append("category", category.value);
      await Promise.all(
        images.map(async (img) => {
          if (img instanceof File) {
            formData.append("images", img);
          } else {
            const response = await fetch(img);
            const data = await response.blob();
            const fileName = "updatedImage";
            formData.append(
              "images",
              new File([data], fileName, {
                type: data.type,
              })
            );
          }
        })
      );
      if (isEditing) {
        editProduct({ data: formData, id: product._id })
          .then((res) => {
            setapiCalled(false);
            setAlert("Product Updated Successfully", "success");
          })
          .catch((err) => {
            setapiCalled(false);
            setAlert(err, "danger");
          });
      } else {
        addProduct({ data: formData })
          .then((res) => {
            setapiCalled(false);
            setAlert("Product Added Successfully", "success");
          })
          .catch((err) => {
            setapiCalled(false);
            setAlert(err, "danger");
          });
      }
    } else {
      setAlert("Fill all fields", "danger");
    }
  };

  return (
    <div>
      <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
        <ConfirmModal
          open={confirmModalOpen}
          onclose={() => setconfirmModalOpen(false)}
          description={"Are you sure you want to discard the changes?"}
          onconfirm={handleDiscard}
        />
        <div className="flex items-center gap-4">
          <Link href={"/admin/product"}>
            <Image src={BackIcon} />
          </Link>
          <p className="font-bold text-3xl">
            {isEditing ? "Edit" : "Add"} Product
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap xs:flex-nowrap">
          <TransparentButton
            text={"DISCARD"}
            className={"px-16"}
            clickHandler={() => setconfirmModalOpen(true)}
          />

          <PinkButton
            disabled={apiCalled}
            clickHandler={handleAddProduct}
            text={isEditing ? "Save Changes" : "Save"}
            className={"px-16 whitespace-nowrap"}
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">
            Product Name
          </label>
          <PrimaryInput
            className={"!p-3"}
            value={name}
            changeHandler={(e) => setname(e.target.value)}
            placeholder={"Product Name"}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder={"Description"}
            className="resize-none bg-gray-1 shadow-custom-1 p-2 outline-none rounded-md"
            rows={6}
          />
        </div>{" "}
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Price</label>
          <PrimaryInput
            className={"!p-3"}
            value={price}
            changeHandler={(e) => {
              if (e.target.value > 0) setprice(e.target.value);
            }}
            placeholder={"Price"}
            type={"number"}
          />
        </div>
        <div className="mt-5">
          <div className="flex items-center gap-5 flex-wrap">
            {images.map((file, index) => (
              <div className="w-[23%] relative h-[265px]">
                <Image
                  src={DeleteIcon}
                  className="absolute top-0 right-0 cursor-pointer"
                  onClick={() => handleRemoveImage(index)}
                />
                <img
                  src={file instanceof File ? URL.createObjectURL(file) : file}
                  className="h-full w-auto object-contain"
                />
              </div>
            ))}

            <label for="upload-image-input" class={`cursor-pointer`}>
              <div class="flex gap-3 border-dashed border-primary border w-fit p-12">
                <p className="font-bold text-lg">+ Add Photo</p>
              </div>
              <input
                accept="image/*"
                id="upload-image-input"
                type="file"
                class="hidden"
                onChange={(e) => setimages([...images, e.target.files[0]])}
              />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Discount</label>
          <PrimaryInput
            className={"!p-3"}
            value={discount}
            changeHandler={(e) => {
              if (e.target.value >= 0) setdiscount(e.target.value);
            }}
            placeholder={"50%"}
            type={"number"}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Quantity</label>
          <div className="flex gap-8 text-lg items-center px-4 py-2 shadow-custom-1 w-fit">
            <Image
              src={MinusIcon}
              onClick={handleDecrement}
              className="cursor-pointer"
            />
            <p className="font-bold w-[30px] text-center">{quantity}</p>
            <Image
              src={PlusIcon}
              onClick={handleIncrement}
              className="cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Category</label>
          <SelectInput
            active={category}
            setactive={setcategory}
            options={categories}
            className={"!p-3 !bg-gray-1"}
            dropdownClassName={"relative !top-1"}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
