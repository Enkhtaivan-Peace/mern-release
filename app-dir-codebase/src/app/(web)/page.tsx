import { NextPage } from 'next'
import AnimeLoadMore from '@/features/anime/AnimeMore'
import { fetchAnimes } from '@/features/anime/actions'
import Hero from '@/components/layout/web/Hero'

const WebHomePage: NextPage = async () => {
    const data = await fetchAnimes(1)

    return (
        <main className="sm:p-16 py-16 px-8 flex flex-col gap-10 max-w-7xl mx-auto">
            <Hero />
            <h2 className="text-3xl text-white font-bold">Explore Anime</h2>
            <section className="auto-grid">{data}</section>
            <AnimeLoadMore />
        </main>
    )
}
export default WebHomePage
