import React from "react";
import PrimaryInput from "../Inputs/PrimaryInput";
import PinkButton from "../buttons/PinkButton";

const AddReview = () => {
  return (
    <div className="w-[100%] md:w-[70%] mx-auto">
      <form action="">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <label>Name</label>
            <PrimaryInput
              className={"bg-white py-3"}
              placeholder={"David John"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Email</label>
            <PrimaryInput
              className={"bg-white py-3"}
              placeholder={"davidjohn@gmail.com"}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label>Rating</label>
          </div>
          <div className="flex flex-col gap-1">
            <label>Description</label>
            <textarea
              placeholder="Nars Foundation is a make up must have"
              className="resize-none bg-white shadow-custom-1 p-2 outline-none rounded-md"
              rows={6}
            />
          </div>
          <PinkButton
            type={"submit"}
            text={"SUBMIT"}
            className={"w-[35%] sm:w-[30%]"}
          />
        </div>
      </form>
    </div>
  );
};

export default AddReview;
