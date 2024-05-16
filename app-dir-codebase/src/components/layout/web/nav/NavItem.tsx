"use client";
import React from "react";
import { TNav } from "./Nav";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavItem(props: TNav) {
  const { id, href, text } = props;
  const pathname = usePathname();

  const isActive: boolean = pathname === href;
  return (
    <li>
      <Link href={href} className={isActive ? "active" : ""}>
        {text}
      </Link>
    </li>
  );
}

export default NavItem;
