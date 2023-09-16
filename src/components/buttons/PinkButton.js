import React from "react";

export default function PinkButton({ text, clickHandler, className, icon }) {
  return (
    <button
      className={`${
        className ? className : ""
      } w-full h-[48px] rounded-md bg-primary text-white flex justify-center items-center gap-2`}
      onClick={clickHandler}
    >
      {icon && <Image src={icon} />}
      {text}
    </button>
  );
}
