'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import tw from 'tailwind-styled-components'
interface ISidebarItem extends TMENU {}

function AdminSidebarItem(props: ISidebarItem) {
    const { text, href } = props
    const pathName = usePathname()
    const isActive = pathName === href

    return (
        <SidebarItemTw aria-current={isActive} href={href}>
            {text}
        </SidebarItemTw>
    )
}

const SidebarItemTw = tw(Link)`
    admin-sidebar-item
`

export default AdminSidebarItem
