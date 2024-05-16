'use client'
import React, { createContext, useState, useContext, FC } from 'react'

interface ISiteGlobalCtx {
    siteGlobalItems: any
    setSiteGlobalItems: React.Dispatch<React.SetStateAction<any>>
    authState: any | null
    setAuthState: React.Dispatch<React.SetStateAction<any | null>>
    setTokenIntoAuthState: (token: string | null) => void
}

const SiteGlobalContext = createContext<ISiteGlobalCtx>({} as ISiteGlobalCtx)

const SiteGlobalProvider: FC<JsxChildren> = ({ children }) => {
    const [siteGlobalItems, setSiteGlobalItems] = useState<any>(null)
    const [authState, setAuthState] = useState<any | null>(null)

    function setTokenIntoAuthState(token: string | null): void {
        setAuthState((prev:any) => ({ ...prev, token }))
    }

    return (
        <SiteGlobalContext.Provider
            value={{
                siteGlobalItems,
                setSiteGlobalItems,
                authState,
                setAuthState,
                setTokenIntoAuthState,
            }}
        >
            {children}
        </SiteGlobalContext.Provider>
    )
}

const useSiteGlobalCtx = () => {
    const context = useContext(SiteGlobalContext)
    if (!context) throw new Error('useSiteGlobalCtx must be used within a SiteGlobalProvider')
    return context
}

export { SiteGlobalContext, SiteGlobalProvider, useSiteGlobalCtx }
