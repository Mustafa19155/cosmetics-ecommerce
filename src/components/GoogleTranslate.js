"use client";
import { useEffect, useState } from "react";
import { SelectPicker } from "rsuite";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import Dropdown from "./Dropdowns/Dropdown";

const GoogleTranslate = () => {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "auto",
        autoDisplay: false,
        // includedLanguages: "ru,en,pl", // If you remove it, by default all google supported language will be included
        // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        className="fill-black group-hover:fill-primary duration-75 mr-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 20C4.48632 20 0 15.5137 0 10C0 4.48632 4.48632 0 10 0C15.5137 0 20 4.48632 20 10C20 15.5137 15.5137 20 10 20ZM10 0.850526C4.95579 0.850526 0.850526 4.95579 0.850526 10C0.850526 15.0442 4.95579 19.1495 10 19.1495C15.0442 19.1495 19.1495 15.0442 19.1495 10C19.1495 4.95579 15.0442 0.850526 10 0.850526Z" />
        <path d="M9.99974 20C7.07764 20 4.78711 15.6084 4.78711 10C4.78711 4.39158 7.07764 0 9.99974 0C12.9218 0 15.2124 4.39158 15.2124 10C15.2124 15.6084 12.9218 20 9.99974 20ZM9.99974 0.850526C7.63553 0.850526 5.63764 5.04 5.63764 10C5.63764 14.96 7.63553 19.1495 9.99974 19.1495C12.364 19.1495 14.3618 14.96 14.3618 10C14.3618 5.04 12.364 0.850526 9.99974 0.850526Z" />
        <path d="M10.0005 5.6362C7.37731 5.6362 4.90152 4.88462 3.03204 3.5183C2.84257 3.37936 2.80046 3.11409 2.93941 2.92462C3.07836 2.73515 3.34362 2.69304 3.53309 2.83199C5.25731 4.09304 7.55415 4.78567 9.99836 4.78567C12.4426 4.78567 14.7394 4.09094 16.4636 2.83199C16.6531 2.69304 16.9205 2.73515 17.0573 2.92462C17.1963 3.11409 17.1541 3.38146 16.9647 3.5183C15.0994 4.88462 12.6236 5.6362 10.0005 5.6362Z" />
        <path d="M16.7141 17.2457C16.6278 17.2457 16.5394 17.2183 16.4636 17.1636C14.7394 15.9025 12.4426 15.2099 9.99836 15.2099C7.55415 15.2099 5.25731 15.9046 3.53309 17.1636C3.34362 17.3025 3.07625 17.2604 2.93941 17.071C2.80046 16.8815 2.84257 16.6141 3.03204 16.4773C4.90152 15.111 7.3773 14.3594 10.0005 14.3594C12.6236 14.3594 15.0994 15.111 16.9689 16.4773C17.1584 16.6162 17.2005 16.8815 17.0615 17.071C16.9752 17.1867 16.8468 17.2457 16.7141 17.2457Z" />
        <path d="M19.5684 10.4247H0.425263C0.189474 10.4247 0 10.2332 0 9.99948C0 9.7658 0.191579 9.57422 0.425263 9.57422H19.5684C19.8042 9.57422 19.9937 9.7658 19.9937 9.99948C19.9937 10.2332 19.8042 10.4247 19.5684 10.4247Z" />
        <path d="M10.0014 20C9.76565 20 9.57617 19.8084 9.57617 19.5747V0.425263C9.57617 0.189474 9.76775 0 10.0014 0C10.2351 0 10.4267 0.191579 10.4267 0.425263V19.5747C10.4267 19.8084 10.2372 20 10.0014 20Z" />
      </svg>

      <div
        // className="flex flex-row-reverse items-center gap-2"
        id="google_translate_element"
        className="absolute left-5 w-14 overflow-hidden"
      />
      <svg
        width="12"
        height="7"
        viewBox="0 0 12 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-black group-hover:fill-primary duration-75 ml-2"
      >
        <path d="M5.83817 6.66733C5.72849 6.66796 5.61977 6.64694 5.51824 6.60547C5.41671 6.564 5.32437 6.5029 5.2465 6.42566L0.246499 1.42566C0.168392 1.34819 0.106397 1.25602 0.0640893 1.15447C0.0217821 1.05293 0 0.944004 0 0.833994C0 0.723984 0.0217821 0.615062 0.0640893 0.513513C0.106397 0.411964 0.168392 0.319796 0.246499 0.242327C0.402634 0.0871179 0.613844 0 0.833999 0C1.05415 0 1.26536 0.0871179 1.4215 0.242327L5.83817 4.65899L10.2465 0.242327C10.4026 0.0871179 10.6138 0 10.834 0C11.0542 0 11.2654 0.0871179 11.4215 0.242327C11.4996 0.319796 11.5616 0.411964 11.6039 0.513513C11.6462 0.615062 11.668 0.723984 11.668 0.833994C11.668 0.944004 11.6462 1.05293 11.6039 1.15447C11.5616 1.25602 11.4996 1.34819 11.4215 1.42566L6.4215 6.42566C6.26628 6.57962 6.05678 6.66641 5.83817 6.66733Z" />
      </svg>

      {/* <div className="" onClick={() => setshowDropDown(true)}>
        <p>{selected ? selected : languages[0].name}</p>
      </div>
      <Dropdown
        options={languages}
        setactive={() => {}}
        setshow={setshowDropDown}
        handleClick={() => {}}
        show={showDropDown}
      /> */}
      {/* <select
        onChange={(e) => langChange(e)}
        className="notranslate cursor-pointer outline-none bg-transparent"
      >
        {languages.map((lang) => (
          <>
            <option
              className="notranslate"
              value={lang.value}
              selected={selected == lang.value}
            >
              {lang.label}
            </option>
          </>
        ))}
      </select> */}
      {/* <SelectPicker
        data={languages}
        style={{ width: 100, zIndex: 100 }}
        placement="bottomEnd"
        cleanable={false}
        value={selected}
        searchable={false}
        className={"notranslate"}
        menuClassName={"notranslate"}
        onSelect={(e, m, evt) => langChange(e, m, evt)}
        placeholder="Lang"
      /> */}
    </>
  );
};

export default GoogleTranslate;
