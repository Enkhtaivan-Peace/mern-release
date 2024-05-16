import React from 'react'
import tw from 'tailwind-styled-components'
import { GrFormClose } from 'react-icons/gr'
// import { TButton } from '@/common/types/common'

// children?: React.ReactNode;
// size?: string | number;
// color?: string;
// title?: string;

type TCloseBtn = Pick<TButton, 'onClick'>

function CloseBtn({ onClick }: TCloseBtn) {
    return (
        <CloseBtnTw onClick={onClick}>
            <GrFormClose size={32} />
        </CloseBtnTw>
    )
}

const CloseBtnTw = tw.button`
  bg-transparent
  dark:!bg-transparent
`

export default CloseBtn
