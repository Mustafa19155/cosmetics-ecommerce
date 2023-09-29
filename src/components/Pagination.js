import React from "react";
import Arrow from "@/assets/icons/arrow-pink.svg";
import Image from "next/image";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
  textSize,
}) {
  const handlePageChange = (pageNumber) => {
    setCurrentPage({ page: pageNumber });
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const visiblePages = 7;

    let startPage = Math.max(currentPage - Math.floor(visiblePages / 2), 1);
    let endPage = Math.min(startPage + visiblePages - 1, totalPages);

    if (endPage - startPage < visiblePages - 1) {
      startPage = Math.max(endPage - visiblePages + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };
  return (
    <nav>
      <ul className="justify-center flex items-center">
        <li className={`mx-3`}>
          <button
            className={`link-btn relative ${
              textSize
                ? `h-[${textSize}px] w-[${textSize}px] flex justify-center items-center`
                : "h-[30px] w-[30px]"
            } flex items-center gap-1 bg-[#F3F2F7] p-1 rounded-full ${
              currentPage === 1 ? "disabled" : "text-black fw-bold"
            }`}
            disabled={currentPage == 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            <Image src={Arrow} className="rotate-[180deg]" />
          </button>
        </li>
        <div className="flex bg-[#F3F2F7] rounded-full">
          {generatePageNumbers().map((pageNumber) => (
            <li
              key={pageNumber}
              className={`duration-200 ${
                textSize
                  ? `h-[${textSize}px] w-[${textSize}px] flex justify-center items-center`
                  : "py-2 px-4"
              } ${
                currentPage === pageNumber
                  ? " bg-primary rounded-full text-white"
                  : ""
              } `}
              onClick={() => handlePageChange(pageNumber)}
            >
              <button
                className={`page-link border-0 ${
                  currentPage === pageNumber ? "rounded fw-bold" : "text-dark"
                }`}
              >
                {pageNumber}
              </button>
            </li>
          ))}
        </div>

        <li className={`mx-3`}>
          <button
            className={`link-btn relative ${
              textSize
                ? `h-[${textSize}px] w-[${textSize}px] flex justify-center items-center`
                : "h-[30px] w-[30px]"
            } flex items-center gap-1 bg-[#F3F2F7] p-1 rounded-full ${
              currentPage === 1 ? "disabled" : "text-black fw-bold"
            }`}
            disabled={currentPage == totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            <Image src={Arrow} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
