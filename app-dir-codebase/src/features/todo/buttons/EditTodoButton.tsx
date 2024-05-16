'use client'
import { POPUP_TYPES } from '@/common/popup/pagePopup/pagePopupRegistration'
import { usePagePopupCtx } from '@/common/popup/pagePopup/usePagePopupCtx'
import { Button } from '@/components/ui/button'
import React from 'react'
import { MdOutlineModeEditOutline } from 'react-icons/md'
import { ITodo } from '../_interfaces'
export interface IEditTodoBtn {
    todo: ITodo
}
function EditTodoButton(props: IEditTodoBtn) {
    const { todo } = props

    const { showPopup, setPopupState } = usePagePopupCtx()

    // server actions - аар edit хийх үед амжилттай edit function ажилласны дараа
    // popup - ийг хаах боломжгүй. учир нь popup нь client талд ажиллаж байгаа.
    // тиймээс popup - ийн оронд dialog ашиглавал болох юм шиг бна.
    async function handleClick() {
        showPopup(POPUP_TYPES.TODO_EDIT)
        setPopupState((prev: any) => ({
            ...prev,
            todo,
        }))
    }

    return (
        <Button variant="ghost" onClick={handleClick}>
            <MdOutlineModeEditOutline />
        </Button>
    )
}

export default EditTodoButton
