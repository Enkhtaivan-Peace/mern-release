import { Flex } from '@/components/ui/containers/flex/Flex'
import React from 'react'
import { editTodo } from '../_todo-actions'
import { Button } from '@/components/ui/button'
import { IEditTodoBtn } from '../buttons/EditTodoButton'

function TodoEditForm(props: Pick<IEditTodoBtn, 'todo'>) {
    const { todo } = props

    return (
        <form action={editTodo}>
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

export default TodoEditForm
