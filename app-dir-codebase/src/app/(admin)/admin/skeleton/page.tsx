import { Flex } from '@/components/ui/containers/flex/Flex'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeletonPage = () => {
    return (
        <Flex className="flex-col gap-20">
            <h3> Өөрийн хүссэн загвараар skeleton урлах боломжтой</h3>

            <h5>Жишээ 1.</h5>
            <div className="flex items-center space-x-4">
                <Skeleton className="h-40 w-40 rounded-full" />
                <div className="space-y-10">
                    <Skeleton className="h-12 w-[250px]" />
                    <Skeleton className="h-12 w-[200px]" />
                </div>
            </div>
            <h5>Жишээ 2.</h5>
            <div className="flex flex-col space-y-12">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-12">
                    <Skeleton className="h-12 w-[250px]" />
                    <Skeleton className="h-12 w-[200px]" />
                </div>
            </div>
        </Flex>
    )
}

export default SkeletonPage
