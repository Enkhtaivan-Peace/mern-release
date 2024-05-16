'use client'
import { Button } from '@/components/ui/button'
import { Flex } from '@/components/ui/containers/flex/Flex'
import { Grid } from '@/components/ui/containers/grid/Grid'
import SlideDown from '@/components/ui/slide/SlideDown'
import SlideLeft from '@/components/ui/slide/SlideLeft'
import SlideRight from '@/components/ui/slide/SlideRight'
import SlideUp from '@/components/ui/slide/SlideUp'
import useSlide from '@/components/ui/slide/useSlide'
import React, { useState } from 'react'

const Slidepage = () => {
    const [isLeftOpen, setIsLeftOpen] = useState<boolean>(false)
    const [isRightOpen, setIsRightOpen] = useState<boolean>(false)

    const { isShow: isShowSlideUp, toggleSlide: handleSlideUp, ref: slideUpRef } = useSlide()
    const { isShow: isShowSlideDown, toggleSlide: handleSlideDown, ref: slideDownRef } = useSlide()

    return (
        <Grid className=" place-content-center h-screen">
            <Flex className=" gap-20">
                <div className=" relative">
                    <Button onClick={() => setIsLeftOpen((prev) => !prev)}>Slide Left</Button>
                    <SlideLeft isOpen={isLeftOpen} setIsOpen={setIsLeftOpen} style={{ top: '100%', right: 0 }}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </SlideLeft>
                </div>
                <div className=" relative">
                    <Button onClick={() => setIsRightOpen((prev) => !prev)}>Slide Right</Button>
                    <SlideRight isOpen={isRightOpen} setIsOpen={setIsRightOpen} style={{ top: '100%', right: 0 }}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </SlideRight>
                </div>
                <div ref={slideUpRef} className=" relative">
                    <Button onClick={handleSlideUp}>Slide up</Button>
                    <SlideUp isOpen={isShowSlideUp} setIsOpen={handleSlideUp}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </SlideUp>
                </div>
                <div ref={slideDownRef} className=" relative">
                    <Button onClick={handleSlideDown}>Slide Down</Button>
                    <SlideDown isOpen={isShowSlideDown} setIsOpen={handleSlideDown}>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </SlideDown>
                </div>
            </Flex>
        </Grid>
    )
}

export default Slidepage
