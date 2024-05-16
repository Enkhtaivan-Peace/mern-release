'use client'
/**
 * @createdBy Phill Anderson 2023/07/26
 */
import React, { CSSProperties, useRef } from 'react'
import { IMain } from './_interface'
import tw from 'tailwind-styled-components'
import useElementPosition from '@/common/window/useElementPosition'
import { useWindowSize } from 'usehooks-ts'

function AdminMain(props: IMain): JSX.Element {
    const { children } = props
    const ref = useRef(null)
    useElementPosition(ref, { globalName: 'adminMain', isAdminSide: true })

    const windowSize = useWindowSize()
    const style: CSSProperties = {
        paddingLeft: windowSize.width < 1024 ? `0px` : `200px`,
    }
    return (
        <MainTw ref={ref} style={style}>
            <div className="p-20">{children}</div>
        </MainTw>
    )
}

const MainTw = tw.main`
  w-full
  min-h-[100vh]
`

export default AdminMain
