import { anim } from '@/common/motion/variants'
import { Variants, motion } from 'framer-motion'
import React from 'react'

const slideUp: Variants = {
    initial: {
        opacity: 0,
        x: '100vw',
    },
    enter: {
        opacity: 1,
        x: '0',
        transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1],
        },
    },
    exit: {
        opacity: 0,
        x: '0',
        transition: {
            duration: 1,
            ease: [0.76, 0, 0.24, 1],
        },
    },
}

const perspective: Variants = {
    initial: {
        y: 0,
        opacity: 0,
        scale: 1,
    },
    enter: {
        y: 0,
        scale: 1,
        opacity: 1,
    },
    exit: {
        y: -100,
        scale: 0.9,
        opacity: 1,
        transition: {
            duration: 1.2,
            ease: [0.76, 0, 0.24, 1],
        },
    },
}

function SlideLeftContainer({ children }: JsxChildren) {
    return (
        <motion.div {...anim(perspective)} className="relative">
            <motion.div {...anim(slideUp)} className="w-full">
                {children}
            </motion.div>
        </motion.div>
    )
}

export default SlideLeftContainer
