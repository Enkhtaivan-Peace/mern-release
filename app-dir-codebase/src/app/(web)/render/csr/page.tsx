'use client'
import { Button } from '@/components/ui/button'
import { Wrapper } from '@/components/ui/containers/Wrapper'
import { Flex } from '@/components/ui/containers/flex/Flex'
import { NextPage } from 'next'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const CSRpage: NextPage = () => {
    const [num, setNum] = useState<number | null>(null)
    const { push } = useRouter()
    async function call() {
        const res = await fetch('http://localhost:3000/api/random')
        const { random } = await res.json()
        return random
    }

    useEffect(() => {
        call().then((res) => setNum(res))
    }, [])
    return (
        <Wrapper>
            <Flex className="flex-col gap-20">
                <h4>{num}</h4>
                <Button variant={'secondary'} onClick={() => push('/render/isr')}>
                    goto ISR Rendered page
                </Button>
            </Flex>
        </Wrapper>
    )
}

export default CSRpage
