import { Wrapper } from '@/components/ui/containers/Wrapper'
import { NextPage } from 'next'
import React from 'react'

const SsrDetailPage: NextPage = (props: any) => {
    const id = props.params.id
    return <Wrapper>{id}</Wrapper>
}

export default SsrDetailPage
