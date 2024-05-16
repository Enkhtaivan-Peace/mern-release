import React from 'react'
import Image from 'next/image'
import { getTodoList } from './_todo-actions'
import { ITodo } from './_interfaces'
import moment from 'moment'
import 'moment/locale/mn';

async function TodoListTable( props:TListReq ) {
    const { search, page, limit } = props
    console.log('page props:', props)
    const todos = await getTodoList({ search, page, limit })

    if(!todos.data) {
      return <div className='w-full text-center'><p>ийм өгөгдөл олдсонгүй!</p></div>
    }

  return (
    <div className='table-wrapper'>
        <table>
            <colgroup>
                <col span={1} />
                <col span={2} />
                <col span={2} />
                <col span={2} />
                <col span={2} />
              </colgroup>
            <thead>
              <tr>
                  <th>нэр</th>
                  <th>зураг</th>
                  <th>дууссан эсэх</th>
                  <th>огноо</th>
              </tr>
            </thead>
            <tbody>
              {
                todos.data.map((todo:ITodo, idx:number) => (
                  <tr key={'todo' + idx}>
                    <td>{todo.name}</td>
                    <td><Image src={todo.photo} alt={'image of ' + todo.name} width={100} height={50} /></td>
                    <td>{ todo.isCompleted ? 'тийм' : 'үгүй' }</td>
                    <td>{ moment(todo.createdAt).locale('mn').format('lll') }</td>
                  </tr>
                )) 
              }
            </tbody>
        </table>
    </div>
  )
}

export default TodoListTable