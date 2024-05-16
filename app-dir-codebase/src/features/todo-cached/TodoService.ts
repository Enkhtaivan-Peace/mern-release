import { fetchApi } from '@/common/fetch/fetchCrud'
import { ITodo, TCreateTodo, TDeleteTodo, TEditTodo } from './_interfaces'
import { generateQuery } from '@/common/fetch/queryGenerator'
import { getSessionObject } from '@/common/auth/_actions'
import { revalidateTag } from 'next/cache'

export const TodoService = {
    fetchTodos: async (payload: TListReq) => {
        const thePayload = {
            ...payload,
            fieldName: 'name',
        }
        const queryParams = generateQuery(thePayload)
        const res = await fetchApi.get<ITodo[]>({
            url: '/todos' + queryParams,
            cacheName: 'todos',
        })
        return res
    },

    fetchTodoById: async (id: number) => {
        const res = await fetchApi.get<ITodo>({ url: '/todos/' + id })
        return res
    },

    addTodo: async (data: TCreateTodo) => {
        const res = await fetchApi.post<TCreateTodo>({ url: '/todos', data })
        revalidateTag('todos')
        return res
    },

    editTodo: async (payload: { id: number; data: TEditTodo }) => {
        const { data, id } = payload
        const res = await fetchApi.put<TEditTodo>({ url: '/todos/' + id, data })
        return res
    },

    deleteTodo: async (id: number) => {
        console.log('todoId:', id)
        const res = await fetchApi.delete<TDeleteTodo>({ url: '/todos/' + id })
        return res
    },

    createTodoInvoice: async (formData: FormData) => {
        const rawFormData = {
            userId: formData.get('userId'),
            todoId: formData.get('todo'),
            amount: formData.get('amount'),
            status: 'in progress',
        }
        console.log('rawData', rawFormData)
        // const rawFormData = Object.fromEntries(formData.entries())
    },
}
