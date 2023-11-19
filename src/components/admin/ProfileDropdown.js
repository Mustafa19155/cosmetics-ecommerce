import React from "react";
import Dropdown from "../Dropdowns/Dropdown";
import { useRouter } from "next/navigation";
import { deleteCookie } from "@/actions/serverActions";

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
      clickHandler: async () => {
        await deleteCookie({ cookieName: "token" });
        router.push("/adminLogin");
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
        setactive={() => {}}
      />
    </div>
  );
};

export default ProfileDropdown;
