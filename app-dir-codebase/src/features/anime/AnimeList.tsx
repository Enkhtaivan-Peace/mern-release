import React from 'react'
import { fetchAnimes } from './actions'
import AnimeCard from './AnimeCard'

export interface IAnimeProp {
    id: string
    name: string
    image: {
        original: string
    }
    kind: string
    episodes: number
    episodes_aired: number
    score: string
}

async function AnimeList() {
    const data = await fetchAnimes(1)
    return <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">{data}</section>
}

export default AnimeList
