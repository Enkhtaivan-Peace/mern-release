'use server'

import { TError } from '@/common/fetch/fetchCrud'
import { IUser } from './_interfaces'
import { userService } from './userService'
import { getAccessToken } from '@/common/auth/_actions'

export async function getUserList(payload: TListReq) {
    const token = await getAccessToken()
    const userListRes: TRes<IUser[]> | TError<IUser> = await userService.fetchUsers(payload, token)
    return userListRes
}
