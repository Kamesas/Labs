import { tTodo } from "@/api/todo.types";
import { useState } from "react";
import { Button } from "../ui/Button/Button";
import { Input } from "../ui/Input/Input";

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
      <Input
        name="todo-description"
        placeholder="Write todo"
        value={todo?.description || ""}
        onChange={onChangeTodo}
      />
      <Button type="submit">Add todo</Button>
    </form>
  );
};
