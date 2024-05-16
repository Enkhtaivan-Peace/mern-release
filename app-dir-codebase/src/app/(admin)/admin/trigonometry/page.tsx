import { PagePopupProvider } from '@/common/popup/pagePopup/usePagePopupCtx'
import TrigonoMetryPage from '@/features/trigonometry/TrigonoMetryPage'
import React from 'react'

const Trigonometry = () => {
    return (
        <PagePopupProvider>
            <TrigonoMetryPage />
        </PagePopupProvider>
    )
}

export default Trigonometry
