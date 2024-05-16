"use client";
import React from "react";
import usePaginate from "./usePaginate";
import { PaginationBtn, PaginationContainer, PaginationTw } from "./Paginate";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { FirstBtn, LastBtn, NextBtn, PrevBtn } from "./ControlButtons";

function PaginateComplex(
  props: TPaginate & {
    isPlaceholderData?: boolean;
  }
) {
  const {
    total,
    pageCount,
    start,
    end,
    limit,
    nextPage,
    prevPage,
    isPlaceholderData,
  } = props;

  const { currentPage, handleNext, handlePrev, createPageURL, pageNumbers } =
    usePaginate(props);
  console.log("searchParams", currentPage);

  const renderPaginationButtons = () => {
    const firstElementSliced = pageNumbers.slice(2);
    return firstElementSliced
      .map((pageNumber, idx) => (
        <li key={"pagination-button" + idx}>
          <PaginationBtn
            onClick={() => createPageURL(pageNumber)}
            className={currentPage === pageNumber ? "bg-emerald-700" : ""}
          >
            <span className="text-12 text-white">{pageNumber}</span>
          </PaginationBtn>
        </li>
      ))
      .slice(
        currentPage - 4 < 0 ? 0 : currentPage - 4,
        currentPage + 1 < 5 ? 5 : currentPage + 1
      );
  };

  return (
    <PaginationContainer>
      <p className="text-emerald-700 font-bold">
        Showing {(currentPage - 1) * limit + 1}-
        {Math.min(currentPage * limit, total)} of {total}
      </p>
      <PaginationTw>
        <li>
          <PrevBtn currentPage={currentPage} handlePrev={handlePrev} />
        </li>
        {pageCount > 1 && (
          <li>
            <FirstBtn
              currentPage={currentPage}
              onClick={() => createPageURL(1)}
            />
          </li>
        )}
        {currentPage > 4 && <li>...</li>}
        {renderPaginationButtons()}
        {currentPage < pageNumbers.length - 1 && (
          <div className="flex items-end font-bold text-emerald-700">...</div>
        )}
        <li>
          <LastBtn
            currentPage={currentPage}
            pageCount={pageCount}
            onClick={() => createPageURL(pageCount)}
          />
        </li>
        <li>
          <NextBtn
            currentPage={currentPage}
            pageCount={pageCount}
            handleNext={handleNext}
          />
        </li>
      </PaginationTw>
    </PaginationContainer>
  );
}

export default PaginateComplex;
