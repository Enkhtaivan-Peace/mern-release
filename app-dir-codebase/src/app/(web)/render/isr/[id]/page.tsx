import { Wrapper } from '@/components/ui/containers/Wrapper'
import AnimeDetail from '@/features/anime/AnimeDetail'
import { AnimeServices } from '@/features/anime/anime.services'
import { NextPage } from 'next'
import React, { Suspense } from 'react'

const ISrDetailPage: NextPage = async (props: any) => {
    const id = props.params.id
    const data = await AnimeServices.getAnimeDetail(id)
    return (
        <Wrapper>
            <h4>ISrDetailPage: {id}</h4>
            <Suspense fallback={<h3>уншжийнаа ...</h3>}>
                <AnimeDetail data={data} />
            </Suspense>
        </Wrapper>
    )
}

export default ISrDetailPage
