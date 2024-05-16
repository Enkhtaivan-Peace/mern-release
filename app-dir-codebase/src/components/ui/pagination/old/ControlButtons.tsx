import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PaginationBtn } from "./Paginate";

interface IControlButtons {
  currentPage: number;
  pageCount?: number;
  handlePrev?: () => void;
  handleNext?: () => void;
  onClick?: () => void;
  isPlaceholderData?: boolean;
}

export function PrevBtn(props: IControlButtons) {
  const { currentPage, handlePrev } = props;
  return (
    <button
      disabled={currentPage === 1}
      onClick={handlePrev}
      className={currentPage === 1 ? "text-emerald-500 cursor-not-allowed" : ""}
    >
      <FaAngleLeft />
    </button>
  );
}

export function NextBtn(props: IControlButtons) {
  const { currentPage, pageCount, handleNext } = props;
  return (
    <button
      disabled={currentPage === pageCount}
      onClick={handleNext}
      className={
        currentPage === pageCount ? "text-emerald-500 cursor-not-allowed" : ""
      }
    >
      <FaAngleRight />
    </button>
  );
}

export function FirstBtn(props: IControlButtons) {
  const { currentPage, onClick } = props;
  return (
    <PaginationBtn
      onClick={onClick}
      className={currentPage === 1 ? "bg-emerald-700" : ""}
    >
      <span className="text-12 text-white">1</span>
    </PaginationBtn>
  );
}

export function LastBtn(props: IControlButtons) {
  const { currentPage, pageCount, onClick } = props;
  return (
    <PaginationBtn
      onClick={onClick}
      className={currentPage === pageCount ? "bg-emerald-700" : ""}
    >
      <span className="text-12 text-white">{pageCount}</span>
    </PaginationBtn>
  );
}
