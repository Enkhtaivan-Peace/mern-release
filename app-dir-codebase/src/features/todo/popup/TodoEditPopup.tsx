import MainPopup from '@/common/popup/pagePopup/PageMainPopup'
import { usePagePopupCtx } from '@/common/popup/pagePopup/usePagePopupCtx'
import { Button } from '@/components/ui/button'
import React from 'react'
import TodoEditForm from '../form/TodoEditForm'

function TodoEditPopup() {
    const { popupState } = usePagePopupCtx()
    console.log(popupState)
    return (
        <MainPopup title="Edit todo">
            <TodoEditForm todo={popupState.todo} />
        </MainPopup>
    )
}

export default TodoEditPopup
