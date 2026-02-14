"use client";
import React, { useState } from "react";

type tTodo = {
  id: string;
  description: string;
};

export default function Todo() {
  const [todo, setTodo] = useState<tTodo | null>(null);

  const [todos, setTodos] = useState<tTodo[] | null>(null);

  const onChangeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo((prev) => {
      const newTodo: tTodo = {
        ...prev,
        id: new Date().toLocaleString(),
        description: e.target.value,
      };

      return newTodo;
    });
  };

  const updateTodos = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!todo?.description) return;

    const newTodo: tTodo = {
      id: new Date().toLocaleString(),
      description: todo?.description,
    };

    setTodos((prev) => {
      const newTodos = [newTodo, ...(prev || [])];

      return newTodos;
    });

    setTodo(null);
  };

  return (
    <div>
      <h1>Todo</h1>
      <form onSubmit={updateTodos}>
        <input
          name="todo-description"
          placeholder="Write todo"
          className="text-green-600 border-green-600 border-2"
          value={todo?.description || ""}
          onChange={onChangeTodo}
        />
        <button type="submit">Add todo</button>
      </form>

      {todos?.map((todo) => {
        return <div key={todo?.id}>{todo?.description} </div>;
      })}
    </div>
  );
}
