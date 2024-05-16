import { TError } from '@/common/fetch/fetchCrud'

export interface IUser {
    id: number
    name: string
    email: string
    createdAt: string
    updatedAt: string
    deletionDate?: string
}

export type TCreateUser = Exclude<IUser, 'id' | 'createdAt'>
export type TEditUser = Partial<IUser>
export type TDeleteUser = Partial<IUser>

export type TUserListRes = TRes<IUser[]> | TError<IUser>
