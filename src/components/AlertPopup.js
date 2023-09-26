"use client";
import React from "react";

import useAlert from "../hooks/useAlert";

export default function AlertPopup() {
  const { text, type } = useAlert();
  console.log(text, type);
  if (text && type) {
    return (
      <div
        className={`fixed top-0 left-0 text-center text-white w-screen p-2 z-50 ${
          type == "danger" ? "bg-red-400" : "bg-green-500"
        }`}
      >
        {text}
      </div>
    );
  } else {
    return <></>;
  }
}
