"use client"

import { Todo, useTodos } from '@/store/todos'
import React from 'react'
import { useSearchParams } from 'next/navigation'


const Todos = () => {

    const searchParams = useSearchParams()
    const todosFilter = searchParams.get("todos")

    const {todos, toggleTodoAsCompleted, handleTodoDelete} = useTodos()
    let filtertodos = todos

    console.log(todosFilter)
    if (todosFilter === "active"){
        filtertodos = filtertodos.filter((todo)=> !todo.complete)
    }else if (todosFilter === "completed"){
        filtertodos = filtertodos.filter((todo)=> todo.complete)
    }

    return (
        <ul>

            {
                filtertodos.map((todo: Todo)=>{
                    return(
                    <li key={todo.id}>
                        <input type="checkbox" name="" id={`Todo - ${todo.id}`} checked={todo.complete} onChange={()=> toggleTodoAsCompleted(todo.id)}/>
                        <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>

                        {
                            todo.complete && (
                                    <button type="submit" onClick={()=> handleTodoDelete(todo.id)} style={{background:"red"}}>Delete</button>
                            )
                        }
                        
                    
                    </li>
                    )
                    
                })
            }

        </ul>
    )
}

export default Todos