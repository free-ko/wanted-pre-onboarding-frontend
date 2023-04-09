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
          <div key={todo.id}>
            <GapUpDownBy $height={18} />
            <TodoItem todo={todo} />
          </div>
        ))
      )}
    </>
  );
};

export default TodoList;
