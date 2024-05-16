'use client'
import React from 'react'
import { Variants, motion } from 'framer-motion'
import { anim } from '@/common/motion/variants'
import { cn } from '@/common/utils'

const opacity: Variants = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5,
        },
    },
}

interface IContainer extends JsxChildren {
    className?: string
}

function OpacityContainer({ className, children }: IContainer) {
    return (
        <motion.div {...anim(opacity)} className={cn('w-full', className)}>
            {children}
        </motion.div>
    )
}

export default OpacityContainer
