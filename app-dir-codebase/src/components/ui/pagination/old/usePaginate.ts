"use client";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function usePaginate(props: TPaginate) {
  const { total, pageCount, start, end, limit, nextPage, prevPage } = props;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const pageNumbers: Array<number> = [];
  // const pageNumbers = Array(pageCount).fill(intialPage)
  for (let i = 0; i < pageCount; i++) {
    pageNumbers.push(i);
  }

  function createPageURL(pageNumber: number | string) {
    // debugger;
    if (currentPage === pageNumber) return;
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    const url = `${pathname}?${params.toString()}`;
    router.push(url);
  }

  function handleNext() {
    if (nextPage === 0) return;
    createPageURL(nextPage);
  }

  function handlePrev() {
    if (prevPage === pageCount) return;
    createPageURL(prevPage);
  }

  return {
    router,
    pathname,
    searchParams,
    currentPage,
    pageNumbers,
    handleNext,
    handlePrev,
    createPageURL,
  };
}

export default usePaginate;
