'use client'
/**
 * @createdBy Phill Anderson 2022/11/15
 */
import React, { useCallback, useRef } from 'react'
import Hamburger from '@/components/ui/button/Hamburger'
import { ThemeSwitcherBtn } from '@/common/theme/themeSwitcherBtn'
import AdminMobileMenu from '../mobileMenu/AdminMobileMenu'
import useElementPosition from '@/common/window/useElementPosition'
import { useGlobalPopupCtx } from '@/common/popup/globalPopup/useGlobalPopupCtx'
import { GLOBAL_POPUP_TYPES } from '@/common/popup/globalPopup/globalPopupRegistration'
import tw from 'tailwind-styled-components'
import Logo from '@/components/ui/button/Logo'
import { useSession } from 'next-auth/react'
import { useAdminHeaderCtx } from './useAdminHeaderCtx'

function AdminHeaderUi(): JSX.Element {
    const ref = useRef(null)
    useElementPosition(ref, { globalName: 'adminHeader', isAdminSide: true })
    const { showGlobalPopup } = useGlobalPopupCtx()
    const { isOpenMobileMenu, toggleMobileMenu } = useAdminHeaderCtx()
    const session = useSession()
    console.log('session', session)

    const handleShowPopup = useCallback(() => {
        showGlobalPopup(GLOBAL_POPUP_TYPES.ALERT, { message: 'hello' })
    }, [])

    return (
        <HeaderSc ref={ref}>
            <Logo />
            <button onClick={handleShowPopup}>show popup</button>
            <ThemeSwitcherBtn />
            <Hamburger toggle={toggleMobileMenu} isOpen={isOpenMobileMenu} />
            <AdminMobileMenu />
        </HeaderSc>
    )
}
const HeaderSc = tw.header`
    fixed
    top-0
    left-0
    flex
    items-center
    justify-between
    w-full
    h-[50px]
    px-10
    border-b
    border-gray-300
    bg-white
    z-[100]
    dark:bg-gray-900
`

export default AdminHeaderUi
