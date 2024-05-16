'use client'
import { Button } from '@/components/ui/button'
import { Flex } from '@/components/ui/containers/flex/Flex'
import { ToastAction } from '@/components/ui/toast'
import { useToast } from '@/components/ui/use-toast'
import React from 'react'

const ToastPage = () => {
    const { toast } = useToast()

    return (
        <Flex className="gap-20">
            <Button
                variant="link"
                onClick={() => {
                    toast({
                        variant: 'default',
                        title: 'Scheduled: Catch up',
                    })
                }}
            >
                Show toast
            </Button>
            <Button
                variant="outline"
                onClick={() => {
                    toast({
                        title: 'Scheduled: Catch up',
                        description: 'Friday, February 10, 2023 at 5:57 PM',
                    })
                }}
            >
                Show toast
            </Button>

            <Button
                variant="destructive"
                onClick={() => {
                    toast({
                        variant: 'destructive',
                        title: 'Scheduled: Catch up',
                        description: 'Friday, February 10, 2023 at 5:57 PM',
                        action: <ToastAction altText="Try again">Try again</ToastAction>,
                    })
                }}
            >
                Destructive toast
            </Button>
        </Flex>
    )
}

export default ToastPage
