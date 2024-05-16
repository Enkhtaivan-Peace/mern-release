import React from 'react'
import { useGlobalPopupCtx } from '../useGlobalPopupCtx'
import { Flex } from '@/components/ui/containers/flex/Flex'
import GlobalMainPopup from '../GlobalMainPopup'

function DecisionPopup() {
    const { hideAllGlobalPopups, store } = useGlobalPopupCtx()
    console.log('store', store)

    async function handleOk() {
        await store.popupProps[0].popupProps.ok()
        hideAllGlobalPopups()
    }
    return (
        <GlobalMainPopup title="DecisionPopup">
            <Flex className="justify-evenly gap-10">
                <p>{store.popupProps[0].popupProps.message}</p>
                <button onClick={handleOk}>Ok</button>
                <button onClick={hideAllGlobalPopups}>Cancel</button>
            </Flex>
        </GlobalMainPopup>
    )
}

export default DecisionPopup
