'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

function GotoBtn() {
    const { push } = useRouter()
    return (
        <Button variant={'secondary'} onClick={() => push('/render/csr')}>
            goto Client Side Rendered page
        </Button>
    )
}

export default GotoBtn
