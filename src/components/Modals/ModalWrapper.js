import React from "react";

export default function ModalWrapper({ children, open }) {
  return (
    <div
      className={`fixed h-[100vh] w-screen z-50 top-0 left-0 flex flex-col justify-center items-center ${
        open ? "" : "hidden"
      }`}
      style={{
        background: "rgba(0,0,0,0.8)",
      }}
    >
      <div className="w-[450px] max-w-[100vw] bg-white min-h-fit min-w-fit overflow-y-scroll modal-content-wrapper">
        {children}
      </div>
    </div>
  );
}
