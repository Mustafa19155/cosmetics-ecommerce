import React, { useState } from "react";
import PrimaryInput from "@/components/Inputs/PrimaryInput";
import SearchIcon from "@/assets/icons/search-light.svg";
import FilterIcon from "@/assets/icons/filter.svg";
import Image from "next/image";
import Dropdown from "@/components/Dropdowns/Dropdown";

const TableSearch = ({
  searchValue,
  setsearchValue,
  options,
  showFilters,
  activeFilter,
  setactiveFilter,
}) => {
  const [showFilterDropdown, setshowFilterDropdown] = useState(false);

  return (
    <div className="flex justify-end items-center gap-5 mt-5 p-2 mb-10">
      <div className="w-[30%] min-w-[250px] max-w-[350px]">
        <PrimaryInput
          placeholder={"Search"}
          icon={SearchIcon}
          value={searchValue}
          changeHandler={(e) => setsearchValue(e.target.value)}
          className={"py-3"}
        />
      </div>
      {showFilters && (
        <div className="relative">
          <Dropdown
            setactive={setactiveFilter}
            show={showFilterDropdown}
            setshow={setshowFilterDropdown}
            options={options}
            handleClick={() => {}}
            className={"right-0"}
          />
          <div
            className=" cursor-pointer"
            onClick={() => setshowFilterDropdown(true)}
          >
            <Image src={FilterIcon} />
          </div>
        </div>
      )}
    </div>
  );
};

export default TableSearch;
