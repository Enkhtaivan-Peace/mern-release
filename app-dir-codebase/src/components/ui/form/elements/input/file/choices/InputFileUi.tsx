import React, { useEffect, useRef, useState } from 'react'
import InputFile, { IInputFile } from '../InputFile'
import tw from 'tailwind-styled-components'

function InputFileUi(props: IInputFile) {
    const btnRef = useRef<HTMLButtonElement>(null)
    const [btnWidth, setBtnWdith] = useState<number>(0)
    useEffect(() => {
        if (btnRef.current) {
            setBtnWdith(btnRef.current?.offsetWidth)
        }
    }, [])
    return (
        <FileWrapper style={{ width: `${btnWidth}px` }}>
            <HiddenInput>
                <InputFile {...props} />
            </HiddenInput>
            <FileBtn ref={btnRef}>Файл оруулна уу</FileBtn>
        </FileWrapper>
    )
}

const FileWrapper = tw.div`
    relative
    overflow-hidden
    z-100
`
const HiddenInput = tw.div`
    absolute
    top-0
    left-0
    z-0
    opacity-0
    bg-pink
`

const FileBtn = tw.button`
    whitespace-nowrap
    bg-blue
`

export default InputFileUi
