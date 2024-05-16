'use client'

import { z } from 'zod'

export const formSchema = z.object({
    username: z.string().min(2).max(50),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one digit' })
        .regex(/[!@#$%^&*()-_=+[\]{}|;:'",.<>/?]/, { message: 'Password must contain at least one special character' })
        .refine((value) => !/\s/.test(value), { message: 'Password must not contain spaces' })
        .refine((value) => !/password/i.test(value), { message: 'Password cannot contain the word "password"' }),
    isChecked: z.boolean(),
    comboItem: z.string({
        required_error: 'заавал сонгоно уу',
    }),
})
