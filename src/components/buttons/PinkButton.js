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
  loading,
}) {
  return (
    <button
      disabled={disabled == true || loading == true}
      type={type}
      className={`pink-btn ${
        className ? className : ""
      } w-full h-[48px] rounded-md ${
        disabled || loading ? "bg-gray-300" : "bg-primary hover:shadow-pink-btn"
      } text-white flex justify-center items-center gap-2 duration-150`}
      onClick={clickHandler}
    >
      {icon && <Image src={icon} />}
      {disabled ? "Loading..." : text}
    </button>
  );
}
