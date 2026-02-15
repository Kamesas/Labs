import { tTodo } from "./todo.types";

const TODO = "todo";

export const todo = {
  getTodos: () => {
    if (typeof window === "undefined") return;

    const res = localStorage.getItem(TODO);

    const todos: tTodo[] = JSON.parse(res || "[]");

    return todos;
  },

  updateTodos: (todos: tTodo[]) => {
    localStorage.setItem(TODO, JSON.stringify(todos));
  },
};
