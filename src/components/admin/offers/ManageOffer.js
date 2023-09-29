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
import moment from "moment";
import { useRouter } from "next/navigation";
import ConfirmModal from "@/components/Modals/ConfirmModal";
import { addOffer, editOffer } from "@/api/offers";
import useAlert from "@/hooks/useAlert";

const ManageOffer = ({ offer }) => {
  const router = useRouter();
  const [isEditing, setisEditing] = useState(offer ? true : false);
  const [name, setname] = useState(offer?.name);
  const [images, setimages] = useState(offer ? offer.images : []);
  const [confirmModalOpen, setconfirmModalOpen] = useState(false);
  const [starting_date, setstarting_date] = useState(
    offer ? moment(offer.starting_date).format("DD MMM, YYYY") : ""
  );
  const [ending_date, setending_date] = useState(
    offer ? moment(offer.ending_date).format("DD MMM, YYYY") : ""
  );
  const [discount, setdiscount] = useState(offer?.discount);

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

  const handleAddOffer = () => {
    if (name && starting_date && ending_date && discount) {
      const formData = new FormData();

      formData.append("name", name);
      formData.append("starting_date", starting_date);
      formData.append("ending_date", ending_date);
      formData.append("discount", discount);
      images.map(async (img) => {
        if (img instanceof File) {
          formData.append("images", img);
        } else {
          // var request = new XMLHttpRequest();
          // request.open("GET", img, true);
          // request.responseType = "blob";
          // request.onload = function () {
          //   var reader = new FileReader();
          //   reader.readAsDataURL(request.response);
          //   console.log(reader);
          //   reader.onload = function (e) {
          //     console.log("DataURL:", e.target.result);
          //   };
          // };
          // request.send();

          const response = await fetch(img, {
            mode: "no-cors",
          });
          const data = await response.blob();

          const fileName = "updatedImage";
          formData.append(
            "images",
            new File([data], fileName, {
              type: response.headers.get("content-type"),
            })
          );
        }
      });

      if (!isEditing) {
        addOffer({
          data: formData,
        })
          .then((res) => {
            setAlert("Offer Added Successfully", "success");
          })
          .catch((err) => {
            setAlert(err, "danger");
          });
      } else {
        editOffer({ data: formData, id: offer._id })
          .then((res) => {
            setAlert("Offer Updated Successfully", "success");
          })
          .catch((err) => {
            setAlert(err, "danger");
          });
      }
    } else {
      setAlert("Fill all fields first", "danger");
    }
  };

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
          <PrimaryInput
            className={"!p-3"}
            value={starting_date}
            changeHandler={(e) => setstarting_date(e.target.value)}
            placeholder={moment(Date.now()).format("DD MMM, YYYY")}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">
            Ending Date
          </label>
          <PrimaryInput
            className={"!p-3"}
            value={ending_date}
            changeHandler={(e) => setending_date(e.target.value)}
            placeholder={moment(Date.now()).format("DD MMM, YYYY")}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Discount</label>
          <PrimaryInput
            className={"!p-3"}
            value={discount}
            changeHandler={(e) => setdiscount(e.target.value)}
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
      </div>
    </div>
  );
};

export default ManageOffer;
