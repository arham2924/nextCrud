"use client"
import CreateTodo from "../../component/CreateTodo";
import Todolist from "../../component/Todolist";


export default function Home() {
  return (
    <>
    <div className="container">
    <Todolist />
    <CreateTodo />
    </div>
    </>
  );
}
