"use client";
import React, { useState } from "react";
import PrimaryInput from "../Inputs/PrimaryInput";
import PinkButton from "../buttons/PinkButton";
import { addReview } from "@/api/reviews";
import AddReviewStars from "./AddReviewStars";

const AddReview = ({ productId }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [description, setdescription] = useState("");
  const [rating, setrating] = useState(0);
  const [apiCalled, setapiCalled] = useState(false);

  const handleAddReview = () => {
    if (name && description && rating > 0) {
      setapiCalled(true);
      addReview({
        data: { name, email, description, product: productId, rating },
      })
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {});
    }
  };

  return (
    <div className="w-[100%] md:w-[70%] mx-auto">
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <label>Name</label>
          <PrimaryInput
            value={name}
            changeHandler={(e) => setname(e.target.value)}
            className={"bg-white py-3"}
            placeholder={"David John"}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Email</label>
          <PrimaryInput
            value={email}
            changeHandler={(e) => setemail(e.target.value)}
            className={"bg-white py-3"}
            placeholder={"davidjohn@gmail.com"}
          />
        </div>
        <div className="flex flex-col gap-1">
          <label>Rating</label>
          <AddReviewStars rating={rating} setrating={setrating} />
        </div>
        <div className="flex flex-col gap-1">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setdescription(e.target.value)}
            placeholder="Nars Foundation is a make up must have"
            className="resize-none bg-white shadow-custom-1 p-2 outline-none rounded-md"
            rows={6}
          />
        </div>
        <PinkButton
          disabled={apiCalled}
          clickHandler={handleAddReview}
          text={"SUBMIT"}
          className={"w-[35%] sm:w-[30%]"}
        />
      </div>
    </div>
  );
};

export default AddReview;
