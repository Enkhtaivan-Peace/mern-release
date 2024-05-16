'use server'
import { revalidatePath } from 'next/cache'
import { TodoService } from './TodoService'
import { ITodo, TCreateTodo } from './_interfaces'
import { TError } from '@/common/fetch/fetchCrud'
import { getAccessToken } from '@/common/auth/_actions'
import { TodoFormSchema } from './form/todoSchema'
import { validateForm } from '@/common/validation/validate'

export async function addTodo(formData: FormData) {
    const name = formData.get('name') as string
    const photo = formData.get('photo') as string
    const description = formData.get('description') as string

    const parse = TodoFormSchema.parse({
        name,
        description,
    })
    console.log('parse', parse)
    const data: TCreateTodo = {
        name: parse.name,
        photo: photo || photo !== '' ? photo : 'https://loremflickr.com/640/480/technics',
        description: parse.description ?? 'no-description',
        isCompleted: false,
    }
    const todoListRes: TRes<Partial<ITodo>> | TError<ITodo> = await TodoService.addTodo(data)
    // revalidatePath("/todo");
    return todoListRes
}

export async function editTodo(formData: FormData) {
    const id = formData.get('id') as string
    const name = formData.get('name') as string
    const photo = formData.get('photo') as string
    const description = formData.get('description') as string

    const data: TCreateTodo = {
        name,
        photo,
        description,
        isCompleted: false,
    }
    const todoListRes: TRes<Partial<ITodo>> | TError<ITodo> = await TodoService.editTodo({ id: +id, data })
    // revalidatePath('/todo')
    return todoListRes
}

export async function deleteTodo(id: number) {
    const res: any = await TodoService.deleteTodo(id)
    console.log(res)
}

export async function getTodoList(payload: TListReq) {
    console.log('getTodoList', payload)
    const todoListRes: TRes<ITodo[]> | TError<ITodo> = await TodoService.fetchTodos(payload)

    return todoListRes
}

export async function getTodoById(id: number) {
    const todoListRes: TRes<ITodo> | TError<ITodo> = await TodoService.fetchTodoById(id)
    return todoListRes
}

export async function createTodoInvoice(formData: FormData) {
    const todoInvoice: any = await TodoService.createTodoInvoice(formData)
    return todoInvoice
}
