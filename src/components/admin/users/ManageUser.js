"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import PortfileImg from "@/assets/icons/profile.svg";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import PinkButton from "@/components/buttons/PinkButton";
import useAlert from "@/hooks/useAlert";

const ManageUser = ({ data, onconfirm }) => {
  const [loading, setloading] = useState(true);
  const [username, setusername] = useState(data?.name);
  const [email, setemail] = useState(data?.email);
  const [image, setimage] = useState(data?.picture);
  const [isEditing, setisEditing] = useState(false);
  const [apiCalled, setapiCalled] = useState(false);

  const { setAlert } = useAlert();

  useEffect(() => {
    setusername(data?.name);
    setemail(data?.email);
    setimage(data?.picture);
    setloading(false);
  }, [data]);

  const handleConfirm = async () => {
    if (username && email && image) {
      const formData = new FormData();

      formData.append("name", username);
      formData.append("email", email);

      if (image instanceof File) {
        setapiCalled(true);
        formData.append("images", image);
        onconfirm({ data: formData, id: data._id });
      } else {
        return setAlert("Upload updated profile image", "danger");
        // const response = await fetch(image);
        // const imgData = await response.blob();
        // const fileName = "updatedImage";
        // formData.append(
        //   "images",
        //   new File([imgData], fileName, {
        //     type: imgData.type,
        //   })
        // );
      }
    }
  };

  return (
    <>
      {loading ? (
        ""
      ) : (
        <div className="bg-white shadow-cart-wrapper mt-16 flex flex-col items-center gap-10 py-8 sm:px-4 sm:py-8 md:p-8 lg:p-16">
          <label for="file" className="cursor-pointer">
            <img
              src={
                image
                  ? image instanceof File
                    ? URL.createObjectURL(image)
                    : image
                  : PortfileImg.src
              }
              className="h-[167px] w-[167px] rounded-full"
            />

            <input
              disabled={!isEditing}
              type="file"
              id="file"
              name="file"
              className="hidden"
              accept="image/*"
              onChange={(e) => {
                if (e.target.files.length > 0) {
                  setimage(e.target.files[0]);
                }
              }}
            />
          </label>
          <div className="flex items-center gap-20 ml-8 sm:ml-24">
            <label>Name</label>
            <PrimaryInput
              disabled={!isEditing}
              className={`${isEditing ? "" : "bg-white shadow-none"}`}
              value={username}
              changeHandler={(e) => setusername(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-20 ml-8 sm:ml-24">
            <label>Email</label>
            <PrimaryInput
              disabled={!isEditing}
              className={`${isEditing ? "" : "bg-white shadow-none"}`}
              value={email}
              changeHandler={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            {isEditing ? (
              <PinkButton
                disabled={apiCalled}
                text={"SAVE"}
                className={"px-16"}
                clickHandler={handleConfirm}
              />
            ) : (
              <PinkButton
                text={"EDIT"}
                className={"px-16"}
                clickHandler={() => setisEditing(true)}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ManageUser;
