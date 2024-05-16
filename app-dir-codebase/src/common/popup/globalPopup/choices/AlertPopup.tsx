'use client'
import React from 'react'
import GlobalMainPopup from '../GlobalMainPopup'
import { Button } from '@/components/ui/button'
import { useGlobalPopupCtx } from '../useGlobalPopupCtx'
import { DialogDescription } from '@/components/ui/dialog'
import { GLOBAL_POPUP_TYPES } from '../globalPopupRegistration'

function AlertPopup() {
    const { store, showGlobalPopup } = useGlobalPopupCtx()
    const message = store.popupProps.at(-1)?.popupProps.message
    console.log('message: ' + JSON.stringify(message))
    return (
        <GlobalMainPopup title="AlertPopup">
            <DialogDescription>{message}</DialogDescription>
            <Button variant="outline" onClick={() => showGlobalPopup(GLOBAL_POPUP_TYPES.INFO)}>
                Ok
            </Button>
        </GlobalMainPopup>
    )
}
export default AlertPopup
