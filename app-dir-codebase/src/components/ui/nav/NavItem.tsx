import React from 'react'
import Link from 'next/link'
export interface INavItem {
    href: string
    text: string
}
function NavItem({ href, text }: INavItem) {
    return (
        <li className="nav-item">
            <Link href="/admin/menu"> menu 1</Link>
        </li>
    )
}

export default NavItem
