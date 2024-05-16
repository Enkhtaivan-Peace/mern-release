'use client'
import React from 'react'
import { TInput } from '../InputText'
import { BsSearch } from 'react-icons/bs'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { debounce } from '@/common/delay/timer'
// unControlled search input
function InputSearchUnControl(props: Partial<TInput>) {
    const { placeholder, name, isValid, value, id } = props

    const searchParams = useSearchParams()
    const pathname = usePathname()
    const { replace } = useRouter()

    const handleSearch = debounce((term: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('page', '1')
        if (term) {
            term === '' ? params.delete('search') : params.set('search', term)
        } else {
            params.delete('search')
        }
        replace(`${pathname}?${params.toString()}`)
    }, 300)

    return (
        <div className="flex items-center gap-5 border border-emerald-500 border-opacity-20 rounded-md pl-10 py-4">
            <label htmlFor={id}>
                <BsSearch />
            </label>
            <input
                type="text"
                onChange={(e) => handleSearch(e.target.value)}
                id={id}
                name={name}
                defaultValue={''}
                placeholder={placeholder || ''}
                aria-label={'search-input-' + name}
                aria-invalid={isValid}
                className={'w-full border-none focus:outline-none focus:ring-0 bg-transparent placeholder-blackSoft'}
            />
        </div>
    )
}

export default InputSearchUnControl
