import { Wrapper } from '@/components/ui/containers/Wrapper'
import { AnimeServices } from '@/features/anime/anime.services'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const SSGPage: NextPage = async () => {
    const data = await AnimeServices.getAnimeList({ page: 1, limit: 50 })

    return (
        <Wrapper>
            <h1>SSG list page: </h1>
            <ul className=" py-60">
                {data.map((item: any, idx: number) => (
                    <li key={idx} className=" py-10">
                        <Link href={'/render/ssg/' + item.id}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}

export default SSGPage
