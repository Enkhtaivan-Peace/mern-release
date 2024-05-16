import React from 'react'
import tw from 'tailwind-styled-components'

interface IIconBtn extends TButton, JsxChildren {}

function IconBtn({ children, onClick }: IIconBtn) {
    return <IconButton onClick={onClick}>{children}</IconButton>
}

const IconButton = tw.button`
    bg-transparent
`

export default IconBtn
