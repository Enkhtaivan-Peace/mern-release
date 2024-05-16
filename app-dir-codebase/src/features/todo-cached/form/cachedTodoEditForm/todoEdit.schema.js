import { z } from 'zod'

export const todoEditSchema = z.object({
    name: z.string().nonempty('Name is required'),
    description: z.string().email('Please enter a valid email address'),
    photo: z.string().min(6, 'Password must be at least 6 characters long'),
})
