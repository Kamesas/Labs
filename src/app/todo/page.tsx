"use client";
import { startTransition, useEffect, useState } from "react";
import { tTodo } from "@/api/todo.types";
import { TodoForm } from "@/components/todo/TodoForm";
import { TodoList } from "@/components/todo/TodoList";
import { api } from "@/api";

export default function Todo() {
  const [todos, setTodos] = useState<tTodo[] | null>();

  useEffect(() => {
    const res = api.todo.getTodos();
    if (!res?.length) return;

    startTransition(() => setTodos(res));
  }, []);

  const updateTodoList = (todo: tTodo) => {
    setTodos((prev) => {
      const newTodos = [todo, ...(prev || [])];
      api.todo.updateTodos(newTodos);

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
