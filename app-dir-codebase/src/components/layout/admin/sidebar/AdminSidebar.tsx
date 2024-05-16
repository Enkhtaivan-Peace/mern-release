'use client'
import React, { useRef } from 'react'
import SidebarItem from './AdminSidebarItem'
import tw from 'tailwind-styled-components'
import { motion } from 'framer-motion'
import useElementPosition from '@/common/window/useElementPosition'
import { adminMenu } from '@/common/constants'
import { useWindowSize } from 'usehooks-ts'
export interface IMenu {
    column?: boolean
    items: IMenuItem[]
}
export interface IMenuItem {
    text: string
    href: string
}
const sidebarVariants = {
    hidden: {
        opacity: 0,
        x: '-100vw',
    },
    visible: {
        opacity: 1,
        x: 0,
    },
    exit: {
        width: 0,
        x: '-200vw',
        transition: { ease: 'easeInOut' },
    },
}
function AdminSidebar(): JSX.Element {
    const ref = useRef(null)
    useElementPosition(ref, { globalName: 'adminSidebar', isAdminSide: true })
    const windowSize = useWindowSize()

    return (
        <SidebarTw
            ref={ref}
            variants={sidebarVariants}
            initial="hidden"
            animate={windowSize.width < 1024 ? 'exit' : 'visible'}
            exit="exit"
        >
            <SidebarNavTw className="floating-scrollbar">
                {Object.values(adminMenu).map((item, idx) => (
                    <SidebarItem key={'sidebar-' + idx} {...item} />
                ))}
            </SidebarNavTw>
        </SidebarTw>
    )
}
interface ISidebarTwProps extends React.HTMLProps<HTMLElement> {
    isshowscroll?: boolean | string
    adminmainheight?: number
}
const SidebarTw = tw(motion.aside)<ISidebarTwProps>`
 fixed
 left-0
 w-[200px]
 h-screen
 border-r
 z-100
 bg-white
 border-r
 border-gray-300
`

const SidebarNavTw = tw.nav`
  flex
  flex-col
  gap-1
  p-20
  pb-20
  h-full
  overflow-x-hidden
`

export default AdminSidebar
