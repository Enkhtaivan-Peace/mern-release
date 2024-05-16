import React from 'react'
import { Flex } from '../../containers/flex/Flex'
import { TServerSideElement } from './_interfaces'

async function RadioBox(props: TServerSideElement) {
    const { id, name, value, label } = props
  return (
    <Flex className='gap-10'>
        <input type="radio" id={'radio-' + id} name={name} value={value} />
        <label htmlFor={'radio-' + id}>{label}</label>
    </Flex>
  )
}

export default RadioBox