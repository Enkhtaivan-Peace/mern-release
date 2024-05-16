import { Flex } from '@/components/ui/containers/flex/Flex'
import InputSearchUnControl from '@/components/ui/form/elements/input/search/InputSearchUnControl'
import Paginate from '@/components/ui/pagination/old/Paginate'
import PaginateComplex from '@/components/ui/pagination/old/PaginateComplex'
import TodoListTable from '@/features/todo/TodoListTable'
import { getTodoList } from '@/features/todo/_todo-actions'
import { NextPage } from 'next'
import Link from 'next/link'
import React, { Suspense } from 'react'
import { BsPlusSquareDotted } from 'react-icons/bs'

const SearchPage: NextPage = async (props: TPageProps) => {
    const { searchParams } = props

    const search = searchParams?.search || null
    const page = Number(searchParams?.page) || 1
    const limit = Number(searchParams?.limit) || 10
    const todos = await getTodoList({ search, page, limit })
    console.log('todos', todos)
    const pagination = todos.paginate!

    return (
        <div>
            <Flex className="flex-col gap-30">
                <Link
                    href={'/admin/search/add'}
                    className="flex gap-10 items-center bg-emerald-500 w-fit py-5 px-20 rounded text-white"
                >
                    <p>Шинээр нэмэх</p>
                    <BsPlusSquareDotted />
                </Link>
                <InputSearchUnControl id="search-input" name={'search'} placeholder="шүүлт хийх ..." />
            </Flex>
            <div className="py-30">
                <Suspense key={'todolisttable-' + page} fallback={'уншиж байна ...'}>
                    <TodoListTable search={search} page={page} limit={limit} />
                </Suspense>
            </div>
            <div className="mt-10 flex w-full">
                {/* <Paginate {...pagination} /> */}
                <PaginateComplex {...pagination} />
            </div>
        </div>
    )
}

export default SearchPage
