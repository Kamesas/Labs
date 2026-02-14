import { tTodo } from "@/api/todo.types";

type tProps = {
  todos: tTodo[];
};

export const TodoList = ({ todos }: tProps) => {
  return (
    <div className="p-2">
      {todos?.map((todo) => {
        return (
          <div key={todo?.id} className="border-4 border-green-800 m-2">
            {todo?.description}{" "}
          </div>
        );
      })}
    </div>
  );
};
