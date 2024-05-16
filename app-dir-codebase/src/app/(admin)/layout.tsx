import { AdminGlobalProvider } from '@/common/global/useAdminGlobalCtx'
import { GlobalPopupProvider } from '@/common/popup/globalPopup/useGlobalPopupCtx'
import AdminFooter from '@/components/layout/admin/AdminFooter'
import AdminHeader from '@/components/layout/admin/header/AdminHeader'
import AdminMain from '@/components/layout/admin/main/AdminMain'
import AdminMainContent from '@/components/layout/admin/main/AdminMainContent'
import AdminSidebar from '@/components/layout/admin/sidebar/AdminSidebar'
import { Flex } from '@/components/ui/containers/flex/Flex'
import React from 'react'
import tw from 'tailwind-styled-components'

export const metadata = {
    title: 'Dashboard',
    description: 'Admin Dashboard',
}

export default function AdminLayout({ children }: JsxChildren) {
    return (
        <AdminGlobalProvider>
            <GlobalPopupProvider>
                <AdminLayoutTw>
                    <AdminHeader />
                    <AdminMainContent children={children} />
                </AdminLayoutTw>
            </GlobalPopupProvider>
        </AdminGlobalProvider>
    )
}

const AdminLayoutTw = tw.div`
    flex 
    flex-col
    w-full
    md:min-h-screen
    relative
    bg-white
    dark:bg-gray-400
`
