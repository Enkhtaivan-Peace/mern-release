'use client'
import ScrollAnimation from '@/features/scroll-animation/ScrollAnimationPage'
import { AnimatePresence } from 'framer-motion'
import { NextPage } from 'next'
import React from 'react'

const ScrollAnimationPage: NextPage = () => {
    return (
        <AnimatePresence>
            <ScrollAnimation />
        </AnimatePresence>
    )
}

export default ScrollAnimationPage
