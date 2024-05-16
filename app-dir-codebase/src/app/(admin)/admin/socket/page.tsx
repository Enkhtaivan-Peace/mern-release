import ExampleSocketForm from '@/common/socket/example/ExampleSocketForm'
import Messages from '@/common/socket/example/Messages'
import { SocketProvider } from '@/common/socket/useSocketCtx'
import React from 'react'

function SocketPage() {
    return (
        <div>
            <h4>SocketPage</h4>
            <SocketProvider>
                <ExampleSocketForm />
                <Messages />
            </SocketProvider>
        </div>
    )
}

export default SocketPage
