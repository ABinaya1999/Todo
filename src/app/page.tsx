"use client"
import AddTodo from "@/components/addtodo";
import Todos from "@/components/todos";
import Navbar from "@/components/navbar";
import { RiTodoLine } from "react-icons/ri";

export default function Home() {
  return (
    <main>
    <h1> <RiTodoLine className="icons"/>TODO NEXTJS + TYPESCRIPT<RiTodoLine className="icons"/></h1>
    <Navbar />
    <AddTodo />
    <Todos />
    </main>
  );
}
