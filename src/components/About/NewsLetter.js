import React from "react";
import PrimaryInput from "../Inputs/PrimaryInput";
import PinkButton from "../buttons/PinkButton";

const NewsLetter = () => {
  return (
    <div className="w-fit flex flex-col items-center m-auto text-center gap-10">
      <p className="text-3xl font-bold">NewsLetter</p>
      <div className="flex-col gap-4 min-[350px]:gap-0 min-[350px]:flex-row flex justify-center">
        <PrimaryInput placeholder={"Enter Your Email"} />
        <PinkButton
          text={"Subscribe"}
          className={"px-4 sm:px-10 rounded-none"}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
