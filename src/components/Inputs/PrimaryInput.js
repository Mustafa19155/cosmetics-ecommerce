import Image from "next/image";
import React from "react";

export default function PrimaryInput({
  type,
  value,
  changeHandler,
  placeholder,
  className,
  name,
  icon,
}) {
  return (
    <div
      className={`bg-gray-1 shadow-custom-1 py-2 px-2 rounded-md flex gap-2 items-center ${
        className ? className : ""
      }`}
    >
      {icon && <Image src={icon} className="h-[20px] w-[20px]" />}
      <input
        name={name}
        value={value}
        onChange={changeHandler}
        type={type}
        placeholder={placeholder}
        className="h-full w-full outline-none"
      />
    </div>
  );
}
