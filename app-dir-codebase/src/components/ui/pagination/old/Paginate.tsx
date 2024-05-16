'use client'
import React from 'react'
import tw from 'tailwind-styled-components'
import { FaAngleLeft, FaAngleRight, FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import usePaginate from './usePaginate';

function Paginate(props:TPaginate) {
    const { 
        total, 
        pageCount, 
        start, 
        end, 
        limit, 
        nextPage, 
        prevPage  
    } = props

    const { 
         currentPage, 
         handleNext, 
         handlePrev,
         createPageURL,
         pageNumbers
    } = usePaginate(props)

    const renderPaginationButtons = () => {
        console.log('pageNumbersaaaa', pageNumbers)
        const firstElementSliced = pageNumbers
        return firstElementSliced.map((pageNumber, idx) =>     
            <li key={'pagination-button' + idx}>
                <PaginationBtn 
                    onClick={() => createPageURL(idx + 1 )} 
                    className={ currentPage === (idx + 1) ? 'bg-emerald-700' : '' }
                >
                    <span className='text-12 text-white'>{ idx + 1 }</span>
                </PaginationBtn>
            </li> 
        ).slice(currentPage-4 < 0 ? 0 : currentPage-4,currentPage+1 < 5 ? 5 : currentPage+1)
      };

  return (
    <PaginationContainer>
        <p className="text-emerald-700 font-bold">
            Showing {(currentPage - 1) * limit + 1}-{Math.min(currentPage * limit, total)} of{' '}
            {total}
        </p>
        <PaginationTw>
            <li>
                <button 
                    disabled={currentPage === 1} 
                    onClick={ () => createPageURL(1) }   
                    className={currentPage === 1 ? 'text-emerald-500 cursor-not-allowed' : ''}
                >
                    <FaAnglesLeft />
                </button>
            </li>
            <li>
                <button 
                    disabled={currentPage === 1} 
                    onClick={handlePrev}   
                    className={currentPage === 1 ? 'text-emerald-500 cursor-not-allowed' : ''}
                >
                    <FaAngleLeft />
                </button>
            </li>
            {
                currentPage > 4 &&
                <li>
                     ...   
                </li>
            }
            {
                renderPaginationButtons()
            }
            {
                currentPage < pageNumbers.length - 2 && (
                    <div className='flex items-end font-bold text-emerald-700'>...</div>
                )
            }
            <li aria-disabled={currentPage === pageCount}>
                <button 
                    disabled={currentPage === pageCount} 
                    onClick={handleNext}   
                    className={currentPage === pageCount ? 'text-emerald-500 cursor-not-allowed' : ''}
                >
                    <FaAngleRight />
                </button>
            </li>
            <li>
                <button 
                    disabled={currentPage === pageCount} 
                    onClick={ () => createPageURL(pageCount) }   
                    className={currentPage === pageCount ? 'text-emerald-500 cursor-not-allowed' : ''}
                >
                    <FaAnglesRight />
                </button>
            </li>
        </PaginationTw>
    </PaginationContainer>
  )
}

export const PaginationContainer = tw.div`
    w-full
    flex
    justify-between
    items-center
    my-10
`

export const PaginationTw = tw.ul`
    flex
    items-center
    gap-10
`

export const PaginationBtn = tw.button`
    flex
    justify-center
    items-center
    min-w-30
    min-h-30
    rounded
    bg-emerald-500
    hover:bg-emerald-700
`

export default Paginate