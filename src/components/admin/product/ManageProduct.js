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

const ManageProduct = ({ product, categories }) => {
  const router = useRouter();
  const [isEditing, setisEditing] = useState(product ? true : false);
  const [name, setname] = useState(product?.name);
  const [description, setdescription] = useState(product?.description);
  const [price, setprice] = useState(product?.price);
  const [images, setimages] = useState(product ? product.images : []);
  const [discount, setdiscount] = useState(product?.discount);
  const [availability, setavailability] = useState(product?.availability);
  const [quantity, setquantity] = useState(product?.quantity);
  const [category, setcategory] = useState(product?.category);

  const handleRemoveImage = (index) => {
    setimages(
      images.filter((img, i) => {
        return index != i;
      })
    );
  };

  return (
    <div>
      <div className="flex gap-5 lg:gap-0 flex-col lg:flex-row lg:items-center justify-between">
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
            clickHandler={() => router.push("/admin/product")}
          />

          <PinkButton text={"SAVE"} className={"px-16"} />
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
            changeHandler={(e) => setprice(e.target.value)}
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

            <label
              for="upload-image-input"
              class={`cursor-pointer`}
              style={
                {
                  // borderImage: `url(${BorderImg}) 10 round`,
                  // border: "10px solid transparent",
                }
              }
            >
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
            changeHandler={(e) => setdiscount(e.target.value)}
            placeholder={"Product Name"}
            type={"number"}
          />
        </div>
        {isEditing && (
          <div className="flex flex-col gap-2 mt-5">
            <label className="text-sm font-inter font-semibold">
              Availability
            </label>
            <PrimaryInput
              className={"!p-3"}
              value={availability}
              changeHandler={(e) => setavailability(e.target.value)}
              placeholder={"Availability"}
            />
          </div>
        )}
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Quantity</label>
          <PrimaryInput
            className={"!p-3"}
            value={quantity}
            changeHandler={(e) => setquantity(e.target.value)}
            placeholder={"Quantity"}
            type={"number"}
          />
        </div>
        <div className="flex flex-col gap-2 mt-5">
          <label className="text-sm font-inter font-semibold">Category</label>
          <SelectInput
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

// import { useState } from "react";

// const App = () => {
//   const [selectedImage, setSelectedImage] = useState();

//   // This function will be triggered when the file field change
//   const imageChange = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       setSelectedImage(e.target.files[0]);
//     }
//   };

//   // This function will be triggered when the "Remove This Image" button is clicked
//   const removeSelectedImage = () => {
//     setSelectedImage();
//   };

//   return (
//     <>
//       <div style={styles.container}>
//         <input accept="image/*" type="file" onChange={imageChange} />

//         {selectedImage && (
//           <div style={styles.preview}>
//             {console.log(URL.createObjectURL(selectedImage))}
//             <img
//               src={URL.createObjectURL(selectedImage)}
//               style={styles.image}
//               alt="Thumb"
//             />
//             <button onClick={removeSelectedImage} style={styles.delete}>
//               Remove This Image
//             </button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default App;

// // Just some styles
// const styles = {
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingTop: 50,
//   },
//   preview: {
//     marginTop: 50,
//     display: "flex",
//     flexDirection: "column",
//   },
//   image: { maxWidth: "100%", maxHeight: 320 },
//   delete: {
//     cursor: "pointer",
//     padding: 15,
//     background: "red",
//     color: "white",
//     border: "none",
//   },
// };
