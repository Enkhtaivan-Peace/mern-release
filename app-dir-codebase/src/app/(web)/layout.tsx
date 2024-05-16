import { SiteGlobalProvider } from '@/common/global/useSiteGlobal'
import { GlobalPopupProvider } from '@/common/popup/globalPopup/useGlobalPopupCtx'
import Footer from '@/components/layout/web/footer/Footer'
import ClientHeader from '@/components/layout/web/header/ClientHeader'
import Header from '@/components/layout/web/header/Header'

export default function WebLayout({ children }: JsxChildren) {
    return (
        <SiteGlobalProvider>
            <GlobalPopupProvider>
                <ClientHeader>
                    <Header />
                </ClientHeader>
                <main className="my-0 py-16">{children}</main>
                <Footer />
            </GlobalPopupProvider>
        </SiteGlobalProvider>
    )
}
