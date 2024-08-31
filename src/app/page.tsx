"use client"
import AddTodo from "@/components/addtodo";
import Todos from "@/components/todos";



export default function Home() {
  return (
    <>
    <h1>TODO NEXTJS + TYPESCRIPT</h1>
    <AddTodo />
    <Todos />
    </>
  );
}
