import React from 'react'
import MainTab from '@/features/tab/MainTab'
import { Flex } from '@/components/ui/containers/flex/Flex'
// import SimpleTab from '@/components/ui/tab/choices/simpleTab/SimpleTab'

const TabPage = () => {
    return (
        <Flex className="flex-col gap-20">
            <h3>Shadcn tab:</h3>
            <MainTab />
            <h3>Freestyle tabs:</h3>
            {/* <SimpleTab name="simple-tab" /> */}
        </Flex>
    )
}

export default TabPage
