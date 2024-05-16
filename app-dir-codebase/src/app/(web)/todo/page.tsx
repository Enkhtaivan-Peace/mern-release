import { PagePopupProvider } from '@/common/popup/pagePopup/usePagePopupCtx'
import { Wrapper } from '@/components/ui/containers/Wrapper'
import TodoAddFormClient from '@/features/todo/form/TodoAddFormClient'
import TodoAddFormServer from '@/features/todo/form/TodoAddFormServer'
import TodoList from '@/features/todo/TodoList'
import { NextPage } from 'next'
import React from 'react'

const TodoPage: NextPage = (props: TPageProps) => {
    const { searchParams } = props
    return (
        <PagePopupProvider>
            <Wrapper>
                <h2>Зөвхөн server actions ашиглан todo list бүхий crud хийж чадах уу?</h2>
                <TodoAddFormServer />
                {/* <TodoAddFormClient /> */}
                <hr />
                <TodoList searchParams={searchParams} />
            </Wrapper>
        </PagePopupProvider>
    )
}

export default TodoPage
