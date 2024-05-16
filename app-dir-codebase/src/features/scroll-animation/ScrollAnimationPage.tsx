'use client'
import { MotionDiv } from '@/components/ui/motion/MotionContainer'
import Scroller from './Scroller'
import HorizontalScroller from './HorizontalScroller'

function ScrollAnimation() {
    return (
        <>
            <MotionDiv className="py-[100vh]">
                <Scroller />
            </MotionDiv>
            <HorizontalScroller />
        </>
    )
}

export default ScrollAnimation
