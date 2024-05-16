import { Button } from '@/components/ui/button'
import { Flex } from '@/components/ui/containers/flex/Flex'
import { NextPage } from 'next'
import React from 'react'
import { BsArrowDownLeftCircle } from 'react-icons/bs'
const ButtonPage: NextPage = () => {
    return (
        <div>
            <h2>Buttons</h2>
            <Flex className="flex-col gap-20">
                <div>
                    <Button>default button</Button>
                </div>
                <div>
                    <Button variant="outline">outline button</Button>
                </div>
                <div>
                    <Button variant="destructive">Destructive button</Button>
                </div>
                <div>
                    <Button variant="ghost">Ghost button</Button>
                </div>
                <div>
                    <Button variant="link">Link button</Button>
                </div>
                <div>
                    <Button variant="secondary">Secondary button</Button>
                </div>
                <div>
                    <h4>button sizes:</h4>
                    <Flex className="gap-20 flex-col">
                        <div>
                            <Button>default size button</Button>
                        </div>
                        <div>
                            <Button size="lg">large size button</Button>
                        </div>
                        <div>
                            <Button size="sm">small button</Button>
                        </div>
                        <div>
                            <Button size="icon" variant="ghost">
                                <BsArrowDownLeftCircle />
                            </Button>
                        </div>
                    </Flex>
                </div>
            </Flex>
        </div>
    )
}

export default ButtonPage
