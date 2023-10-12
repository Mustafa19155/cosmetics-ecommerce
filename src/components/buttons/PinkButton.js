"use client";
import Image from "next/image";
import React from "react";

export default function PinkButton({
  text,
  clickHandler,
  className,
  icon,
  type,
  disabled,
}) {
  return (
    <button
      disabled={disabled ? disabled : false}
      type={type}
      className={`pink-btn ${
        className ? className : ""
      } w-full h-[48px] rounded-md bg-primary text-white flex justify-center items-center gap-2 hover:shadow-pink-btn duration-150`}
      onClick={clickHandler}
    >
      {icon && <Image src={icon} />}
      {disabled ? "Loading..." : text}
    </button>
  );
}
