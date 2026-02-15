import { tTodo } from "@/api/todo.types";

type tProps = {
  todo: tTodo;
};

export const TodoItem = ({ todo }: tProps) => {
  return (
    <div className="border-4 border-green-800 m-2">{todo?.description} </div>
  );
};
