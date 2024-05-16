'use client'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'
import { FaFaceFrown } from 'react-icons/fa6'

const NotFound: NextPage = () => {
    return (
        <main className="flex h-full flex-col items-center justify-center gap-2">
            <FaFaceFrown className=" text-18 text-gray-400" />
            <h2 className="text-xl font-semibold">404 Not Found</h2>
            <p>Ийм хуудас олдсонгүй.</p>
            <Link
                href="/admin"
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            >
                Go Back
            </Link>
        </main>
    )
}

export default NotFound
