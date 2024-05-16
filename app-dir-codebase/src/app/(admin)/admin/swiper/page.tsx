import { Flex } from '@/components/ui/containers/flex/Flex'
import CardsSwiper from '@/components/ui/swiper/cardsSwiper/CardsSwiper'
import HorizontalScroll from '@/components/ui/swiper/horizontal-scroll/HorizontalScrollMenu'
import React from 'react'

const SwiperPage = () => {
    return (
        <Flex className="flex-col gap-40">
            <CardsSwiper />
            <HorizontalScroll />
        </Flex>
    )
}

export default SwiperPage
