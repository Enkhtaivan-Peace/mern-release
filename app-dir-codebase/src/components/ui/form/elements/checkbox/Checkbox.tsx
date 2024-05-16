// import { TFormElement } from '@/common/types/common'

import React, { useState } from 'react'
import { BsCheck } from 'react-icons/bs'

export type TCheckbox = TFormElement & {
    checked?: boolean
    label: string
}
function Checkbox(props: TCheckbox) {
    const { onChange, name, checked, label } = props
    const [isChecked, setIsChecked] = useState<boolean>(checked || false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newChecked = event.target.checked
        setIsChecked(newChecked)
        onChange!(event, true)
    }

    return (
        <div className="flex gap-2" aria-checked={isChecked}>
            <div className="flex justify-center items-center relative h-[20px] w-[20px] bg-slate-100 border">
                <input
                    id={`checkbox-${name}`}
                    type="checkbox"
                    name={name}
                    onChange={handleChange}
                    checked={isChecked}
                    aria-label={'checkbox-' + name}
                    style={{ height: 'inherit', width: 'inherit' }}
                    className="border-none z-50 bg-transparent appearance-none"
                />
                {isChecked && <BsCheck className="absolute top-[50%] -translate-y-[50%]" />}
            </div>
            <label htmlFor={`checkbox-${name}`}>{label}</label>
        </div>
    )
}

export default Checkbox
