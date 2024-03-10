import React from "react";
import {useState,useEffect,useCallback} from 'react'
import Todos from "./Todos";
export default function App10() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   }

  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        console.log("todoloop")
        return <p key={index}>{todo}</p>;
      })}
      <hr />
      <div>
      <button onClick={addTodo}>Add Todo</button>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
}
