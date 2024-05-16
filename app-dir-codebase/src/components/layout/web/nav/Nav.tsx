"use client";
import Link from "next/link";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import "./Nav.css";
import NavItem from "./NavItem";
export interface TNav {
  id: number;
  href: string;
  text: string;
}
function Nav() {
  const { data: session }: any = useSession();
  const navItems: TNav[] = [
    {
      id: 0,
      href: "/login",
      text: "login",
    },
    {
      id: 1,
      href: "/register",
      text: "register",
    },
    {
      id: 2,
      href: "/",
      text: "home",
    },
    {
      id: 3,
      href: "/render/csr",
      text: "csr",
    },
    {
      id: 4,
      href: "/render/isr",
      text: "isr",
    },
    {
      id: 5,
      href: "/render/ssg",
      text: "ssg",
    },
    {
      id: 6,
      href: "/render/ssr",
      text: "ssr",
    },
    {
      id: 7,
      href: "/parallelRoute",
      text: "parallelRoute",
    },
    {
      id: 8,
      href: "/todo",
      text: "todo",
    },
    {
      id: 9,
      href: "/client-cache",
      text: "client-cache",
    },
  ];
  return (
    <nav className="nav" aria-label="Global">
      <ul>
        {!session ? (
          <>
            {navItems.map((nav: TNav, idx: number) => (
              <NavItem key={"nav-" + idx} {...nav} />
            ))}
          </>
        ) : (
          <>
            {session?.user?.email}
            <li>
              <button
                onClick={() => signOut()}
                className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
              >
                Logout
              </button>
            </li>
            <Link href="/dashboard">
              <li>Dashboard</li>
            </Link>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Nav;
