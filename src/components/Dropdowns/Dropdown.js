import useClickOutside from "@/hooks/useClickOutside";
import React, { useRef } from "react";

const Dropdown = ({ show, setshow, options, className }) => {
  const ref = useRef(null);

  useClickOutside(ref, () => setshow(false));

  return (
    <div
      ref={ref}
      className={`cursor-pointer absolute bg-white shadow-dropdown-shadow p-2 rounded-lg top-6 w-full min-w-[220px] z-20 ${
        show ? "block" : "hidden"
      } ${className ? className : ""}`}
    >
      {options.map((opt) => (
        <div className="text-secondary p-3 cursor-pointer whitespace-nowrap">
          <p>{opt.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
