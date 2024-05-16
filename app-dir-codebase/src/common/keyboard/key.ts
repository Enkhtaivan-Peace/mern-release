'use client'
/**
 * @createdBy Phill Anderson 2024/01/04
 */
import { useEffect } from "react"

interface IUseKey {
    callback:() => void;
    keyName: string;
}

function useKeyPress(obj:IUseKey) {
    const { callback, keyName } = obj;

    const handleKey = (event:KeyboardEvent) => {
        if(event.key === keyName ) {
            callback()
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    },[])
}

export default useKeyPress