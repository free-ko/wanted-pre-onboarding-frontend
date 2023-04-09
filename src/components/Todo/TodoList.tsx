import { useContext } from "react";

import type { Todo } from "src/types";
import { GapUpDownBy } from "src/shared";
import { TodoContext, TodoItem } from "src/components";

const TodoList = () => {
  const { isLoading, todos } = useContext(TodoContext);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todos?.map((todo: Todo) => (
          <>
            <GapUpDownBy $height={18} />
            <TodoItem key={todo.id} todo={todo} />
          </>
        ))
      )}
    </>
  );
};

export default TodoList;
