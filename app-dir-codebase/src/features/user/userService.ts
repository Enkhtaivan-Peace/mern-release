import { fetchApi } from '@/common/fetch/fetchCrud'
import { IUser, TCreateUser, TDeleteUser, TEditUser } from './_interfaces'
import { generateQuery } from '@/common/fetch/queryGenerator'

const user = 'users'

export const userService = {
    fetchUsers: async (payload: TListReq, token: string) => {
        const thePayload = {
            ...payload,
            fieldName: 'name',
        }
        const queryParams = generateQuery(thePayload)
        const res = await fetchApi.get<IUser[]>({
            url: `/${user}` + queryParams,
            token,
        })
        return res
    },

    fetchUserById: async (id: number) => {
        const res = await fetchApi.get<IUser>({ url: `/${user}/` + id })
        return res
    },

    addUser: async (data: TCreateUser) => {
        const res = await fetchApi.post<TCreateUser>({ url: `/${user}`, data })
        return res
    },

    editUser: async (id: number, data: TEditUser) => {
        const res = await fetchApi.put<TEditUser>({ url: `/${user}/` + id, data })
        return res
    },

    deleteUser: async (id: number) => {
        console.log('todoId:', id)
        const res = await fetchApi.delete<TDeleteUser>({ url: `/${user}/${id}` })
        return res
    },
}
