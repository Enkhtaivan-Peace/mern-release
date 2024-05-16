import React, { useEffect } from 'react'
import { useFormCtx } from './useFormCtx'
import { TFormState, TFormValue } from './formReducer'

type TUseFormOptions = {
    initCase: any
}

function useForm<T>(data?: T, options?: TUseFormOptions) {
    const { formState, formDispatch } = useFormCtx()

    function createInitFormPayload(data: T): Partial<T> {
        if (data) {
            const fieldNames = Object.keys(data) as Array<keyof T>
            const partialFormState: Partial<T> = {}

            fieldNames.forEach((fieldName) => {
                partialFormState[fieldName] = data[fieldName]
            })

            return partialFormState
        }
        return {}
    }
    function onChange(e: React.ChangeEvent<HTMLFormElement>, isCheckbox?: boolean) {
        const { value, name } = e.target
        const theValue = isCheckbox ? e.target.checked.toString() : value.trim()

        formDispatch({
            type: 'CHANGE',
            payload: { fieldName: name as keyof TFormState, value: theValue },
        })
    }

    // event авахгүйгээр форм руу set хийх функц
    function onChangeWithoutEvent(name: string, value: string) {
        formDispatch({
            type: 'CHANGE',
            payload: { fieldName: name as keyof TFormState, value },
        })
    }

    function onChangeGroupCheckbox(groupName: string, fieldName: keyof TFormState, value: boolean) {
        formDispatch({
            type: 'CHECKBOX_GROUP_CHANGE',
            payload: {
                groupName,
                fieldName,
                value: value.toString(),
            },
        })
    }

    function onChangeFile(e: React.ChangeEvent<HTMLFormElement>) {
        const { files, name } = e.target
        console.log('file', e.target.files)
        formDispatch({
            type: 'CHANGE',
            payload: { fieldName: name as keyof TFormState, value: files[0] },
        })
    }

    function onChangeGroupList(listName: string, idx: number, fieldName: keyof TFormState, value: TFormValue) {
        formDispatch({
            type: 'UPDATE_LIST',
            payload: {
                listName,
                idx,
                fieldName,
                value,
            },
        })
    }

    function onError(errors: any) {
        if (errors === null) {
            return
        }
        formDispatch({
            type: 'SET_ERRORS',
            payload: errors,
        })
    }

    function resetFormField(fieldName: string) {
        formDispatch({
            type: 'RESET_FORM_FIELD',
            payload: { fieldName },
        })
    }

    // формын тухайн талбарын error - ийг set - лэнэ
    function setErrorField(fieldName: string, error: string) {
        formDispatch({
            type: 'SET_ERROR_FIELD',
            payload: { fieldName, error },
        })
    }

    // формын тухайн талбар луу value set - лэнэ
    function setValueField(fieldName: string, value: string) {
        formDispatch({
            type: 'SET_VALUE_FIELD',
            payload: { fieldName, value },
        })
    }

    // function addField(fieldName:string) {
    //     const newCreator = {
    //         creatorName: { value: null, error: null },
    //         creatorId: { value: null, error: null },
    //     }
    //     formDispatch({
    //         type: 'ADD_LIST',
    //         payload: {
    //             fieldName,
    //             value: [...formState[fieldName], newCreator],
    //         },
    //     })
    // }

    // function removeField(indexToRemove:number, fieldName:string) {
    //     const updatedCreatorList = [...formState[fieldName]]
    //     updatedCreatorList.splice(indexToRemove, 1)
    //     formDispatch({
    //         type: 'MINUS_LIST',
    //         payload: { fieldName, value: updatedCreatorList },
    //     })
    // }
    // function onChangeField(e, idx, fieldName) {
    //     const { value, name } = e.target
    //     onChangeGroupList(fieldName, idx, name, value)
    // }

    useEffect(() => {
        if (data) {
            const initFormState = createInitFormPayload(data)
            formDispatch({
                type: 'INIT_FORM_STATE',
                payload: initFormState as TFormState,
            })
        }
    }, [options?.initCase])

    return {
        onChange,
        onChangeFile,
        onChangeGroupCheckbox,
        onChangeWithoutEvent,
        onError,
        formState,
        resetFormField,
        setErrorField,
        setValueField,
        onChangeGroupList,
    }
}

export default useForm
