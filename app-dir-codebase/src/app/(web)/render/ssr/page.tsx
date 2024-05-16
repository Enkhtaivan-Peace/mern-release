import { Wrapper } from '@/components/ui/containers/Wrapper'
import { Flex } from '@/components/ui/containers/flex/Flex'
import { fetchAnimes } from '@/features/anime/actions'
import { AnimeServices } from '@/features/anime/anime.services'
import GotoBtn from '@/features/render/ssr/GotoBtn'
import { getRandomNumber } from '@/features/render/ssr/_ssr-actions'
import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const SSRpage: NextPage = async () => {
    const { random } = await getRandomNumber()
    const data = await AnimeServices.getAnimeList({ page: 1 })
    console.log(data)
    return (
        <Wrapper>
            <Flex className="flex-col gap-20">
                <h4>number: {random || 'байхгүй'}</h4>

                <GotoBtn />
            </Flex>
            <ul className=" py-60">
                {data.map((item: any, idx: number) => (
                    <li key={idx} className=" py-10">
                        <Link href={'/render/ssr/' + item.id}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}

export default SSRpage
