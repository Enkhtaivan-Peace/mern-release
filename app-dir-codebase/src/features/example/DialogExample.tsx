import React from 'react'
import Dialog from '@/common/dialog/Dialog'
import Link from 'next/link'

function DialogExample() {
    async function handleClose() {
        'use server'
        console.log('handleClose')
    }

    async function handleOk() {
        'use server'
        console.log('handleOk')
    }
    return (
        <div>
            <Dialog title="Example Dialog" onClose={handleClose} onOk={handleOk}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim totam quos, nam, voluptas sit deleniti
                    consequatur cum omnis repellat quidem doloremque dolor culpa nostrum. Illum suscipit optio molestiae
                    deserunt mollitia!
                </p>
            </Dialog>
            <Link href={'/admin/dialog?showDialog=y'}>show dialog</Link>
        </div>
    )
}

export default DialogExample
