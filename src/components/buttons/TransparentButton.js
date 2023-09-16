"use client";
import Image from "next/image";
import React from "react";

export default function TransparentButton({
  text,
  clickHandler,
  className,
  icon,
}) {
  return (
    <button
      className={`${
        className ? className : ""
      } w-full h-[48px] rounded-md border border-primary flex justify-center items-center gap-2`}
      onClick={clickHandler}
    >
      {icon && <Image src={icon} />}
      {text}
    </button>
  );
}
