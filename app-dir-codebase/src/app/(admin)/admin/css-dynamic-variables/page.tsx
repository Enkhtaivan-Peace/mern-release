'use client'
import React, { useState } from 'react'
import './css-dynamic-vars.css'
import ParticleButton from '@/components/ui/button/particle-button/ParticleButton'
import { Button } from '@/components/ui/button'
import { Flex } from '@/components/ui/containers/flex/Flex'
const CssDynamicVariablesPage = () => {
    const [color, setColor] = useState('chocolate')

    const handleColorChange = () => {
        setColor((prev) => (prev === 'chocolate' ? 'green' : 'chocolate'))
    }

    return (
        <Flex className=" flex-col gap-10">
            <h3>CssDynamicVariablesPage:</h3>
            <Button variant="outline" onClick={handleColorChange}>
                Өнгийг минь солиод аль
            </Button>
            <div className="dynamic-vars-example">
                <p style={{ '--my-color': color } as React.CSSProperties}>This is my element</p>
            </div>
            <div className="dynamic-vars-example">
                <p>aaa</p>
            </div>
            <ParticleButton />
        </Flex>
    )
}

export default CssDynamicVariablesPage
