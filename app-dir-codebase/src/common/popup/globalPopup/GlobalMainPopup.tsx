/**
 * @createdBy Phill Anderson 2024/04/08
 */
import React, { ReactNode } from 'react'
import { useGlobalPopupCtx } from './useGlobalPopupCtx'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface IMainPopup {
    children: ReactNode
    width?: number
    maxWidth?: number
    title: string
}

function GlobalMainPopup({ children, title }: IMainPopup) {
    const { open, setOpen } = useGlobalPopupCtx()

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                {children}
            </DialogContent>
        </Dialog>
    )
}
export default GlobalMainPopup
