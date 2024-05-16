import tw from 'tailwind-styled-components'
import { Flex } from '@/components/ui/containers/flex/Flex'
import React from 'react'

function DotList() {
    return (
        <Flex id="dotList" className="gap-40 relative">
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
            <Dot />
        </Flex>
    )
}

export default DotList

export const Dot = tw.div`circle rise-animation`
