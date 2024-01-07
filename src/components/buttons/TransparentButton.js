"use client";
import Image from "next/image";
import React from "react";

export default function TransparentButton({
  text,
  clickHandler,
  className,
  icon,
  disabled,
  loading,
}) {
  return (
    <button
      disabled={disabled == true || loading == true}
      className={`${
        className ? className : ""
      } w-full h-[48px] rounded-md border ${
        disabled || loading ? "border-gray-3" : "border-primary"
      } flex justify-center items-center gap-2 hover:shadow-trans-btn duration-150`}
      onClick={clickHandler}
    >
      {icon && <Image src={icon} />}
      {disabled ? "Loading..." : text}
    </button>
  );
}
