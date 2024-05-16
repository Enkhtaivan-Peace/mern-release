import React from 'react'
import { useGlobalPopupCtx } from '../useGlobalPopupCtx'
import { Flex } from '@/components/ui/containers/flex/Flex'
import GlobalMainPopup from '../GlobalMainPopup'

function InfoPopup(): JSX.Element {
    const { hideGlobalPopup, hideAllGlobalPopups } = useGlobalPopupCtx()
    return (
        <GlobalMainPopup title="Info popup">
            <p className="text-pink">ongoo awch bnaa</p>
            <Flex className="flex-col gap-10">
                <button onClick={hideGlobalPopup}>hide this popup</button>
                <button onClick={hideAllGlobalPopups}>hide all popups!!</button>
            </Flex>
        </GlobalMainPopup>
    )
}

export default InfoPopup
