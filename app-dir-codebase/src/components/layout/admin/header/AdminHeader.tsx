'use client'
import React from 'react'
import { AdminHeaderProvider } from './useAdminHeaderCtx'
import AdminHeaderUi from './AdminHeaderUi'

function AdminHeader() {
    return (
        <AdminHeaderProvider>
            <AdminHeaderUi />
        </AdminHeaderProvider>
    )
}

export default AdminHeader
