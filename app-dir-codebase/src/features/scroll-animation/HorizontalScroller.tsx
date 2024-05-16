import React, { useRef, useState, useLayoutEffect, useCallback } from 'react'
import ResizeObserver from 'resize-observer-polyfill'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import './scroll-animation.scss'
function HorizontalScroller() {
    const scrollRef = useRef<HTMLElement>(null)
    const ghostRef = useRef<HTMLDivElement>(null)
    const [scrollRange, setScrollRange] = useState(0)
    const [viewportW, setViewportW] = useState(0)

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef?.current?.scrollWidth!)
    }, [scrollRef])

    const onResize = useCallback((entries: any) => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width)
        }
    }, [])

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) => onResize(entries))
        resizeObserver.observe(ghostRef?.current!)
        return () => resizeObserver.disconnect()
    }, [onResize])

    const { scrollYProgress } = useScroll()
    const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW])
    const physics = { damping: 15, mass: 0.27, stiffness: 55 }
    const spring = useSpring(transform, physics)
    return (
        <>
            <div className="scroll-container">
                <motion.section ref={scrollRef} style={{ x: spring }} className="thumbnails-container">
                    <div className="thumbnails">
                        <div className="thumbnail">aaaaaaaaaaaaaaaaaaaaa</div>
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                        <div className="thumbnail" />
                    </div>
                </motion.section>
            </div>
            <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
        </>
    )
}

export default HorizontalScroller
