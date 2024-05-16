import MainPopup from '@/common/popup/pagePopup/PageMainPopup'
import { usePagePopupCtx } from '@/common/popup/pagePopup/usePagePopupCtx'
import { Button } from '@/components/ui/button'
import React from 'react'
import CachedTodoEditForm from '../form/cachedTodoEditForm/CachedTodoEditForm'
import { FormProvider } from '@/components/ui/form/store/useFormCtx'

function CachedTodoEditPopup() {
    const { popupState } = usePagePopupCtx()
    console.log(popupState)
    return (
        <MainPopup title="Cached Edit todo">
            <FormProvider>
                <CachedTodoEditForm todo={popupState.todo} />
            </FormProvider>
        </MainPopup>
    )
}

export default CachedTodoEditPopup
