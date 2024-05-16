import React from 'react'
import { ITodo } from './_interfaces'
import TodoListItem from './TodoListItem'
import './_todo.css'
import { getTodoList } from './_todo-actions'
import PaginateComplex from '@/components/ui/pagination/old/PaginateComplex'

interface ITodoList extends TPageProps {}

async function TodoList({ searchParams }: ITodoList) {
    const search = searchParams?.search || null
    const page = Number(searchParams?.page) || 1
    const limit = Number(searchParams?.limit) || 10

    const todoListRes = await getTodoList({
        search,
        page,
        limit,
    })

    console.log('todoListRes', todoListRes)

    return (
        <div>
            <PaginateComplex {...todoListRes?.paginate!} />
            {todoListRes?.data?.map((todo: ITodo, idx: number) => (
                <TodoListItem key={'todo-' + idx} {...todo} />
            ))}
        </div>
    )
}

export default TodoList
