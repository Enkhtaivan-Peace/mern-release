import { Flex } from '@/components/ui/containers/flex/Flex'
import Image from 'next/image'
import React from 'react'
const ImagePage = () => {
    return (
        <Flex className="flex-col gap-20">
            <h5>ImagePage</h5>
            <Image
                src={'/large-size-image.jpg'}
                alt="this is large size image example"
                width={600}
                height={300}
                className="object-cover aspect-video overlay-img"
            />
        </Flex>
    )
}

export default ImagePage
