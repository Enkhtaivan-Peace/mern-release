import React from 'react'
import { getTodoList } from '@/features/todo/_todo-actions'
import { getUserList } from '@/features/user/_user-actions'
import TodoInvoiceForm from '@/features/todo/form/TodoInvoiceForm'
import { NextPage } from 'next'
import { getSessionObject } from '@/common/auth/_actions'

const AddPage: NextPage = async () => {
    const todos = await getTodoList({})
    const users = await getUserList({})

    return (
        <div>
            <h3>Add Todo form</h3>
            <TodoInvoiceForm todosRes={todos} usersRes={users} />
        </div>
    )
}

export default AddPage
