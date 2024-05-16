import React from 'react'
import { Button } from '@/components/ui/button'
import { ITodo, TTodoListRes } from '../_interfaces'
import { createTodoInvoice } from '../_todo-actions'
import { IUser } from '@/features/user/_interfaces'
import RadioBox from '@/components/ui/form/elements-server-side/RadioBox'

interface ITodoInvoiceForm {
    todosRes: TRes<ITodo[]>
    usersRes: TRes<IUser[]>
}

async function TodoInvoiceForm(props: ITodoInvoiceForm) {
    const { todosRes, usersRes } = props
    console.log('usersRes', usersRes)

    return (
        <form action={createTodoInvoice} className="flex flex-col gap-20">
            <input type="number" name="amount" placeholder="enter usd amount" />
            <select name="todo" id="todo">
                {todosRes.data?.map((todo: ITodo, idx: number) => (
                    <option key={'todo' + todo.id} value={todo.id}>
                        {todo.name}
                    </option>
                ))}
            </select>
            {usersRes?.data?.map((user, idx) => (
                <RadioBox key={'radio-' + idx} id={`user-${idx}`} value={user.id} name={'userId'} label={user.name} />
            ))}
            <Button type="submit" variant={'outline'}>
                Create todo
            </Button>
        </form>
    )
}

export default TodoInvoiceForm
