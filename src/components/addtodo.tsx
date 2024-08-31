import { useTodos } from '@/store/todos'
import React, { FormEvent, useState } from 'react'



const AddTodo = () => {
  const [todo, setTodo] = useState("")

  const {handleAddTodo} = useTodos();

  const handelFormSubmit = (e:FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    handleAddTodo(todo)
    setTodo("")

  }
  return (
    <>
    <form onSubmit={handelFormSubmit}>
      <input type="text" placeholder="Write your todo..." name="" id="" value={todo} onChange={(e)=>{ setTodo(e.target.value)}} />
      <button type="submit">Add</button>
    </form>
    </>
    
  )
}

export default AddTodo
