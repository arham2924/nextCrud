import React, { useEffect } from "react";
import { useState } from "react";
import { onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";

export default function Todolist() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            title: doc.data().title,
            details: doc.data().details,
          };
        })
      );
    });
    return unsub;
  }, []);

  return (
    <>
      <div>
        <h1>Todos</h1>
        <ul className="todolist">
          {todos.map((todo) => (
            <Link href={`/${todo.id}`} key={todo.id}>
              <li key={todo.id} className="todoitem">
                {todo.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
}
