'use client'
import React, { useEffect, useState } from 'react'
import { ITodo } from './_interfaces'
import CachedTodoListItem from './CachedTodoListItem'
import './_todo.css'
import { getTodoList } from './_todo-actions'
import PaginateComplex from '@/components/ui/pagination/old/PaginateComplex'
import { Flex } from '@/components/ui/containers/flex/Flex'
import { useQuery, keepPreviousData } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

interface ITodoList extends TPageProps {}

function CachedTodoList() {
    const searchPrms = useSearchParams()

    const search = searchPrms.get('search')
    const page = searchPrms?.get('page') || '1'
    const limit = searchPrms?.get('limit') || '10'

    const urlParams = {
        search,
        page,
        limit,
    }

    console.log('searchPrms', search, page, limit)

    const [searchParams, setSearchParams] = useState<TSearchParams>(urlParams)

    useEffect(() => {
        setSearchParams(urlParams)
    }, [searchPrms])

    // САНАМЖ:
    // заавал setState - ээр дамжсан утгыг  cache key - рүү дамжуулж хадгалах хэрэгтэй
    const { data, isPending, isError, error, isFetching } = useQuery({
        queryKey: ['todos', { page: searchParams }],
        queryFn: async (): Promise<TRes<ITodo[]>> => {
            const result = await getTodoList({
                search: searchParams.search,
                page: +searchParams.page!,
                limit: +searchParams.limit!,
            })
            return result
        },

        placeholderData: keepPreviousData,
    })

    if (isPending) return <div>хүлээгдэж байна.</div>
    if (isError) return <div>алдаа гарлаа.</div>
    if (isFetching) return <div>татагдаж байна.</div>

    return (
        <Flex className=" flex-col w-full">
            <PaginateComplex {...data?.paginate!} />
            {data?.data?.map((todo: ITodo, idx: number) => (
                <CachedTodoListItem key={'todo-' + idx} {...todo} />
            ))}
        </Flex>
    )
}

export default CachedTodoList
