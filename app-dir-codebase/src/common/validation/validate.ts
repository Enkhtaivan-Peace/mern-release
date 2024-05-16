// import { TFormState } from '@/components/ui/form/store/formReducer'
import { ZodSchema, z } from 'zod'

type TValidate = {
    success: boolean
    errors: Record<string, string> | null
}

export async function validateForm(zodSchema: ZodSchema<unknown>, formState: any): Promise<TValidate> {
    try {
        const theFormState: any = {}
        Object.keys(formState).forEach((fieldName) => (theFormState[fieldName] = formState[fieldName]?.value || null))
        await zodSchema.parse(theFormState)
        return { success: true, errors: null }
    } catch (validationErrors) {
        const newErrors: Record<string, string> = {}
        ;(validationErrors as any).errors.forEach((err: any) => {
            newErrors[err.path[0]] = err.message
        })
        console.error('form validation Error:', newErrors)
        return { success: false, errors: newErrors }
    }
}

export async function validateFormData(zodSchema: ZodSchema<unknown>, formData: FormData) {
    try {
        zodSchema.parse(formData)
        return {} // No errors
    } catch (error) {
        if (error instanceof z.ZodError) {
            const validationErrors: Partial<Record<keyof FormData, string>> = {}
            error.errors.forEach((err) => {
                if (err.path && err.path.length > 0) {
                    const fieldName = err.path[0] as keyof FormData
                    validationErrors[fieldName] = err.message
                }
            })
            return validationErrors
        }
        throw error // Unexpected error
    }
}
