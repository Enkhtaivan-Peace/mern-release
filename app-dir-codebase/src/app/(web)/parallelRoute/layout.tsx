import { Flex } from '@/components/ui/containers/flex/Flex'
import React, { ReactNode } from 'react'

function ParallelLayout({
    children,
    posts,
    users,
    signIn,
}: {
    children: ReactNode
    posts: ReactNode
    users: ReactNode
    signIn: ReactNode
}) {
    const isLoggedIn = false
    if (isLoggedIn) return signIn
    return (
        <div>
            <nav className="">
                <ul className="flex flex-col gap-20 py-10">
                    <li>Parralel route navbar</li>
                    <li>Parralel route navbar</li>
                    <li>Parralel route navbar</li>
                    <li>Parralel route navbar</li>
                    <li>Parralel route navbar</li>
                </ul>
            </nav>
            <Flex className=" gap-20">
                <div>{children}</div>
                {users}
                {posts}
            </Flex>
        </div>
    )
}

export default ParallelLayout
