'use client'
import { Button } from '@/components/ui/button'
import { Flex } from '@/components/ui/containers/flex/Flex'
import React, { ChangeEvent, FormEvent, useState, useTransition } from 'react'
import { TodoService } from '../TodoService'
import { ITodo, TCreateTodo } from '../_interfaces'

function TodoAddFormClient() {
    const [formData, setFormData] = useState<any>(null)
    const [isPending, startTransition] = useTransition()

    function handleChange(e: any) {
        const { name, value } = e
        setFormData((prev: any) => ({
            ...prev,
            [name]: value,
        }))
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        if (formData?.name.trim().length === 0) {
            return
        }

        const data: TCreateTodo = {
            name: formData?.name!,
            photo: formData?.photo ?? 'https://loremflickr.com/640/480/technics',
            description: formData?.description ?? 'no-description',
            isCompleted: false,
        }
        startTransition(async () => {
            TodoService.addTodo(data)
        })
        setFormData(null)
    }

    return (
        <Flex className="py-30 justify-center">
            <form onSubmit={handleSubmit}>
                <Flex className=" items-center">
                    <Flex className="flex-col gap-10">
                        <input
                            id="todoName"
                            name="name"
                            type="text"
                            placeholder="гарчиг"
                            required
                            onChange={handleChange}
                        />
                        <input id="todoName" name="photo" type="text" placeholder="photo url" onChange={handleChange} />
                        <textarea id="description" name="description" placeholder="тайлбар" onChange={handleChange} />

                        <Button variant="outline" size="sm">
                            ok
                        </Button>
                    </Flex>
                </Flex>
            </form>
        </Flex>
    )
}

export default TodoAddFormClient
