"use client";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import HamIcon from "@/assets/icons/hamburger.svg";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Logo from "@/assets/logo/logo.png";
import PrimaryInput from "../Inputs/PrimaryInput";
import useClickOutside from "@/hooks/useClickOutside";
import { AuthContext } from "@/contexts/userContext";
import handleEnterKeyPress from "@/utils/handleEnterKeyPress";
import GoogleTranslate from "../GoogleTranslate";
import ProductsDropdown from "./ProductsDropdown";
import HeadLine from "./HeadLine";

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searcbarRef = useRef(null);
  const navbarRef = useRef(null);
  const [brands, setbrands] = useState();

  const router = useRouter();

  const { currentUser, cart } = useContext(AuthContext);

  const [searchValue, setsearchValue] = useState("");

  const [showNavDrop, setshowNavDrop] = useState(false);
  const [showSearchbar, setshowSearchbar] = useState(false);

  useClickOutside(navbarRef, () => setshowNavDrop(false));

  useEffect(() => {
    setshowSearchbar(false);
    setshowNavDrop(false);
  }, [pathname, searchParams]);
  const [screenTop, setscreenTop] = useState(0);

  const handleScroll = () => {
    setscreenTop(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [screenWidth, setScreenWidth] = useState(0);

  const updateScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    updateScreenWidth();
    window.addEventListener("resize", updateScreenWidth);

    return () => {
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  return (
    <>
      <HeadLine />
      <div
        className={`fixed w-full z-50 duration-100 ${
          screenTop == 0 ? "" : "shadow-custom-1 bg-white"
        }`}
        style={
          screenTop == 0
            ? {
                top: "25px",
              }
            : {
                top: 0,
              }
        }
      >
        <div
          className={`flex justify-between sticky py-3 z-10 px-5 items-center whitespace-nowrap container mx-auto ${
            showSearchbar ? "" : ""
          }`}
        >
          <Image
            src={HamIcon}
            className="block lg:hidden cursor-pointer"
            onClick={() => {
              setshowNavDrop(!showNavDrop);
            }}
          />

          <Link href={"/"}>
            <Image
              src={Logo}
              className={`h-[35px] w-auto ${
                showSearchbar ? "hidden sm:block lg:hidden xl:block" : ""
              }`}
            />
          </Link>
          <div className="hidden lg:block">
            <div className="flex gap-12">
              <div className="flex gap-10 xl:gap-14">
                <Link
                  href={"/"}
                  className={`hover:text-primary duration-75 flex items-center ${
                    pathname == "/" ? "text-primary" : ""
                  }`}
                >
                  <p>Home</p>
                </Link>
                <ProductsDropdown screenWidth={screenWidth} />
                <Link
                  href={"/contact"}
                  className={`hover:text-primary duration-75 flex items-center ${
                    pathname == "/contact" ? "text-primary" : ""
                  }`}
                >
                  Contact Us
                </Link>
                <Link
                  href={"/about"}
                  className={`hover:text-primary duration-75 flex items-center ${
                    pathname == "/about" ? "text-primary" : ""
                  }`}
                >
                  About Us
                </Link>
                <div className="flex gap-3 items-center hover:text-primary duration-75 group cursor-pointer nav-lang-wrapper relative">
                  {screenWidth >= 992 && <GoogleTranslate />}
                </div>
              </div>
              <div className={`flex gap-8 ${showSearchbar ? "mt-1" : ""}`}>
                <div
                  ref={searcbarRef}
                  className={`relative ${showSearchbar ? "top-[-5px]" : ""}`}
                  onClick={() => {
                    setshowSearchbar(true);
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`cursor-pointer stroke-black hover:stroke-primary mt-1 ${
                      showSearchbar ? "absolute top-1 left-1" : ""
                    } `}
                  >
                    <path
                      d="M19 19L14.657 14.657M14.657 14.657C15.3998 13.9141 15.9891 13.0321 16.3912 12.0615C16.7932 11.0909 17.0002 10.0506 17.0002 8.99996C17.0002 7.94936 16.7932 6.90905 16.3912 5.93842C15.9891 4.96779 15.3998 4.08585 14.657 3.34296C13.9141 2.60007 13.0321 2.01078 12.0615 1.60874C11.0909 1.20669 10.0506 0.999756 8.99996 0.999756C7.94936 0.999756 6.90905 1.20669 5.93842 1.60874C4.96779 2.01078 4.08585 2.60007 3.34296 3.34296C1.84263 4.84329 0.999756 6.87818 0.999756 8.99996C0.999756 11.1217 1.84263 13.1566 3.34296 14.657C4.84329 16.1573 6.87818 17.0002 8.99996 17.0002C11.1217 17.0002 13.1566 16.1573 14.657 14.657Z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {showSearchbar && (
                    <PrimaryInput
                      value={searchValue}
                      changeHandler={(e) => setsearchValue(e.target.value)}
                      keyDownHandler={(e) => {
                        handleEnterKeyPress(e, () => {
                          router.push(`/products?name=${searchValue}`);
                        });
                      }}
                      placeholder={"Search"}
                      className={"pl-8 h-[35px]"}
                    />
                  )}
                </div>
                <Link href={"/userProfiling"}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`mt-1 hover:fill-primary duration-75 ${
                      pathname == "/userProfiling"
                        ? "fill-primary"
                        : "fill-black"
                    }`}
                  >
                    <mask id="path-1-inside-1_37_171">
                      <path d="M19.0609 18.3345C17.5787 15.7732 15.2519 13.976 12.5481 13.2138C13.8626 12.5456 14.9138 11.4542 15.5321 10.1155C16.1504 8.77677 16.2998 7.26884 15.9563 5.83482C15.6127 4.4008 14.7962 3.12428 13.6384 2.21109C12.4806 1.2979 11.049 0.80127 9.57436 0.80127C8.09976 0.80127 6.66814 1.2979 5.51033 2.21109C4.35252 3.12428 3.53601 4.4008 3.19245 5.83482C2.8489 7.26884 2.99832 8.77677 3.61663 10.1155C4.23494 11.4542 5.2861 12.5456 6.60061 13.2138C3.89686 13.9751 1.56998 15.7723 0.0877973 18.3345C0.0470983 18.3985 0.0197704 18.4701 0.00745781 18.5449C-0.00485481 18.6198 -0.00189761 18.6964 0.0161512 18.77C0.0342 18.8437 0.0669675 18.913 0.112483 18.9737C0.157998 19.0344 0.21532 19.0853 0.281 19.1232C0.34668 19.1612 0.419362 19.1855 0.494672 19.1946C0.569982 19.2038 0.646365 19.1976 0.719224 19.1764C0.792084 19.1553 0.859915 19.1197 0.918637 19.0716C0.977359 19.0236 1.02576 18.9642 1.06092 18.897C2.86186 15.7854 6.04373 13.9282 9.57436 13.9282C13.105 13.9282 16.2869 15.7854 18.0878 18.897C18.123 18.9642 18.1714 19.0236 18.2301 19.0716C18.2888 19.1197 18.3566 19.1553 18.4295 19.1764C18.5024 19.1976 18.5787 19.2038 18.654 19.1946C18.7294 19.1855 18.802 19.1612 18.8677 19.1232C18.9334 19.0853 18.9907 19.0344 19.0362 18.9737C19.0818 18.913 19.1145 18.8437 19.1326 18.77C19.1506 18.6964 19.1536 18.6198 19.1413 18.5449C19.129 18.4701 19.1016 18.3985 19.0609 18.3345ZM4.13686 7.36571C4.13686 6.29027 4.45576 5.23899 5.05324 4.34479C5.65072 3.4506 6.49995 2.75366 7.49352 2.34211C8.48709 1.93056 9.58039 1.82288 10.6352 2.03269C11.6899 2.24249 12.6588 2.76036 13.4193 3.52081C14.1797 4.28126 14.6976 5.25013 14.9074 6.3049C15.1172 7.35967 15.0095 8.45297 14.598 9.44655C14.1864 10.4401 13.4895 11.2893 12.5953 11.8868C11.7011 12.4843 10.6498 12.8032 9.57436 12.8032C8.13278 12.8015 6.75074 12.228 5.73139 11.2087C4.71203 10.1893 4.1386 8.80729 4.13686 7.36571Z" />
                    </mask>
                    <path d="M19.0609 18.3345C17.5787 15.7732 15.2519 13.976 12.5481 13.2138C13.8626 12.5456 14.9138 11.4542 15.5321 10.1155C16.1504 8.77677 16.2998 7.26884 15.9563 5.83482C15.6127 4.4008 14.7962 3.12428 13.6384 2.21109C12.4806 1.2979 11.049 0.80127 9.57436 0.80127C8.09976 0.80127 6.66814 1.2979 5.51033 2.21109C4.35252 3.12428 3.53601 4.4008 3.19245 5.83482C2.8489 7.26884 2.99832 8.77677 3.61663 10.1155C4.23494 11.4542 5.2861 12.5456 6.60061 13.2138C3.89686 13.9751 1.56998 15.7723 0.0877973 18.3345C0.0470983 18.3985 0.0197704 18.4701 0.00745781 18.5449C-0.00485481 18.6198 -0.00189761 18.6964 0.0161512 18.77C0.0342 18.8437 0.0669675 18.913 0.112483 18.9737C0.157998 19.0344 0.21532 19.0853 0.281 19.1232C0.34668 19.1612 0.419362 19.1855 0.494672 19.1946C0.569982 19.2038 0.646365 19.1976 0.719224 19.1764C0.792084 19.1553 0.859915 19.1197 0.918637 19.0716C0.977359 19.0236 1.02576 18.9642 1.06092 18.897C2.86186 15.7854 6.04373 13.9282 9.57436 13.9282C13.105 13.9282 16.2869 15.7854 18.0878 18.897C18.123 18.9642 18.1714 19.0236 18.2301 19.0716C18.2888 19.1197 18.3566 19.1553 18.4295 19.1764C18.5024 19.1976 18.5787 19.2038 18.654 19.1946C18.7294 19.1855 18.802 19.1612 18.8677 19.1232C18.9334 19.0853 18.9907 19.0344 19.0362 18.9737C19.0818 18.913 19.1145 18.8437 19.1326 18.77C19.1506 18.6964 19.1536 18.6198 19.1413 18.5449C19.129 18.4701 19.1016 18.3985 19.0609 18.3345ZM4.13686 7.36571C4.13686 6.29027 4.45576 5.23899 5.05324 4.34479C5.65072 3.4506 6.49995 2.75366 7.49352 2.34211C8.48709 1.93056 9.58039 1.82288 10.6352 2.03269C11.6899 2.24249 12.6588 2.76036 13.4193 3.52081C14.1797 4.28126 14.6976 5.25013 14.9074 6.3049C15.1172 7.35967 15.0095 8.45297 14.598 9.44655C14.1864 10.4401 13.4895 11.2893 12.5953 11.8868C11.7011 12.4843 10.6498 12.8032 9.57436 12.8032C8.13278 12.8015 6.75074 12.228 5.73139 11.2087C4.71203 10.1893 4.1386 8.80729 4.13686 7.36571Z" />
                    <path
                      d="M19.0609 18.3345L17.7626 19.0858L17.7783 19.1128L17.795 19.1392L19.0609 18.3345ZM12.5481 13.2138L11.8684 11.8767L8.44659 13.6161L12.1411 14.6576L12.5481 13.2138ZM6.60061 13.2138L7.00713 14.6577L10.7038 13.6169L7.28032 11.8767L6.60061 13.2138ZM0.0877973 18.3345L1.35367 19.1392L1.37049 19.1127L1.3862 19.0856L0.0877973 18.3345ZM1.06092 18.897L-0.237306 18.1456L-0.253354 18.1733L-0.268204 18.2017L1.06092 18.897ZM18.0878 18.897L19.4169 18.2017L19.4021 18.1733L19.386 18.1456L18.0878 18.897ZM4.13686 7.36571L2.63686 7.36571L2.63686 7.36751L4.13686 7.36571ZM9.57436 12.8032L9.57255 14.3032H9.57436V12.8032ZM20.3592 17.5831C18.6853 14.6905 16.0421 12.6403 12.9551 11.7701L12.1411 14.6576C14.4616 15.3117 16.4722 16.8559 17.7626 19.0858L20.3592 17.5831ZM13.2278 14.551C14.8428 13.7301 16.1342 12.3891 16.8939 10.7444L14.1703 9.48651C13.6933 10.5192 12.8824 11.3612 11.8684 11.8767L13.2278 14.551ZM16.8939 10.7444C17.6535 9.09974 17.8371 7.24714 17.415 5.48534L14.4975 6.18429C14.7626 7.29054 14.6473 8.4538 14.1703 9.48651L16.8939 10.7444ZM17.415 5.48534C16.9929 3.72355 15.9898 2.15526 14.5673 1.03334L12.7095 3.38885C13.6026 4.09331 14.2325 5.07805 14.4975 6.18429L17.415 5.48534ZM14.5673 1.03334C13.1449 -0.0885792 11.386 -0.69873 9.57436 -0.69873V2.30127C10.7119 2.30127 11.8163 2.68439 12.7095 3.38885L14.5673 1.03334ZM9.57436 -0.69873C7.76271 -0.69873 6.00386 -0.0885791 4.58141 1.03334L6.43925 3.38885C7.33242 2.68439 8.43681 2.30127 9.57436 2.30127V-0.69873ZM4.58141 1.03334C3.15896 2.15526 2.15582 3.72355 1.73373 5.48534L4.65118 6.18429C4.9162 5.07805 5.54608 4.09331 6.43925 3.38885L4.58141 1.03334ZM1.73373 5.48534C1.31165 7.24714 1.49523 9.09974 2.25487 10.7444L4.9784 9.48651C4.50142 8.4538 4.38615 7.29053 4.65118 6.18429L1.73373 5.48534ZM2.25487 10.7444C3.0145 12.3891 4.30592 13.7301 5.9209 14.551L7.28032 11.8767C6.26627 11.3612 5.45538 10.5192 4.9784 9.48651L2.25487 10.7444ZM6.19409 11.77C3.10663 12.6393 0.463333 14.6897 -1.2106 17.5834L1.3862 19.0856C2.67664 16.8548 4.68709 15.3109 7.00713 14.6577L6.19409 11.77ZM-1.17808 17.5297C-1.32731 17.7645 -1.42751 18.027 -1.47265 18.3015L1.48757 18.7884C1.46705 18.9131 1.4215 19.0325 1.35367 19.1392L-1.17808 17.5297ZM-1.47265 18.3015C-1.5178 18.576 -1.50696 18.8567 -1.44078 19.1269L1.47308 18.4132C1.50316 18.536 1.50809 18.6636 1.48757 18.7884L-1.47265 18.3015ZM-1.44078 19.1269C-1.3746 19.3971 -1.25445 19.6511 -1.08756 19.8736L1.31253 18.0738C1.38839 18.1749 1.443 18.2904 1.47308 18.4132L-1.44078 19.1269ZM-1.08756 19.8736C-0.920677 20.0962 -0.710498 20.2827 -0.469666 20.4219L1.03167 17.8246C1.14114 17.8878 1.23667 17.9726 1.31253 18.0738L-1.08756 19.8736ZM-0.469666 20.4219C-0.228843 20.5611 0.0376551 20.6501 0.313798 20.6837L0.675546 17.7056C0.801069 17.7208 0.922204 17.7613 1.03167 17.8246L-0.469666 20.4219ZM0.313798 20.6837C0.589941 20.7172 0.870009 20.6946 1.13716 20.6171L0.301293 17.7358C0.42272 17.7006 0.550024 17.6903 0.675546 17.7056L0.313798 20.6837ZM1.13716 20.6171C1.40431 20.5395 1.65303 20.4088 1.86833 20.2327L-0.0310611 17.9106C0.0668047 17.8305 0.179855 17.7711 0.301293 17.7358L1.13716 20.6171ZM1.86833 20.2327C2.08365 20.0566 2.26111 19.8387 2.39005 19.5922L-0.268204 18.2017C-0.209596 18.0896 -0.12893 17.9906 -0.0310611 17.9106L1.86833 20.2327ZM2.35915 19.6484C3.89803 16.9896 6.59112 15.4282 9.57436 15.4282V12.4282C5.49635 12.4282 1.82569 14.5812 -0.237306 18.1456L2.35915 19.6484ZM9.57436 15.4282C12.5576 15.4282 15.2507 16.9896 16.7896 19.6484L19.386 18.1456C17.323 14.5812 13.6524 12.4282 9.57436 12.4282V15.4282ZM16.7587 19.5922C16.8876 19.8387 17.0651 20.0566 17.2804 20.2327L19.1798 17.9106C19.2776 17.9906 19.3583 18.0896 19.4169 18.2017L16.7587 19.5922ZM17.2804 20.2327C17.4957 20.4088 17.7444 20.5395 18.0116 20.6171L18.8474 17.7358C18.9689 17.7711 19.0819 17.8305 19.1798 17.9106L17.2804 20.2327ZM18.0116 20.6171C18.2787 20.6946 18.5588 20.7172 18.8349 20.6837L18.4732 17.7056C18.5987 17.6903 18.726 17.7006 18.8474 17.7358L18.0116 20.6171ZM18.8349 20.6837C19.1111 20.6501 19.3776 20.5611 19.6184 20.4219L18.1171 17.8246C18.2265 17.7613 18.3476 17.7208 18.4732 17.7056L18.8349 20.6837ZM19.6184 20.4219C19.8592 20.2827 20.0694 20.0962 20.2363 19.8736L17.8362 18.0738C17.9121 17.9726 18.0076 17.8878 18.1171 17.8246L19.6184 20.4219ZM20.2363 19.8736C20.4032 19.6511 20.5233 19.3971 20.5895 19.1269L17.6756 18.4132C17.7057 18.2904 17.7603 18.1749 17.8362 18.0738L20.2363 19.8736ZM20.5895 19.1269C20.6557 18.8567 20.6665 18.576 20.6214 18.3015L17.6611 18.7884C17.6406 18.6636 17.6456 18.536 17.6756 18.4132L20.5895 19.1269ZM20.6214 18.3015C20.5762 18.027 20.476 17.7645 20.3268 17.5297L17.795 19.1392C17.7272 19.0325 17.6817 18.9131 17.6611 18.7884L20.6214 18.3015ZM5.63686 7.36571C5.63686 6.58694 5.86779 5.82567 6.30045 5.17815L3.80604 3.51144C3.04374 4.6523 2.63686 5.9936 2.63686 7.36571L5.63686 7.36571ZM6.30045 5.17815C6.73311 4.53063 7.34806 4.02595 8.06754 3.72793L6.91949 0.956292C5.65183 1.48137 4.56834 2.37057 3.80604 3.51144L6.30045 5.17815ZM8.06754 3.72793C8.78703 3.42991 9.57873 3.35193 10.3425 3.50386L10.9278 0.561508C9.58206 0.293823 8.18716 0.431209 6.91949 0.956292L8.06754 3.72793ZM10.3425 3.50386C11.1063 3.65579 11.8079 4.0308 12.3586 4.58147L14.4799 2.46015C13.5097 1.48993 12.2735 0.829193 10.9278 0.561508L10.3425 3.50386ZM12.3586 4.58147C12.9093 5.13214 13.2843 5.83374 13.4362 6.59754L16.3786 6.01227C16.1109 4.66652 15.4501 3.43038 14.4799 2.46015L12.3586 4.58147ZM13.4362 6.59754C13.5881 7.36134 13.5102 8.15304 13.2121 8.87252L15.9838 10.0206C16.5089 8.75291 16.6462 7.35801 16.3786 6.01227L13.4362 6.59754ZM13.2121 8.87252C12.9141 9.59201 12.4094 10.207 11.7619 10.6396L13.4286 13.134C14.5695 12.3717 15.4587 11.2882 15.9838 10.0206L13.2121 8.87252ZM11.7619 10.6396C11.1144 11.0723 10.3531 11.3032 9.57436 11.3032V14.3032C10.9465 14.3032 12.2878 13.8963 13.4286 13.134L11.7619 10.6396ZM9.57617 11.3032C8.53178 11.3019 7.53054 10.8865 6.79205 10.148L4.67073 12.2693C5.97094 13.5696 7.73377 14.301 9.57255 14.3032L9.57617 11.3032ZM6.79205 10.148C6.05355 9.40953 5.63812 8.40828 5.63686 7.3639L2.63686 7.36751C2.63908 9.20629 3.37051 10.9691 4.67073 12.2693L6.79205 10.148Z"
                      mask="url(#path-1-inside-1_37_171)"
                    />
                  </svg>
                </Link>
                <Link href={"/wishlist"}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`mt-2 hover:fill-primary duration-75 ${
                      pathname == "/wishlist" ? "fill-primary" : "fill-black"
                    }`}
                  >
                    <path d="M12.8049 0.501709C11.1917 0.501709 9.77915 1.19546 8.89868 2.36812C8.01821 1.19546 6.60571 0.501709 4.99243 0.501709C3.70823 0.503156 2.47705 1.01394 1.56898 1.92201C0.660916 2.83008 0.150129 4.06126 0.148682 5.34546C0.148682 10.8142 8.25728 15.2408 8.60259 15.4236C8.6936 15.4725 8.79533 15.4982 8.89868 15.4982C9.00203 15.4982 9.10376 15.4725 9.19477 15.4236C9.54009 15.2408 17.6487 10.8142 17.6487 5.34546C17.6472 4.06126 17.1364 2.83008 16.2284 1.92201C15.3203 1.01394 14.0891 0.503156 12.8049 0.501709ZM8.89868 14.158C7.47212 13.3267 1.39868 9.53999 1.39868 5.34546C1.39992 4.39272 1.77895 3.47935 2.45264 2.80566C3.12633 2.13197 4.03969 1.75295 4.99243 1.75171C6.51196 1.75171 7.78774 2.56108 8.32056 3.86108C8.36764 3.97572 8.44775 4.07376 8.55069 4.14276C8.65363 4.21176 8.77476 4.24861 8.89868 4.24861C9.02261 4.24861 9.14374 4.21176 9.24668 4.14276C9.34962 4.07376 9.42972 3.97572 9.47681 3.86108C10.0096 2.55874 11.2854 1.75171 12.8049 1.75171C13.7577 1.75295 14.671 2.13197 15.3447 2.80566C16.0184 3.47935 16.3974 4.39272 16.3987 5.34546C16.3987 9.53374 10.3237 13.3259 8.89868 14.158Z" />
                  </svg>
                </Link>
                <Link href={"/cart"} className="relative">
                  {cart.items.length > 0 && (
                    <p className="bg-primary text-white absolute left-4 top-3 w-[18px] h-[18px] rounded-full flex justify-center items-center text-xs">
                      {cart.items.length}
                    </p>
                  )}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    // className="fill-black hover:fill-primary duration-75 cursor-pointer mt-1"
                    className={`mt-1 hover:fill-primary duration-75 ${
                      pathname == "/cart" ? "fill-primary" : "fill-black"
                    }`}
                  >
                    <path d="M15.6487 15C16.1791 15 16.6878 15.2107 17.0629 15.5858C17.438 15.9609 17.6487 16.4696 17.6487 17C17.6487 17.5304 17.438 18.0391 17.0629 18.4142C16.6878 18.7893 16.1791 19 15.6487 19C15.1182 19 14.6095 18.7893 14.2345 18.4142C13.8594 18.0391 13.6487 17.5304 13.6487 17C13.6487 16.4696 13.8594 15.9609 14.2345 15.5858C14.6095 15.2107 15.1182 15 15.6487 15ZM15.6487 16C15.3835 16 15.1291 16.1054 14.9416 16.2929C14.754 16.4804 14.6487 16.7348 14.6487 17C14.6487 17.2652 14.754 17.5196 14.9416 17.7071C15.1291 17.8946 15.3835 18 15.6487 18C15.9139 18 16.1683 17.8946 16.3558 17.7071C16.5433 17.5196 16.6487 17.2652 16.6487 17C16.6487 16.7348 16.5433 16.4804 16.3558 16.2929C16.1683 16.1054 15.9139 16 15.6487 16ZM6.64868 15C7.17911 15 7.68782 15.2107 8.06289 15.5858C8.43797 15.9609 8.64868 16.4696 8.64868 17C8.64868 17.5304 8.43797 18.0391 8.06289 18.4142C7.68782 18.7893 7.17911 19 6.64868 19C6.11825 19 5.60954 18.7893 5.23447 18.4142C4.8594 18.0391 4.64868 17.5304 4.64868 17C4.64868 16.4696 4.8594 15.9609 5.23447 15.5858C5.60954 15.2107 6.11825 15 6.64868 15ZM6.64868 16C6.38347 16 6.12911 16.1054 5.94158 16.2929C5.75404 16.4804 5.64868 16.7348 5.64868 17C5.64868 17.2652 5.75404 17.5196 5.94158 17.7071C6.12911 17.8946 6.38347 18 6.64868 18C6.9139 18 7.16825 17.8946 7.35579 17.7071C7.54332 17.5196 7.64868 17.2652 7.64868 17C7.64868 16.7348 7.54332 16.4804 7.35579 16.2929C7.16825 16.1054 6.9139 16 6.64868 16ZM17.6487 3H3.91868L6.46868 9H14.6487C14.9787 9 15.2687 8.84 15.4487 8.6L18.4487 4.6C18.5787 4.43 18.6487 4.22 18.6487 4C18.6487 3.73478 18.5433 3.48043 18.3558 3.29289C18.1683 3.10536 17.9139 3 17.6487 3ZM14.6487 10H6.51868L5.74868 11.56L5.64868 12C5.64868 12.2652 5.75404 12.5196 5.94158 12.7071C6.12911 12.8946 6.38347 13 6.64868 13H17.6487V14H6.64868C6.11825 14 5.60954 13.7893 5.23447 13.4142C4.8594 13.0391 4.64868 12.5304 4.64868 12C4.64838 11.6607 4.73442 11.3269 4.89868 11.03L5.61868 9.56L1.98868 1H0.648682V0H2.64868L3.49868 2H17.6487C18.1791 2 18.6878 2.21071 19.0629 2.58579C19.438 2.96086 19.6487 3.46957 19.6487 4C19.6487 4.5 19.4787 4.92 19.1987 5.26L16.2887 9.15C15.9287 9.66 15.3287 10 14.6487 10Z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div
            className={`flex lg:hidden gap-3 ${showSearchbar ? "mt-1" : ""}`}
          >
            <div
              ref={searcbarRef}
              className={`relative ${showSearchbar ? "top-[-5px]" : ""}`}
              onClick={() => {
                setshowSearchbar(true);
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`cursor-pointer stroke-black hover:stroke-primary mt-1 ${
                  showSearchbar ? "absolute top-1 left-1" : ""
                } `}
              >
                <path
                  d="M19 19L14.657 14.657M14.657 14.657C15.3998 13.9141 15.9891 13.0321 16.3912 12.0615C16.7932 11.0909 17.0002 10.0506 17.0002 8.99996C17.0002 7.94936 16.7932 6.90905 16.3912 5.93842C15.9891 4.96779 15.3998 4.08585 14.657 3.34296C13.9141 2.60007 13.0321 2.01078 12.0615 1.60874C11.0909 1.20669 10.0506 0.999756 8.99996 0.999756C7.94936 0.999756 6.90905 1.20669 5.93842 1.60874C4.96779 2.01078 4.08585 2.60007 3.34296 3.34296C1.84263 4.84329 0.999756 6.87818 0.999756 8.99996C0.999756 11.1217 1.84263 13.1566 3.34296 14.657C4.84329 16.1573 6.87818 17.0002 8.99996 17.0002C11.1217 17.0002 13.1566 16.1573 14.657 14.657Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              {showSearchbar && (
                <PrimaryInput
                  value={searchValue}
                  changeHandler={(e) => setsearchValue(e.target.value)}
                  keyDownHandler={(e) => {
                    handleEnterKeyPress(e, () => {
                      router.push(`/products?name=${searchValue}`);
                    });
                  }}
                  placeholder={"Search"}
                  className={"pl-8 h-[35px]"}
                />
              )}
            </div>
            <Link href={"/cart"}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                // className="fill-black hover:fill-primary duration-75 cursor-pointer mt-1"
                className={`mt-1 hover:fill-primary duration-75 ${
                  pathname == "/cart" ? "fill-primary" : "fill-black"
                }`}
              >
                <path d="M15.6487 15C16.1791 15 16.6878 15.2107 17.0629 15.5858C17.438 15.9609 17.6487 16.4696 17.6487 17C17.6487 17.5304 17.438 18.0391 17.0629 18.4142C16.6878 18.7893 16.1791 19 15.6487 19C15.1182 19 14.6095 18.7893 14.2345 18.4142C13.8594 18.0391 13.6487 17.5304 13.6487 17C13.6487 16.4696 13.8594 15.9609 14.2345 15.5858C14.6095 15.2107 15.1182 15 15.6487 15ZM15.6487 16C15.3835 16 15.1291 16.1054 14.9416 16.2929C14.754 16.4804 14.6487 16.7348 14.6487 17C14.6487 17.2652 14.754 17.5196 14.9416 17.7071C15.1291 17.8946 15.3835 18 15.6487 18C15.9139 18 16.1683 17.8946 16.3558 17.7071C16.5433 17.5196 16.6487 17.2652 16.6487 17C16.6487 16.7348 16.5433 16.4804 16.3558 16.2929C16.1683 16.1054 15.9139 16 15.6487 16ZM6.64868 15C7.17911 15 7.68782 15.2107 8.06289 15.5858C8.43797 15.9609 8.64868 16.4696 8.64868 17C8.64868 17.5304 8.43797 18.0391 8.06289 18.4142C7.68782 18.7893 7.17911 19 6.64868 19C6.11825 19 5.60954 18.7893 5.23447 18.4142C4.8594 18.0391 4.64868 17.5304 4.64868 17C4.64868 16.4696 4.8594 15.9609 5.23447 15.5858C5.60954 15.2107 6.11825 15 6.64868 15ZM6.64868 16C6.38347 16 6.12911 16.1054 5.94158 16.2929C5.75404 16.4804 5.64868 16.7348 5.64868 17C5.64868 17.2652 5.75404 17.5196 5.94158 17.7071C6.12911 17.8946 6.38347 18 6.64868 18C6.9139 18 7.16825 17.8946 7.35579 17.7071C7.54332 17.5196 7.64868 17.2652 7.64868 17C7.64868 16.7348 7.54332 16.4804 7.35579 16.2929C7.16825 16.1054 6.9139 16 6.64868 16ZM17.6487 3H3.91868L6.46868 9H14.6487C14.9787 9 15.2687 8.84 15.4487 8.6L18.4487 4.6C18.5787 4.43 18.6487 4.22 18.6487 4C18.6487 3.73478 18.5433 3.48043 18.3558 3.29289C18.1683 3.10536 17.9139 3 17.6487 3ZM14.6487 10H6.51868L5.74868 11.56L5.64868 12C5.64868 12.2652 5.75404 12.5196 5.94158 12.7071C6.12911 12.8946 6.38347 13 6.64868 13H17.6487V14H6.64868C6.11825 14 5.60954 13.7893 5.23447 13.4142C4.8594 13.0391 4.64868 12.5304 4.64868 12C4.64838 11.6607 4.73442 11.3269 4.89868 11.03L5.61868 9.56L1.98868 1H0.648682V0H2.64868L3.49868 2H17.6487C18.1791 2 18.6878 2.21071 19.0629 2.58579C19.438 2.96086 19.6487 3.46957 19.6487 4C19.6487 4.5 19.4787 4.92 19.1987 5.26L16.2887 9.15C15.9287 9.66 15.3287 10 14.6487 10Z" />
              </svg>
            </Link>
          </div>
          {showNavDrop && (
            <div
              className={
                "flex lg:hidden flex-col absolute w-full  max-w-screen left-0 top-14 justify-center"
              }
            >
              <div className="flex flex-col gap-12 container self-center bg-white shadow-2xl p-4 rounded-lg">
                <div className="flex flex-col gap-5">
                  <Link
                    href={"/"}
                    className={`hover:text-primary duration-75 ${
                      pathname == "/" ? "text-primary" : ""
                    }`}
                  >
                    <p>Home</p>
                  </Link>
                  <ProductsDropdown screenWidth={screenWidth} />
                  {/* <Link
                    href={"/products"}
                    className={`relative hover:text-primary duration-75 flex items-center ${
                      pathname == "/products" ? "text-primary" : ""
                    }`}
                  >
                    <Dropdown
                      handleClick={() => router.push("/products")}
                      options={productOptions}
                      show={showProductsDropdown}
                      setshow={setshowProductsDropdown}
                      setactive={() => {}}
                    />

                    <div
                      className="flex gap-2 items-center"
                      onClick={() => setshowProductsDropdown(true)}
                    >
                      <div className="flex items-center gap-2">
                        <p>Products</p>
                        <svg
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.83817 6.66733C5.72849 6.66796 5.61977 6.64694 5.51824 6.60547C5.41671 6.564 5.32437 6.5029 5.2465 6.42566L0.246499 1.42566C0.168392 1.34819 0.106397 1.25602 0.0640893 1.15447C0.0217821 1.05293 0 0.944004 0 0.833994C0 0.723984 0.0217821 0.615062 0.0640893 0.513513C0.106397 0.411964 0.168392 0.319796 0.246499 0.242327C0.402634 0.0871179 0.613844 0 0.833999 0C1.05415 0 1.26536 0.0871179 1.4215 0.242327L5.83817 4.65899L10.2465 0.242327C10.4026 0.0871179 10.6138 0 10.834 0C11.0542 0 11.2654 0.0871179 11.4215 0.242327C11.4996 0.319796 11.5616 0.411964 11.6039 0.513513C11.6462 0.615062 11.668 0.723984 11.668 0.833994C11.668 0.944004 11.6462 1.05293 11.6039 1.15447C11.5616 1.25602 11.4996 1.34819 11.4215 1.42566L6.4215 6.42566C6.26628 6.57962 6.05678 6.66641 5.83817 6.66733Z"
                            className={`group-hover:fill-primary ${
                              pathname == "/products"
                                ? "fill-primary"
                                : "fill-black"
                            } duration-75`}
                          />
                        </svg>
                      </div>
                    </div>
                  </Link> */}
                  <Link
                    href={"/contact"}
                    className={`hover:text-primary duration-75 ${
                      pathname == "/contact" ? "text-primary" : ""
                    }`}
                  >
                    Contact Us
                  </Link>
                  <Link
                    href={"/"}
                    className={`hover:text-primary duration-75 ${
                      pathname == "/about" ? "text-primary" : ""
                    }`}
                  >
                    About Us
                  </Link>
                  <div className="flex gap-3 items-center hover:text-primary duration-75 group cursor-pointer nav-lang-wrapper relative">
                    {screenWidth < 992 && <GoogleTranslate />}
                  </div>
                  <Link
                    href={"/userProfiling"}
                    className={`hover:text-primary duration-75 ${
                      pathname == "/userProfiling" ? "text-primary" : ""
                    }`}
                  >
                    <p>Profile</p>
                  </Link>
                  <Link
                    href={"/wishlist"}
                    className={`hover:text-primary duration-75 ${
                      pathname == "/wishlist" ? "text-primary" : ""
                    }`}
                  >
                    <p>Wishlist</p>
                  </Link>
                  <Link
                    href={"/cart"}
                    className={`hover:text-primary duration-75 ${
                      pathname == "/cart" ? "text-primary" : ""
                    }`}
                  >
                    <p>Cart</p>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
