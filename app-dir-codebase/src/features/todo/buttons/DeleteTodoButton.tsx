'use client'
import { Button } from '@/components/ui/button'
import React, { useTransition } from 'react'
import { MdDelete } from 'react-icons/md'
import { TDeleteTodo } from '../_interfaces'

interface IDeleteTodoBtn {
    deleteTodo: () => Promise<void>
}

function DeleteTodoButton(props: IDeleteTodoBtn) {
    const [isPending, startTransition] = useTransition()

    function handleClick() {
        startTransition(() => {
            props.deleteTodo()
        })
    }

    return (
        <Button variant="ghost" onClick={handleClick}>
            <MdDelete />
        </Button>
    )
}

export default DeleteTodoButton
