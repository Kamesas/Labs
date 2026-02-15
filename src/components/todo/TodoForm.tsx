import { tTodo } from "@/api/todo.types";
import { useState } from "react";

type tProps = {
  updateTodoList: (todo: tTodo) => void;
};

export const TodoForm = ({ updateTodoList }: tProps) => {
  const [todo, setTodo] = useState<tTodo | null>(null);

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

  const addNewTodo = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!todo?.description) return;

    const newTodo: tTodo = {
      id: new Date().toLocaleString(),
      description: todo?.description,
    };

    updateTodoList(newTodo);
    setTodo(null);
  };

  return (
    <form onSubmit={addNewTodo}>
      <input
        name="todo-description"
        placeholder="Write todo"
        className="text-green-600 border-green-600 border-2"
        value={todo?.description || ""}
        onChange={onChangeTodo}
      />
      <button type="submit">Add todo</button>
    </form>
  );
};
