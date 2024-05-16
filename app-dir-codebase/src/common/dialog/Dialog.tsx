'use client'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useRef, useEffect } from 'react'
import styled from 'styled-components'
type TDialog = {
    title: string
    onClose: () => void
    onOk: () => void
    children: React.ReactNode
}

function Dialog({ title, onClose, onOk, children }: TDialog): JSX.Element | null {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get('showDialog')

    useEffect(() => {
        if (showDialog === 'y') {
            dialogRef.current?.show()
        } else {
            dialogRef.current?.close()
        }
    }, [showDialog])

    const closeDialog = () => {
        dialogRef.current?.close()
        onClose()
        router.push('/admin/dialog')
    }

    const clickOk = () => {
        onOk()
        closeDialog()
    }

    return (
        <>
            {showDialog === 'y' ? (
                <DialogWrapper ref={dialogRef} className=" bg-slate-300">
                    <DialogInner>
                        <DialogHeader className=" bg-slate-400">
                            <h1>{title}</h1>
                            <Button variant="ghost" onClick={closeDialog}>
                                X
                            </Button>
                        </DialogHeader>
                        <DialogContent>
                            {children}
                            <div className="flex flex-row justify-end">
                                <Button variant="outline" onClick={clickOk}>
                                    ok
                                </Button>
                            </div>
                        </DialogContent>
                    </DialogInner>
                </DialogWrapper>
            ) : null}
        </>
    )
}

const DialogWrapper = styled.dialog`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    backdrop-filter: blur(50%);
    background-color: rgba(72, 72, 72, 0.5);
`
const DialogInner = styled.div`
    max-width: 100%;
    background: rgba(0, 0, 0, 0.4)
    display:flex;
    flex-direction:column;
`

const DialogHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    padding: 10px 20px;
    background: yellow;
`

const DialogContent = styled.div`
    padding: 10px 15px;
`

export default Dialog
