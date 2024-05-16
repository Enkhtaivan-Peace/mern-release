import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/common/utils'

const buttonVariants = cva('', {
    variants: {
        variant: {
            default: 'default-btn',
            destructive: 'destructive-btn',
            outline: 'outline-btn',
            secondary: 'secondary-btn',
            ghost: 'ghost-btn',
            link: 'link-btn',
        },
        size: {
            default: 'default-size',
            sm: 'sm',
            lg: 'lg',
            icon: 'icon',
        },
    },
    defaultVariants: {
        variant: 'default',
        size: 'default',
    },
})

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
