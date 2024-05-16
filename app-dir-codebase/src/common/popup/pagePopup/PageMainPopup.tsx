/**
 * @createdBy Phill Anderson 2024/04/08
 */
import React, { ReactNode } from 'react'
import { usePagePopupCtx } from './usePagePopupCtx'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface IMainPopup {
    children: ReactNode
    width?: number
    maxWidth?: number
    title: string
}

function PageMainPopup({ children, title }: IMainPopup) {
    const { open, setOpen } = usePagePopupCtx()
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

export default PageMainPopup
