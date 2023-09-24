import useClickOutside from "@/hooks/useClickOutside";
import React, { useRef } from "react";

const Dropdown = ({ show, setshow, options, className, handleClick }) => {
  const ref = useRef(null);

  useClickOutside(ref, () => setshow(false));

  return (
    <div
      ref={ref}
      className={`cursor-pointer absolute bg-white shadow-dropdown-shadow p-2 rounded-lg top-6 w-full min-w-[220px] z-20 ${
        show ? "block" : "hidden"
      } ${className ? className : ""}`}
    >
      {options.map((opt, index) => (
        <div
          className="text-secondary p-3 cursor-pointer whitespace-nowrap hover:text-primary"
          onClick={(e) => {
            setshow(false);
            handleClick ? handleClick(index) : null;
          }}
        >
          <p>{opt.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
