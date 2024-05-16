/**
 * @createdBy Phill Anderson 2022/11/15
 */
import React from 'react'
import tw from 'tailwind-styled-components'
import { IButton } from './_interface'
import { Button } from '../button'

export function StateButton(props: IButton) {
    const { onClick, children, isLoading } = props
    return <Button onClick={onClick}>{isLoading ? 'уншиж байна ...' : children}</Button>
}

export const BlueBtnTw = tw.button`
  bg-blue
`

export const RedBtnTw = tw.button`
  bg-red-300
`

export const GreenBtnTw = tw.button`
  bg-green
`

export const GhostBtnTw = tw.button`
  bg-transparent;
`
