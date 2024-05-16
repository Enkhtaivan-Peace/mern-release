'use client'
/**
 * @createdBy Phill Anderson 2022/11/15
 */
import React, { useEffect, useState, useCallback } from 'react'
import tw from 'tailwind-styled-components'
interface IHamburger {
    toggle: () => void
    isOpen: boolean
}

function Hamburger({ toggle, isOpen }: IHamburger): JSX.Element {
    const [isClicked, setIsClicked] = useState<boolean>(false)

    const handleClick = useCallback(() => {
        setIsClicked((prev) => !prev)
        toggle()
    }, [])

    useEffect(() => {
        if (!isOpen) {
            setIsClicked(false)
        }
    }, [isOpen])

    return (
        <HamburgerTw
            aria-expanded={isOpen}
            aria-controls="primary-hamburger-button"
            onClick={handleClick}
            className={isClicked ? 'open-hamburger' : ''}
        >
            <HamburgerPieceTw />
            <HamburgerPieceTw />
            <HamburgerPieceTw />
        </HamburgerTw>
    )
}

interface IHamburgerBtn extends Partial<TButton> {
    isClicked?: boolean
}

const HamburgerTw = tw.button<IHamburgerBtn>`
  flex flex-col 
  relative 
  justify-evenly 
  items-center  
  w-[30px] 
  h-[30px] 
  p-2 
  outline-none 
  overflow-hidden 
  bg-slate-500 
  z-50 
  focus:outline-none  
  lg:hidden
`

const HamburgerPieceTw = tw.div`
    relative 
    w-[14px]  h-1  
    bg-white 
    rounded 
    origin
    transition
`

export default Hamburger
