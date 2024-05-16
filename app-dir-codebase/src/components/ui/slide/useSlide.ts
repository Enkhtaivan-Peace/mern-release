import { useState, useRef, useCallback } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
function useSlide() {
    const [isShow, setIsShow] = useState<boolean>(false)
    const ref = useRef<HTMLDivElement>(null)

    const toggleSlide = useCallback(() => {
        setIsShow((prev) => !prev)
    }, [])

    const closeSlide = useCallback(() => {
        setIsShow(false)
    }, [])

    useOnClickOutside(ref, closeSlide)
    return {
        isShow,
        toggleSlide,
        closeSlide,
        ref,
    }
}

export default useSlide
