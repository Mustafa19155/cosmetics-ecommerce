import useClickOutside from "@/hooks/useClickOutside";
import React, { useRef } from "react";

const Dropdown = ({ show, setshow, options }) => {
  const ref = useRef(null);

  useClickOutside(ref, () => setshow(false));

  return (
    <div
      ref={ref}
      className={`absolute bg-white shadow-dropdown-shadow p-2 rounded-lg top-6 w-[220px] ${
        show ? "block" : "hidden"
      }`}
    >
      {options.map((opt) => (
        <div className="text-secondary p-3 cursor-pointer">
          <p>{opt.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
