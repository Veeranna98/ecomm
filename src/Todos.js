import React from "react";
import { memo } from "react";

// const Todos = ({ todos, addTodo }) => {
const Todos = (props) => {
  alert("Hello");
  return (
    <>
      <h2>My Todos</h2>
      {props.todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={props.addTodo}>Add Todo</button>
    </>
  );
};

export default memo(Todos);
