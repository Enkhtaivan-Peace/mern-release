'use client'
import React, { createContext, useState, useContext, FC, useCallback } from 'react'

interface IHeaderCtx {
    isOpenMobileMenu: boolean
    setIsOpenMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
    toggleMobileMenu: () => void
}

const HeaderContext = createContext<IHeaderCtx>({} as IHeaderCtx)

const AdminHeaderProvider: FC<JsxChildren> = ({ children }) => {
    const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false)

    const toggleMobileMenu = useCallback(() => {
        setIsOpenMobileMenu((prev) => !prev)
    }, [])
    return (
        <HeaderContext.Provider
            value={{
                isOpenMobileMenu,
                setIsOpenMobileMenu,
                toggleMobileMenu,
            }}
        >
            {children}
        </HeaderContext.Provider>
    )
}

const useAdminHeaderCtx = () => useContext(HeaderContext)

export { HeaderContext, AdminHeaderProvider, useAdminHeaderCtx }
