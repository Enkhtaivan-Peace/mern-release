import React, { CSSProperties } from 'react'
import { useSwiper, useSwiperSlide } from 'swiper/react'
import { GrFormPrevious, GrFormNext } from 'react-icons/gr'

interface ISwiperControls {
    isIcon?: boolean
    style?: CSSProperties
}

export function SlidePrevBtn(props: ISwiperControls) {
    const swiper = useSwiper()

    const style: CSSProperties = {
        position: 'absolute',
        left: 0,
        ...props.style,
    }
    return (
        <button onClick={() => swiper.slidePrev()} style={style}>
            {' '}
            {props.isIcon ? <GrFormPrevious className=" h-30 w-30" /> : 'prev'}{' '}
        </button>
    )
}

export function SlideNextBtn(props: ISwiperControls) {
    const swiper = useSwiper()
    const style: CSSProperties = {
        position: 'absolute',
        right: 0,
        ...props.style,
    }
    return (
        <button onClick={() => swiper.slideNext()} style={style}>
            {props.isIcon ? <GrFormNext className=" h-30 w-30" /> : 'next'}
        </button>
    )
}

export function SlideTitle() {
    const swiperSlide = useSwiperSlide()
    return <p>Current slide is {swiperSlide.isActive ? 'active' : 'not active'}</p>
}
