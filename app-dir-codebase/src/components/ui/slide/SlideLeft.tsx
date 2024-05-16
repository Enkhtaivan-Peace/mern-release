'use client'
import React, { CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface IDropAnimate extends JsxChildren {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isNoBorder?: boolean
    style?: CSSProperties
}

function SlideLeft({ isOpen, style, children }: IDropAnimate) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="absolute -bottom-6 right-30 w-full h-fit bg-white border rounded-md p-10 mb-10"
                    style={style}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SlideLeft
