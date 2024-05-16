
import React from 'react'
import { TableProvider } from './useTableCtx'

interface ITable extends JsxChildren {}
function Table({ children }: ITable) {
    return <TableProvider>{children}</TableProvider>
}

export default Table
