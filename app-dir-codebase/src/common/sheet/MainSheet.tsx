import React, { ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'

interface IMainSheet extends JsxChildren {
    btnText: string
    side?: 'left' | 'right' | 'top' | 'bottom'
}

function MainSheet({ children, side, btnText }: IMainSheet) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">{btnText}</Button>
            </SheetTrigger>
            <SheetContent side={side}>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>Make changes to your profile here. Click save when you're done.</SheetDescription>
                </SheetHeader>
                {children}
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}

export default MainSheet
