import React, { useContext, useEffect, useRef, useState } from "react";
import Dropdown from "../Dropdowns/Dropdown";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { getAllUserBrands } from "@/api/brands";
import useClickOutside from "@/hooks/useClickOutside";
import { BrandsContext } from "@/contexts/brandsContext";

const ProductsDropdown = ({ screenWidth }) => {
  const ref = useRef(null);
  const pathname = usePathname();

  const [showProductsDropdown, setshowProductsDropdown] = useState(false);

  const { brands } = useContext(BrandsContext);

  // const [productOptions, setproductOptions] = useState([]);

  // useEffect(() => {
  //   getAllUserBrands()
  //     .then((res) => {
  //       setproductOptions(res);
  //     })
  //     .catch((err) => {});
  // }, []);

  // useClickOutside(ref, () => setshowProductsDropdown(false));

  return (
    <div
      className=" hover:text-primary duration-75 group flex items-center"
      onClick={() => {
        setshowProductsDropdown(!showProductsDropdown);
      }}
      onMouseLeave={() => {
        screenWidth > 992 && setshowProductsDropdown(false);
      }}
      onMouseEnter={() => {
        screenWidth > 992 && setshowProductsDropdown(true);
      }}
    >
      <div
        ref={ref}
        className={`product-drop cursor-pointer absolute bg-white shadow-dropdown-shadow p-2 rounded-lg top-24 lg:top-[39px] w-full z-20 left-0  min-h-fit max-h-[60vh] overflow-scroll flex flex-wrap ${
          showProductsDropdown ? "block" : "hidden"
        }`}
      >
        {brands.map((opt, index) => (
          <div
            className="text-secondary p-3 cursor-pointer whitespace-nowrap h-fit w-[50%] md:w-[25%] min-w-[150px]"
            onClick={() => {
              setshowProductsDropdown(false);
            }}
          >
            <Link href={`/brand/${opt.brand._id}`}>
              <p className="font-bold text-xl hover:text-primary notranslate break-all line-clamp-1">
                {opt.brand.name}
              </p>
            </Link>
            <div>
              {opt.categories.map((cat) => (
                <Link
                  href={`/products?category=${cat.name.replace(
                    "&",
                    "replaceand"
                  )}`}
                  className="hover:text-primary"
                >
                  <p className="notranslate break-all whitespace-normal notranslate line-clamp-1">
                    {cat.name}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`hover:text-primary duration-75 flex items-center ${
          pathname == "/products" ? "text-primary" : ""
        }`}
      >
        <div className="flex gap-2 items-center cursor-pointer">
          <p>Products</p>
          <svg
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`group-hover:fill-primary ${
              pathname == "/products" ? "fill-primary" : "fill-black"
            } duration-75`}
          >
            <path d="M5.83817 6.66733C5.72849 6.66796 5.61977 6.64694 5.51824 6.60547C5.41671 6.564 5.32437 6.5029 5.2465 6.42566L0.246499 1.42566C0.168392 1.34819 0.106397 1.25602 0.0640893 1.15447C0.0217821 1.05293 0 0.944004 0 0.833994C0 0.723984 0.0217821 0.615062 0.0640893 0.513513C0.106397 0.411964 0.168392 0.319796 0.246499 0.242327C0.402634 0.0871179 0.613844 0 0.833999 0C1.05415 0 1.26536 0.0871179 1.4215 0.242327L5.83817 4.65899L10.2465 0.242327C10.4026 0.0871179 10.6138 0 10.834 0C11.0542 0 11.2654 0.0871179 11.4215 0.242327C11.4996 0.319796 11.5616 0.411964 11.6039 0.513513C11.6462 0.615062 11.668 0.723984 11.668 0.833994C11.668 0.944004 11.6462 1.05293 11.6039 1.15447C11.5616 1.25602 11.4996 1.34819 11.4215 1.42566L6.4215 6.42566C6.26628 6.57962 6.05678 6.66641 5.83817 6.66733Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProductsDropdown;
