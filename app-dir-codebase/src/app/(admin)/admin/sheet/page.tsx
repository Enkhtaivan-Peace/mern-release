'use client'
import React from 'react'
import { Sheet1 } from '@/common/sheet/choices/Sheet1'
import { Sheet2 } from '@/common/sheet/choices/Sheet2'
import { Flex } from '@/components/ui/containers/flex/Flex'
function Sheetpage() {
    return (
        <Flex className=" gap-20">
            <Sheet1 />
            <Sheet2 />
        </Flex>
    )
}

export default Sheetpage
