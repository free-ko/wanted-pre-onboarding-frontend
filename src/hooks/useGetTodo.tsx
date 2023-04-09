import { useCallback, useState } from "react";

import { todoAPI } from "src/api";
import type { Todo } from "src/types";

const useGetTodo = (): [boolean, Todo[], () => Promise<void>] => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getTodos = useCallback(async () => {
    const res = await todoAPI.getTodos();
    setTodos(res);
    setIsLoading(false);
  }, []);

  return [isLoading, todos, getTodos];
};

export default useGetTodo;
