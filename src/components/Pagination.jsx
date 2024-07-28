import React from "react";
import { ITEM_PER_PAGE } from "../utils/constants";

const Pagination = ({
  currentPage,
  totalItems,
  onPageChange,
  isPreviousData,
}) => {
  const pageCount = Math.ceil(totalItems / ITEM_PER_PAGE);
  const handlePrevClick = () => onPageChange(currentPage - 1);
  const handleNextClick = () => onPageChange(currentPage + 1);

  return (
    <div className="flex justify-between gap-4 mt-8 mb-8">
      <button
        onClick={handlePrevClick}
        disabled={isPreviousData || currentPage === 1}
        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l ${
          isPreviousData || currentPage === 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        Previous page
      </button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Page {currentPage}
      </button>
      <button
        onClick={handleNextClick}
        disabled={isPreviousData || currentPage === pageCount}
        className={`bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r ${
          isPreviousData || currentPage === pageCount
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
