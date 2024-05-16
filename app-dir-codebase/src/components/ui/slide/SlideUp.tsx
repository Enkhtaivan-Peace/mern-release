import React, { CSSProperties } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface IDropAnimate extends JsxChildren {
    isOpen?: boolean
    isNoBorder?: boolean
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
    style?: CSSProperties
}
function SlideUp({ isOpen, style, children }: IDropAnimate) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className=" absolute bottom-[100%] w-full bg-white border rounded-md p-10 mb-10"
                    style={style}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default SlideUp
