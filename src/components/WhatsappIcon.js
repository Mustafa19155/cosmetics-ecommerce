"use client";
import Image from "next/image";
import React from "react";
import WhatsappImg from "../assets/icons/whatsapp-icon.svg";

export default function WhatsappIcon() {
  function openWhatsApp() {
    const isWhatsAppInstalled = () => {
      const link = document.createElement("a");
      link.href = "whatsapp://send";
      return typeof link.href === "string" && link.href !== "";
    };

    var phoneNumber = "34615971758";
    const url = `https://web.whatsapp.com/send?phone=${phoneNumber}`;

    // Check if WhatsApp app is installed
    if (isWhatsAppInstalled()) {
      window.open(
        `https://api.whatsapp.com/send?phone=${phoneNumber}`,
        "_blank"
      );
    } else {
      window.open(url, "_blank");
    }
  }

  return (
    <div className="fixed h-[60px] w-[60px] bottom-[20px] right-[20px] z-50">
      <a onClick={openWhatsApp} role="button">
        <Image alt="Logo" src={WhatsappImg} fill={true} />
      </a>
    </div>
  );
}
