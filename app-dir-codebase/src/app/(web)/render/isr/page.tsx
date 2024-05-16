import { Wrapper } from '@/components/ui/containers/Wrapper'
import { AnimeServices } from '@/features/anime/anime.services'
import { getRandomNumber } from '@/features/render/ssr/_ssr-actions'
import Link from 'next/link'
import React from 'react'

type TParams = {
    params: {
        params: { id: string }
        searchParams: { [key: string]: string | string[] | undefined }
    }
}

export async function generateStaticParams() {
    const preRenderedAnimeList = await AnimeServices.getAnimeList({
        page: 1,
        limit: 20,
    })
    return preRenderedAnimeList.map((anime: any, idx: number) => ({
        id: anime.id.toString(),
    }))
}

const ISRPage = async ({ params }: TParams) => {
    const data = await AnimeServices.get_ISR_AnimeList({ page: 1 })
    // const data = await AnimeServices.getAnimeList({ page: 1 });
    console.log('aaaa', data)
    const { random } = await getRandomNumber()
    return (
        <Wrapper>
            <h1>ISR list page: </h1>
            <h4>number: {random || 'байхгүй'}</h4>
            <p>
                <strong>number</strong> яагаад refresh хийхэд өөрчлөгдөхгүй байгаа вэ гэвэл, nextjs - ийн cache - д
                revalidate: 5 гэж тохируулсан учраас 5 секундын дараа refresh хийхэд шинээр дуудагдаж ажиллана{' '}
            </p>
            <ul className=" py-60">
                {data.map((item: any, idx: number) => (
                    <li key={idx} className=" py-10">
                        <Link href={'/render/isr/' + item.id}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </Wrapper>
    )
}

export default ISRPage
