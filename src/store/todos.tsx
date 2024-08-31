"use client"

import { createContext, ReactNode, useContext, useState } from "react";

export type Todo = {
    id:string;
    task:string;
    complete:boolean;
    createdAt:Date;
}

export type TodoContext = {
    todos:Todo[];
    handleAddTodo : (task:string)=> void;

}


export const TodosContext = createContext<TodoContext | null>(null)

export const TodosProvider = ({children} : {children:ReactNode}) => {

    const [todos, setTodos] = useState<Todo[]>([]);

    const handleAddTodo = (task:string)=>{
        setTodos((prev)=>{

            const newTodos : Todo[] = [
                {
                id: Math.random().toString(),
                task,
                complete:false,
                createdAt: new Date()

            },
            ...prev
        ]
            return newTodos;
        }) 
    }

    return (
            <TodosContext.Provider value={{todos, handleAddTodo}}>
                {children}
            </TodosContext.Provider>
            )

}

// context api
export function useTodos(){
    const todosContextValues= useContext(TodosContext)
    if (!todosContextValues){
        throw new Error('UseTodos used outside of Provider')
    }
    return todosContextValues
}