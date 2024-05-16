'use client'
import { useMotionValue, useMotionValueEvent, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import { MotionDiv } from '@/components/ui/motion/MotionContainer'

function Scroller() {
    const ref = useRef(null)

    const { scrollYProgress } = useScroll({
        target: ref,
        // offset: ['start end', 'end start'], // start of target element, meets end of container element
        // offset: ['start start', 'end start'], // start of target element, meets start of container element
        offset: ['start 50%', '-100px start'], // start of target element, meets 50% of container element
    })

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 90])

    const x = useMotionValue(0)
    useMotionValueEvent(x, 'change', (latest) => console.log(latest))
    const backgroundColor = useTransform(
        x,
        [-200, 0, 200], // Define the range of x-values
        ['#FF0000', '#FFFFFF', '#00FF00'] // Define corresponding colors
    )
    console.log('backgroundColor', backgroundColor)
    return (
        <MotionDiv
            ref={ref}
            className="flex text-center items-center mx-auto h-[80px] w-[80px] bg-indigo-500"
            drag="x"
            dragConstraints={{ left: -200, right: 200 }}
            style={{ x, rotate, backgroundColor, cursor: 'grab' }}
        >
            <p className=" text-10  leading-16">өнгөө яагаад авахгүй байгаа вэ</p>
        </MotionDiv>
    )
}

export default Scroller
