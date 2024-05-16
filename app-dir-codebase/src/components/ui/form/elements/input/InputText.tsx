// import { TFormElement } from '@/common/types/common'
import React from 'react'

export type TInput = TFormElement & {
    isValid?: boolean
}
function InputText(props: TInput) {
    const { onChange, placeholder, name, required, isValid, value } = props
    return (
        <input
            type="text"
            required={required}
            onChange={onChange}
            name={name}
            value={value || ''}
            placeholder={placeholder || ''}
            aria-label={'text-input-' + name}
            aria-invalid={isValid}
            className={isValid ? 'border border-orange' : ''}
        />
    )
}

export default InputText
