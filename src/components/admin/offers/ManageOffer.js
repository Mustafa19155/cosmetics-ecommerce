"use client";
import React, { useEffect, useState } from "react";
import BackIcon from "@/assets/icons/back.svg";
import Image from "next/image";
import TransparentButton from "@/components/buttons/TransparentButton";
import PinkButton from "@/components/buttons/PinkButton";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import SelectInput from "@/components/Inputs/SelectInput";
import Link from "next/link";
import DeleteIcon from "@/assets/icons/delete-black.svg";
import moment from "moment";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/Modals/ConfirmModal";
import { addOffer, editOffer } from "@/api/offers";
import useAlert from "@/hooks/useAlert";
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from "react-datepicker";

const ManageOffer = ({ offer, brands }) => {
  const router = useRouter();
  const [isEditing, setisEditing] = useState(offer ? true : false);
  const [name, setname] = useState(offer?.name);
  const [images, setimages] = useState(offer ? offer.images : []);
  const [confirmModalOpen, setconfirmModalOpen] = useState(false);
  const [brand, setbrand] = useState("");
  const [starting_date, setstarting_date] = useState(
    offer
      ? moment(offer.starting).format("MMM DD, YYYY")
      : moment(Date.now()).format("MMM DD, YYYY")
  );
  const [ending_date, setending_date] = useState(
    offer
      ? moment(offer.ending).format("MMM DD, YYYY")
      : moment(Date.now()).format("MMM DD, YYYY")
  );
  const [discount, setdiscount] = useState(offer?.discount);
  const [apiCalled, setapiCalled] = useState(false);

  const { setAlert } = useAlert();

  const handleRemoveImage = (index) => {
    setimages(
      images.filter((img, i) => {
        return index != i;
      })
    );
  };

  const handleDiscard = () => {
    router.push("/admin/offers");
  };

  const handleAddOffer = async () => {
    if (name && starting_date && ending_date && discount) {
      setapiCalled(true);
      const formData = new FormData();

      formData.append("name", name);
      formData.append("starting_date", starting_date);
      formData.append("starting", moment(starting_date).unix());
      formData.append("ending_date", ending_date);
      formData.append("ending", moment(ending_date).unix());
      formData.append("discount", discount);
      if (brand && brand._id) formData.append("brand", brand._id);
      formData.append("all", brand && brand._id ? false : true);
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
      if (!isEditing) {
        addOffer({
          data: formData,
        })
          .then((res) => {
            setapiCalled(false);
            setAlert("Offer Added Successfully", "success");
            router.push("/admin/offers");
          })
          .catch((err) => {
            setapiCalled(false);
            setAlert(err, "danger");
          });
      } else {
        editOffer({ data: formData, id: offer._id })
          .then((res) => {
            setapiCalled(false);
            setAlert("Offer Updated Successfully", "success");
            router.push("/admin/offers");
          })
          .catch((err) => {
            setapiCalled(false);
            setAlert(err, "danger");
          });
      }
    } else {
      setAlert("Fill all fields first", "danger");
    }
  };

  useEffect(() => {
    if (offer && offer.brand) {
      const foundBrand = brands.find((bran) => bran._id == offer.brand);
      setbrand({
        name: foundBrand.name,
        value: foundBrand._id,
      });
    } else {
      setbrand({ name: "All Brands", value: "" });
    }
  }, []);

  return (
    <div>
      {
        <ConfirmModal
          open={confirmModalOpen}
          onclose={() => setconfirmModalOpen(false)}
          description={"Are you sure you want to discard the changes?"}
          onconfirm={handleDiscard}
        />
      }
      <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href={"/admin/offers"}>
            <Image src={BackIcon} />
          </Link>
          <p className="font-bold text-3xl">
            {isEditing ? "Edit" : "Add"} Offer
          </p>
        </div>
        <div className="flex items-center gap-4 flex-wrap min-[400px]:flex-nowrap">
          <TransparentButton
            text={"DISCARD"}
            className={"px-16"}
            clickHandler={() => setconfirmModalOpen(true)}
          />

          <PinkButton
            disabled={apiCalled}
            text={isEditing ? "Save Changes" : "Save"}
            className={"px-16 whitespace-nowrap"}
            clickHandler={handleAddOffer}
          />
        </div>
      </div>
      <div className="w-[100%] md:w-[60%]">
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Offer Name</label>
          <PrimaryInput
            className={"!p-3"}
            value={name}
            changeHandler={(e) => setname(e.target.value)}
            placeholder={"Offer Name"}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">
            Starting Date
          </label>

          <ReactDatePicker
            value={starting_date}
            onChange={(e) => {
              setstarting_date(moment(e).format("MMM DD, YYYY"));
            }}
            className={`h-full w-full outline-none bg-gray-1 shadow-custom-1 py-2 px-2 rounded-md flex gap-2 items-center`}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">
            Ending Date
          </label>
          <ReactDatePicker
            value={ending_date}
            onChange={(e) => {
              setending_date(moment(e).format("MMM DD, YYYY"));
            }}
            className={`h-full w-full outline-none bg-gray-1 shadow-custom-1 py-2 px-2 rounded-md flex gap-2 items-center`}
          />
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
          />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-center gap-5 flex-wrap">
          {images.map((file, index) => (
            <div className="w-[90%] md:w-[50%] relative h-[20vw] max-h-[315px] min-h-[200px] overflow-hidden">
              <Image
                src={DeleteIcon}
                className="absolute top-2 right-2 cursor-pointer"
                onClick={() => handleRemoveImage(index)}
              />
              <img
                src={file instanceof File ? URL.createObjectURL(file) : file}
                className="h-full w-full object-cover"
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
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Brand</label>
          <SelectInput
            active={brand}
            setactive={setbrand}
            options={[{ name: "All Brands", value: "" }, ...brands]}
            className={"!p-3 !bg-gray-1"}
            dropdownClassName={"relative !top-1"}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageOffer;
