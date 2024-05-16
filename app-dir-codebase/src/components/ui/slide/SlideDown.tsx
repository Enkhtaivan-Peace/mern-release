import React from 'react'
import { IDropAnimate } from './SlideUp'
import { AnimatePresence, motion } from 'framer-motion'

function SlideDown({ isOpen, style, isNoBorder, children }: IDropAnimate) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className={`absolute top-[100%] w-full ${!isNoBorder && 'border'} rounded-md p-10 mb-10 z-50`}
                    style={style}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SlideDown
