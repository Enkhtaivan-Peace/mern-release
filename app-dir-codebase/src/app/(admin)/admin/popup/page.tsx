'use client'
import { GLOBAL_POPUP_TYPES } from '@/common/popup/globalPopup/globalPopupRegistration'
import { useGlobalPopupCtx } from '@/common/popup/globalPopup/useGlobalPopupCtx'
import { PagePopupProvider } from '@/common/popup/pagePopup/usePagePopupCtx'
import { DrawerDialogDemo } from '@/common/popup/shadcnPopup/DrawerDialog'
import { Button } from '@/components/ui/button'
import { OrderedList } from '@/components/ui/list/list-ui-utils'
import { DangerText, UnderlineText } from '@/components/ui/typography/typography-utils'
import React, { useCallback } from 'react'

const PopupPage = () => {
    const { showGlobalPopup } = useGlobalPopupCtx()

    const handleShowPopup = useCallback(() => {
        showGlobalPopup(GLOBAL_POPUP_TYPES.ALERT, { message: 'hello' })
    }, [])

    return (
        <PagePopupProvider>
            <div>
                <h2>Popup үүсгэхэд анхаарах зүйлс:</h2>
                <OrderedList>
                    <li>
                        Аливаа popup нь <DangerText>Global</DangerText> ба <DangerText>Page</DangerText> гэсэн үндсэн 2
                        төрөлтэй байна.
                    </li>
                    <li>
                        {' '}
                        Popup үүсгэх: <br />
                        <ol>
                            <li>
                                <DangerText>Global</DangerText> popup - ийг{' '}
                                <UnderlineText>common/popup/globalPopup/choices</UnderlineText> хавтаст үүсгэнэ.
                            </li>
                            <li>
                                <DangerText>Page</DangerText> popup - ийг өөрийнх нь feature дотор popup хавтас нээж
                                дотор нь үүсгэх.
                            </li>
                        </ol>
                    </li>
                    <li>
                        Үүсгэсэн Popup - ийг бүртгэх:
                        <ol>
                            <li>
                                <DangerText>Global</DangerText> popup - ийг{' '}
                                <UnderlineText>common/popup/globalPopup/globalPopupRegistration.ts</UnderlineText> файл
                                дотор зааврын дагуу бүртгэлжүүлнэ.
                            </li>
                            <li>
                                <DangerText>Page</DangerText> popup - ийг{' '}
                                <UnderlineText>common/popup/pagePopup/pagePopupRegistration.ts</UnderlineText> файл
                                дотор зааврын дагуу бүртгэлжүүлнэ.
                            </li>
                        </ol>
                    </li>

                    <li>
                        Popup - ийг дуудаж харуулах:
                        <ol>
                            <li>
                                Тухайн page - ээ <DangerText>PopupProvider</DangerText> - аар бүрнэ. / нийт app - ийг
                                биш шүү! /
                            </li>
                            <li>
                                <ol>
                                    <li>
                                        Харуулах ui component дотроо хэрэв <UnderlineText>global Popup</UnderlineText>{' '}
                                        харуулах бол <DangerText>useGlobalPopupCtx</DangerText> hook - ээс{' '}
                                        <UnderlineText>showGlobalPopup</UnderlineText> функцийг зааврын дагуу дуудна.
                                    </li>
                                    <li>
                                        Харуулах ui component дотроо хэрэв <UnderlineText>page Popup</UnderlineText>{' '}
                                        харуулах бол <DangerText>usePagePopupCtx</DangerText> hook - ээс{' '}
                                        <UnderlineText>showPagePopup</UnderlineText> функцийг зааврын дагуу дуудна.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </li>
                </OrderedList>
                <Button variant="secondary" onClick={handleShowPopup}>
                    example popup
                </Button>
                {/* <DrawerDialogDemo /> */}
            </div>
        </PagePopupProvider>
    )
}

export default PopupPage
