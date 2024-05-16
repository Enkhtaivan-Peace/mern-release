'use client'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { fetchAnimes } from './actions'
import { useState, useEffect } from 'react'

let page = 2
export type AnimeCard = JSX.Element

function AnimeLoadMore() {
    const { ref, inView } = useInView()
    const [data, setData] = useState<AnimeCard[]>([])

    useEffect(() => {
        if (inView) {
            fetchAnimes(page).then((res) => {
                setData((prev) => [...prev, ...res])
                page++
            })
        }
    }, [inView])

    return (
        <>
            <section className="auto-grid">{data}</section>
            <div ref={ref}>
                <Image src="./spinner.svg" alt="spinner" width={56} height={56} className="object-contain" />
            </div>
        </>
    )
}

export default AnimeLoadMore
