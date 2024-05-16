import { wait } from '@/common/delay/timer'
import React from 'react'

async function PostsPage() {
    await wait(5000)
    // throw new Error("aldaa");
    return <div>PostsPage</div>
}

export default PostsPage
