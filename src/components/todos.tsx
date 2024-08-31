"use client"

import { useTodos } from '@/store/todos'
import React from 'react'

const Todos = () => {

    const {todos} = useTodos()
    let filtertodos = todos
  return (
    <ul>

        {
            filtertodos.map((todo)=>{
                return <li key={todo.id}>
                    {
                        <input type="checkbox" name="" id={`Todo - ${todo.id}`} checked={todo.complete} onChange={()=> toggleTodoAsCompleted(todo.id)}/>
                    }
                </li>
            })
        }

    </ul>
  )
}

export default Todos