'use server'
import { authOptions } from '@/common/auth/auth'
import { getServerSession } from 'next-auth'

export async function getSessionObject() {
    const session: any = await getServerSession(authOptions)
    return session
}

export async function getAccessToken() {
    const session: any = await getSessionObject()
    return session?.user.token
}
