import dynamic from 'next/dynamic'
const TodoEditPopup = dynamic(() => import('@/features/todo/popup/TodoEditPopup'))
const CachedTodoEditPopup = dynamic(() => import('@/features/todo-cached/popup/CachedTodoEditPopup'))

export const POPUP_TYPES = {
    TODO_EDIT: 'TODO_EDIT',
    CACHED_TODO_EDIT: 'CACHED_TODO_EDIT',
}
export type POPUP_TYPE = (typeof POPUP_TYPES)[keyof typeof POPUP_TYPES]
export type POPUP_COMPONENTS_TYPE = {
    [key in POPUP_TYPE]: React.ComponentType<any>
}

export const POPUP_COMPONENTS: POPUP_COMPONENTS_TYPE = {
    [POPUP_TYPES.TODO_EDIT]: TodoEditPopup,
    [POPUP_TYPES.CACHED_TODO_EDIT]: CachedTodoEditPopup,
}
