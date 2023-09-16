import React from "react";

export default function PrimaryInput({
  type,
  value,
  changeHandler,
  placeholder,
  className,
}) {
  return (
    <input
      value={value}
      onChange={changeHandler}
      type={type}
      placeholder={placeholder}
      className={`bg-gray-1 shadow-custom-1 py-2 outline-none px-2  rounded-md ${
        className ? className : ""
      }`}
    />
  );
}
