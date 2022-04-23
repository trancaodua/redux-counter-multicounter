import React from "react";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import TodoFilterButton from "./TodoFilterButton";

function Todo() {
  return (
    <div>
      <TodoAdd />
      <TodoList />
      <TodoFilterButton />
    </div>
  );
}

export default Todo;
