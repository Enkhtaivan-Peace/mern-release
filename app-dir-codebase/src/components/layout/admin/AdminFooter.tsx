'use client'
import { Flex } from '@/components/ui/containers/flex/Flex'
import React from 'react'
import tw from 'tailwind-styled-components'
function AdminFooter() {
    const year = new Date().getFullYear()
    return (
        <footer className="border-t border-gray-300 flex justify-center py-10">
            <Flex className="flex-col items-center">
                <p className="text-14">
                    Common code by Front-End Developer{' '}
                    <DevLink href="https://fb.com" target="_blank">
                        Phill Anderson
                    </DevLink>
                </p>
                <p>{year} он.</p>
            </Flex>
        </footer>
    )
}

const DevLink = tw.a`
  text-emerald-500
`

export default AdminFooter
