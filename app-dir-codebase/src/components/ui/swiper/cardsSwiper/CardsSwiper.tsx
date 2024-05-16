'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Virtual, EffectCards } from 'swiper/modules'
import { SlideNextBtn, SlidePrevBtn } from '../swiper.controls'
import { Flex } from '../../containers/flex/Flex'
import ExampleCard from '@/features/example/ExampleCard'
import 'swiper/css'
import 'swiper/css/effect-cards'
import './cards-swiper.css'
function CardsSwiper() {
    return (
        <Swiper effect="cards" grabCursor={true} modules={[EffectCards]} className="cards-swiper">
            <SwiperSlide>
                {({ isActive }) => <div>Current slide is {isActive ? 'active' : 'not active'}</div>}
            </SwiperSlide>
            <SwiperSlide>
                <ExampleCard title="card 1" />
            </SwiperSlide>
            <SwiperSlide>
                <ExampleCard title="card 2" />
            </SwiperSlide>
            <SwiperSlide>
                <ExampleCard title="card 3" />
            </SwiperSlide>
            <Flex className="gap-20">
                <SlidePrevBtn />
                <SlideNextBtn />
            </Flex>
        </Swiper>
    )
}

export default CardsSwiper
