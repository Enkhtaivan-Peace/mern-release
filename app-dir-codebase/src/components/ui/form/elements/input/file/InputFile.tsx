import React from 'react'
import tw from 'tailwind-styled-components'
export type IInputFile = TFormElement & {
    isValid?: boolean
}
function InputFile(props: IInputFile) {
    const { name, required, onChange, isValid } = props
    return (
        <InputFileTw
            type="file"
            required={required}
            onChange={onChange}
            name={name}
            className={isValid ? 'border border-orange' : ''}
        />
    )
}

const InputFileTw = tw.input`
    border-none
    bg-transparent
    shadow-none
    focus:shadow-none
    hover:shadow-none
`

export default InputFile
