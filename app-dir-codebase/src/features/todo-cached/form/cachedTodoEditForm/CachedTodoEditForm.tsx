'use client'
import { Flex } from '@/components/ui/containers/flex/Flex'
import React from 'react'
import { editTodo } from '../../_todo-actions'
import { Button } from '@/components/ui/button'
import { IEditTodoBtn } from '../../buttons/EditTodoButton'
import useForm from '@/components/ui/form/store/useForm'
import { validateFormData } from '@/common/validation/validate'
import { todoEditSchema } from './todoEdit.schema'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { fetchApi } from '@/common/fetch/fetchCrud'
import { TodoService } from '../../TodoService'
import { ITodo } from '../../_interfaces'

function CachedTodoEditForm(props: Pick<IEditTodoBtn, 'todo'>) {
    const { todo } = props
    const queryClient = useQueryClient()

    const { mutate, isPending } = useMutation({
        mutationFn: (editedTodo: Partial<ITodo>) => {
            console.log('after mutate:', editedTodo)
            return TodoService.editTodo({
                id: todo.id!,
                data: editedTodo,
            })
        },
        onSettled: (newTodo) => {
            console.log('newTodo', newTodo)
            queryClient.invalidateQueries({
                queryKey: ['todos', { page: { search: null } }],
            })

            // queryClient.setQueryData(['todos'], (oldTodos: any) => {
            //     ;[...oldTodos.data, newTodo]
            // })
        },
    })

    async function editCachedTodo(formData: FormData) {
        const id = formData.get('id') as string
        const name = formData.get('name') as string
        const photo = formData.get('photo') as string
        const description = formData.get('description') as string

        const editedData = {
            name,
            photo,
            description,
        }

        const error = await validateFormData(todoEditSchema, formData)
        console.log('aaaa', { id, name, photo, description })
        console.log('error', error)

        console.log('before mutate:', editedData)
        mutate(editedData)
    }

    return (
        <form action={editCachedTodo}>
            <Flex className=" items-center">
                <Flex className="flex-col gap-10">
                    <input hidden name="id" value={todo.id} readOnly />
                    <input
                        id="todoName"
                        name="name"
                        type="text"
                        placeholder="гарчиг"
                        required
                        defaultValue={todo.name}
                    />
                    <input id="todoName" name="photo" type="text" placeholder="photo url" defaultValue={todo.photo} />
                    <textarea
                        id="description"
                        name="description"
                        placeholder="тайлбар"
                        defaultValue={todo.description}
                    />
                    <Button variant="outline" size="sm">
                        ok
                    </Button>
                </Flex>
            </Flex>
        </form>
    )
}

export default CachedTodoEditForm
