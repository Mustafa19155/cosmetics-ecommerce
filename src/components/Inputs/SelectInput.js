import React, { useState } from "react";
import ArrowIcon from "../../assets/icons/arrow.svg";
import Image from "next/image";
import Dropdown from "../Dropdowns/Dropdown";

const SelectInput = ({ options, className, dropdownClassName }) => {
  const [showDropdown, setshowDropdown] = useState(false);
  return (
    <div className="relative">
      <div
        className={`bg-white shadow-select-input flex justify-between items-center p-4 rounded-lg gap-4 cursor-pointer ${
          className ? className : ""
        }`}
        onClick={() => setshowDropdown(!showDropdown)}
      >
        <p className="whitespace-nowrap">{options[0].name}</p>
        <svg
          width="14"
          height="14"
          viewBox="0 0 12 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.83817 6.66733C5.72849 6.66796 5.61977 6.64694 5.51824 6.60547C5.41671 6.564 5.32437 6.5029 5.2465 6.42566L0.246499 1.42566C0.168392 1.34819 0.106397 1.25602 0.0640893 1.15447C0.0217821 1.05293 0 0.944004 0 0.833994C0 0.723984 0.0217821 0.615062 0.0640893 0.513513C0.106397 0.411964 0.168392 0.319796 0.246499 0.242327C0.402634 0.0871179 0.613844 0 0.833999 0C1.05415 0 1.26536 0.0871179 1.4215 0.242327L5.83817 4.65899L10.2465 0.242327C10.4026 0.0871179 10.6138 0 10.834 0C11.0542 0 11.2654 0.0871179 11.4215 0.242327C11.4996 0.319796 11.5616 0.411964 11.6039 0.513513C11.6462 0.615062 11.668 0.723984 11.668 0.833994C11.668 0.944004 11.6462 1.05293 11.6039 1.15447C11.5616 1.25602 11.4996 1.34819 11.4215 1.42566L6.4215 6.42566C6.26628 6.57962 6.05678 6.66641 5.83817 6.66733Z"
            fill="#3C3A39B2"
          />
        </svg>
      </div>
      <Dropdown
        className={`top-16 ${dropdownClassName ? dropdownClassName : ""}`}
        options={options}
        show={showDropdown}
        setshow={setshowDropdown}
      />
    </div>
  );
};

export default SelectInput;
