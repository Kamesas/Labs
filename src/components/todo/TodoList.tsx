import { tTodo } from "@/api/todo.types";
import { TodoItem } from "./TodoItem";

type tProps = {
  todos: tTodo[];
};

export const TodoList = ({ todos }: tProps) => {
  return (
    <div className="p-2">
      {todos?.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};
