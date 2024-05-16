import { Wrapper } from '@/components/ui/containers/Wrapper'
import AnimeDetail from '@/features/anime/AnimeDetail'
import { AnimeServices } from '@/features/anime/anime.services'
import { NextPage } from 'next'
import React, { Suspense } from 'react'

type TParams = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params: { id } }: TParams) {
    try {
        console.log('ene yu we', id)
        const animeDetail = await AnimeServices.getAnimeDetail({ id: +id })
        if (animeDetail.code === 404) {
            return {
                title: id,
                description: `энэ хуудас олдоогүй!!!`,
            }
        }
        return {
            title: animeDetail.name,
            description: `this is the page of ${animeDetail.name}`,
        }
    } catch (err) {
        return {
            title: 'NOT-FOUND',
            description: `энэ хуудас олдоогүй!!!`,
        }
    }
}

export async function generateStaticParams() {
    const animes = await AnimeServices.getAnimeList({
        page: 1,
        limit: 100,
    })
    return animes.map((anime: any) => ({
        id: anime.id.toString(),
    }))
}

const SSGDetailPage: NextPage = async ({ params }: any) => {
    const id = params.id
    // const data = await AnimeServices.getAnimeDetail({ id });
    return (
        <Wrapper>
            <h4>SSG DetailPage: {id}</h4>
            <Suspense fallback={<h3>уншжийнаа ...</h3>}>
                {/* <AnimeDetail data={data} /> */}
                <p>1</p>
            </Suspense>
        </Wrapper>
    )
}

export default SSGDetailPage
