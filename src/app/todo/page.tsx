"use client";
import { useState } from "react";
import { tTodo } from "@/api/todo.types";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoList } from "@/components/todo/TodoList";

export default function Todo() {
  const [todos, setTodos] = useState<tTodo[] | null>(null);

  const updateTodoList = (todo: tTodo) => {
    setTodos((prev) => {
      const newTodos = [todo, ...(prev || [])];
      return newTodos;
    });
  };

  return (
    <div>
      <h1>Todo</h1>

      <TodoForm updateTodoList={updateTodoList} />
      {Array.isArray(todos) && !!todos?.length && <TodoList todos={todos} />}
    </div>
  );
}
