import { createContext } from "react";

import type { Todo } from "src/types";

type Props = {
  isLoading: boolean;
  todos: Todo[];
  getTodos: () => Promise<void> | void;
};

export const TodoContext = createContext<Props>({
  isLoading: true,
  todos: [],
  getTodos: () => {
    console.warn("getTodos function is not implemented.");
  },
});
