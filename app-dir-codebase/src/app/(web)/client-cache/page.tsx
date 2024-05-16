import { PagePopupProvider } from '@/common/popup/pagePopup/usePagePopupCtx'
import { Wrapper } from '@/components/ui/containers/Wrapper'
import { Flex } from '@/components/ui/containers/flex/Flex'
import CachedTodoList from '@/features/todo-cached/CachedTodoList'
import { NextPage } from 'next'
import React from 'react'

const ClientCachePage: NextPage = () => {
    return (
        <PagePopupProvider>
            <Wrapper>
                <Flex className="w-full gap-20">
                    <CachedTodoList />
                </Flex>
            </Wrapper>
        </PagePopupProvider>
    )
}

export default ClientCachePage
