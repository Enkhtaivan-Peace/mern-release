import { Flex } from '@/components/ui/containers/flex/Flex'
import React from 'react'

const BoxPage = () => {
    const wrapper = '<Wrapper />'
    const spacer = '<Flex />'
    const formRow = '<FormRow />'
    return (
        <Flex className="flex-col gap-20">
            <h3>Box Model concept: </h3>
            <ol>
                <li>
                    1. Container box: <code>{wrapper}</code> - компонэнтийг дуудна
                </li>
                <li>
                    2. Spacer box: <code>{spacer}</code> - компонэнтийг дуудна. Форм дээр <code>{formRow}</code> -
                    компонэнтийг дуудна
                </li>
            </ol>
        </Flex>
    )
}

export default BoxPage
