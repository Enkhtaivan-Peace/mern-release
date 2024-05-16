'use client'

import React, { useState } from 'react'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'

import { cn } from '@/common/utils'
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { UseFormReturn } from 'react-hook-form'

interface IComboItem {
    value: string
    label: string
}

// react-form-hook дотор ашиглагдах combobox
export function Combobox({
    form,
    field,
    items,
    placeholder,
}: {
    form: UseFormReturn<any>
    field: any
    items: IComboItem[]
    placeholder?: string
}) {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                    {field.value
                        ? items.find((item) => item.value === field.value)?.label
                        : placeholder || 'Select ComboBox...'}
                    <CaretSortIcon className="ml-16 h-20 w-20 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search ..." className="h-40" />
                    <CommandEmpty>No Items found.</CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {items.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        form.setValue(field.name, currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {item.label}
                                    <CheckIcon
                                        className={cn(
                                            'ml-auto h-20 w-20',
                                            item.value === field.value ? 'opacity-100' : 'opacity-0'
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

// жирийн combobox

export function ComboBoxWithoutForm({
    items,
    comboVal,
    setComboVal,
    placeholder,
}: {
    items: IComboItem[]
    comboVal: string
    setComboVal: React.Dispatch<React.SetStateAction<string>>
    placeholder?: string
}) {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between">
                    {comboVal ? items.find((item) => item.value === comboVal)?.label : placeholder || 'Select combo...'}
                    <CaretSortIcon className="ml-16 h-20 w-20 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search framework..." className="h-40" />
                    <CommandEmpty>No Item found.</CommandEmpty>
                    <CommandGroup>
                        <CommandList>
                            {items.map((item) => (
                                <CommandItem
                                    key={item.value}
                                    value={item.value}
                                    onSelect={(currentValue) => {
                                        setComboVal(currentValue === comboVal ? '' : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {item.label}
                                    <CheckIcon
                                        className={cn(
                                            'ml-auto h-20 w-20',
                                            comboVal === item.value ? 'opacity-100' : 'opacity-0'
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandList>
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
