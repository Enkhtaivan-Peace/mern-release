'use client'
import React from 'react'
import { TInput } from '../InputText'
import { BsSearch } from 'react-icons/bs'

// controlled search input
function InputSearch(props: TInput) {
    const { onChange, placeholder, name, isValid, value, id } = props
    return (
        <div className="flex items-center gap-5 border border-rose-500 border-opacity-20 rounded-md pl-10 py-4">
            <label htmlFor={id}>
                <BsSearch />
            </label>
            <input
                type="text"
                onChange={onChange}
                id={id}
                name={name}
                value={value || ''}
                placeholder={placeholder || ''}
                aria-label={'search-input-' + name}
                aria-invalid={isValid}
                className={'w-full border-none focus:outline-none focus:ring-0 bg-transparent placeholder-blackSoft'}
            />
        </div>
    )
}

export default InputSearch
