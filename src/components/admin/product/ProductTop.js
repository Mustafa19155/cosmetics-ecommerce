import React, { useState } from "react";
import PinkButton from "@/components/buttons/PinkButton";
import Link from "next/link";
import BrandModal from "@/components/Modals/BrandModal";
import { addCategory } from "@/api/categories";
import SubCategoryModal from "@/components/Modals/SubCategoryModal";
import { addBrand } from "@/api/brands";
import useAlert from "@/hooks/useAlert";

const ProductTop = ({ currentTab, setcurrentTab, brands }) => {
  const [brandModalOpen, setbrandModalOpen] = useState(false);
  const [subCategoryModalOpen, setsubCategoryModalOpen] = useState(false);

  const handleAddCategory = ({ name }) => {
    addBrand({ name })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };
  const handleAddSubCategory = ({ name, brand }) => {
    addCategory({ name, brand })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {});
  };

  return (
    <>
      <BrandModal
        open={brandModalOpen}
        onclose={() => setbrandModalOpen(false)}
        onconfirm={handleAddCategory}
      />
      <SubCategoryModal
        open={subCategoryModalOpen}
        onclose={() => setsubCategoryModalOpen(false)}
        onconfirm={handleAddSubCategory}
        brands={brands}
      />
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between lg:items-center">
        <div className="bg-white flex flex-col xl:flex-row gap-2 shadow-admin-navbar p-2 rounded-lg whitespace-nowrap">
          <PinkButton
            text={"Products"}
            className={`px-16 w-[48.5%] ${
              !(currentTab == "products")
                ? "!bg-gray-1 !text-primary hover:!shadow-trans-btn"
                : ""
            }`}
            clickHandler={() => setcurrentTab("products")}
          />
          <PinkButton
            text={"Brands"}
            className={`px-16 w-[48.5%] ${
              !(currentTab == "brands")
                ? "!bg-gray-1 !text-primary hover:!shadow-trans-btn"
                : ""
            }`}
            clickHandler={() => setcurrentTab("brands")}
          />
          <PinkButton
            text={"Categories"}
            className={`px-16 w-[48.5%] ${
              !(currentTab == "subcategories")
                ? "!bg-gray-1 !text-primary hover:!shadow-trans-btn"
                : ""
            }`}
            clickHandler={() => setcurrentTab("subcategories")}
          />
        </div>
        <div className="self-end">
          {currentTab == "products" ? (
            <Link href={"product/add"}>
              <PinkButton text={"ADD PRODUCT"} className={"px-16 !w-fit"} />
            </Link>
          ) : currentTab == "brands" ? (
            <PinkButton
              text={"ADD BRAND"}
              className={"px-16 !w-fit"}
              clickHandler={() => setbrandModalOpen(true)}
            />
          ) : (
            <PinkButton
              text={"ADD CATEGORY"}
              className={"px-16 !w-fit"}
              clickHandler={() => setsubCategoryModalOpen(true)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductTop;
