'use client'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Controller } from 'swiper/modules'
import { Button } from '../../button'
import { SlideNextBtn, SlidePrevBtn } from '../swiper.controls'

import 'swiper/css'
import './horizontal-scroll-menu.css'
import 'swiper/css/navigation'
function HorizontalScrollMenu() {
    return (
        <div className="horizontal-scroll-menu">
            <Swiper modules={[Navigation]} navigation={true} slidesPerView={7} spaceBetween={1}>
                <SwiperSlide>
                    <Button variant="ghost"> Menu 1</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button variant="ghost">Menu 2</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button variant="ghost">Menu 3</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button variant="ghost">Menu 4</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button variant="ghost">Menu 5</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button variant="ghost">Menu 6</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button variant="ghost">Menu 7</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button variant="ghost">Menu 8</Button>
                </SwiperSlide>
                <SwiperSlide>
                    <Button variant="ghost">Menu 9</Button>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default HorizontalScrollMenu
