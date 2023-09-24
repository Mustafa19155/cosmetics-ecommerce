import React, { useState } from "react";
import PinkButton from "@/components/buttons/PinkButton";
import Link from "next/link";
import CategoryModal from "@/components/Modals/CategoryModal";

const ProductTop = ({ showProducts, setshowProducts }) => {
  const [categoryModalOpen, setcategoryModalOpen] = useState(false);

  return (
    <>
      <CategoryModal
        open={categoryModalOpen}
        onclose={() => setcategoryModalOpen(false)}
        onconfirm={() => {}}
      />
      <div className="flex flex-col gap-5 lg:gap-0 lg:flex-row justify-between lg:items-center">
        <div className="bg-white flex gap-2 shadow-admin-navbar p-2 rounded-lg flex-wrap sm:flex-nowrap">
          <PinkButton
            text={"Products"}
            className={`px-16 w-[48.5%] ${
              !showProducts
                ? "!bg-gray-1 !text-primary hover:!shadow-trans-btn"
                : ""
            }`}
            clickHandler={() => setshowProducts(true)}
          />
          <PinkButton
            text={"Category"}
            className={`px-16 w-[48.5%] ${
              showProducts
                ? "!bg-gray-1 !text-primary hover:!shadow-trans-btn"
                : ""
            }`}
            clickHandler={() => setshowProducts(false)}
          />
        </div>
        <div className="self-end">
          {showProducts ? (
            <Link href={"product/add"}>
              <PinkButton text={"ADD PRODUCT"} className={"px-16 !w-fit"} />
            </Link>
          ) : (
            <PinkButton
              text={"ADD CATEGORY"}
              className={"px-16 !w-fit"}
              clickHandler={() => setcategoryModalOpen(true)}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductTop;
