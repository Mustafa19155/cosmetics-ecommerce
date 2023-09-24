import React from "react";
import Dropdown from "../Dropdowns/Dropdown";
import { useRouter } from "next/navigation";

const ProfileDropdown = ({ show, setshow }) => {
  const router = useRouter();

  const options = [
    {
      name: "Profile",
      value: "profile",
      clickHandler: () => {
        router.push("/admin/profile");
      },
    },
    {
      name: "Logout",
      value: "logout",
      clickHandler: () => {
        router.push("/login");
      },
    },
  ];

  return (
    <div className="relative top-8 right-20">
      <Dropdown
        options={options}
        handleClick={(e) => {
          options[e].clickHandler();
        }}
        show={show}
        setshow={() => setshow(false)}
      />
    </div>
  );
};

export default ProfileDropdown;
