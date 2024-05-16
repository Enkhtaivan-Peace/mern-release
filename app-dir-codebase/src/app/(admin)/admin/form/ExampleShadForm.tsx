'use client'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchema } from './formSchema'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import Link from 'next/link'
import { ComboBoxWithoutForm, Combobox } from '@/components/ui/combobox'

const frameworks = [
    {
        value: 'next.js',
        label: 'Next.js',
    },
    {
        value: 'sveltekit',
        label: 'SvelteKit',
    },
    {
        value: 'nuxt.js',
        label: 'Nuxt.js',
    },
    {
        value: 'remix',
        label: 'Remix',
    },
    {
        value: 'astro',
        label: 'Astro',
    },
]

function ExampleShadForm() {
    const [comboVal, setComboVal] = React.useState('')
    console.log('comboVal', comboVal)
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: '',
            password: '',
            isChecked: false,
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-20">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" {...field} />
                                </FormControl>
                                <FormDescription>This is your public display name.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="your password" {...field} />
                                </FormControl>
                                <FormDescription>This is password.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="comboItem"
                        render={({ field }) => (
                            <FormItem className="flex flex-col">
                                <FormLabel>Language</FormLabel>
                                <Combobox
                                    form={form}
                                    field={field}
                                    items={frameworks}
                                    placeholder={'жишээг сонгоно уу'}
                                />
                                <FormDescription>Combobox талбарын тайлбар</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <h3>Combobox without form :</h3>
                    <ComboBoxWithoutForm items={frameworks} comboVal={comboVal} setComboVal={setComboVal} />
                    <FormField
                        control={form.control}
                        name="isChecked"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                                <FormControl>
                                    <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                                </FormControl>
                                <div className="space-y-1 leading-none">
                                    <FormLabel>Use different settings for my mobile devices</FormLabel>
                                    <FormDescription>
                                        You can manage your mobile notifications in the
                                        <Link href="/examples/forms">mobile settings</Link> page.
                                    </FormDescription>
                                </div>
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default ExampleShadForm
