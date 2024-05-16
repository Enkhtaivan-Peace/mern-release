import React from 'react'
import { ITodo } from './_interfaces'
import tw from 'tailwind-styled-components'
import Image from 'next/image'
import { Flex } from '@/components/ui/containers/flex/Flex'
import { Button } from '@/components/ui/button'
import { MdOutlineModeEditOutline, MdDelete } from 'react-icons/md'
import DeleteTodoButton from './buttons/DeleteTodoButton'
import { deleteTodo, editTodo } from './_todo-actions'
import { revalidatePath } from 'next/cache'
import EditTodoButton from './buttons/EditTodoButton'

export interface ITodoListItem extends ITodo {}

function TodoListItem(props: ITodoListItem) {
    const { id, name, photo, isCompleted, createdAt } = props
    const thePhoto = photo === 'no-photo.jpg' ? `/${photo}` : photo

    async function handleDeleteTodo() {
        'use server'
        deleteTodo(id!)
        revalidatePath('/todo')
    }

    return (
        <Item className="todo-item">
            <Flex className="justify-between items-center">
                <Flex className="gap-10">
                    <Image src={thePhoto} alt={'image of ' + name} width={100} height={100} />
                    <div>
                        <h5>{name}</h5>
                        <hr />
                        <Flex className="flex-col">
                            <span>Дууссан эсэх: {isCompleted ? 'тийм' : 'үгүй'}</span>
                            <span>Огноо: {createdAt} </span>
                        </Flex>
                    </div>
                </Flex>
                <Flex>
                    <EditTodoButton todo={props} />
                    <DeleteTodoButton deleteTodo={handleDeleteTodo} />
                </Flex>
            </Flex>
        </Item>
    )
}

const Item = tw.div`
    py-10
    px-20
    border-b
    border-emerald-500
`

export default TodoListItem
