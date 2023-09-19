import Image from "next/image";
import React from "react";

export default function PinkButton({
  text,
  clickHandler,
  className,
  icon,
  type,
}) {
  return (
    <button
      type={type}
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
