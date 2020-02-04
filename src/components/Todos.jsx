import React from "react";
import Todo from "./Todo";
const Todos = () => {
  const todos = [
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar props di React!"
    },
    {
      text: "Belajar React 2!"
    },
    {
      text: "Belajar React 3!"
    },
    {
      text: "Belajar React 4!"
    },
    {
      text: "Belajar React!"
    },
    {
      text: "Belajar React 1!"
    },
    {
      text: "Belajar React 2!"
    },
    {
      text: "Belajar React 3!"
    },
    {
      text: "Belajar React 4!"
    }
  ];

  return (
    <section className="todos">
      {todos.map(todo => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
