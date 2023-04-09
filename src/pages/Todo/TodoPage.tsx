import React, { useEffect, useMemo } from "react";

import { useGetTodo } from "src/hooks";
import { GapUpDownBy } from "src/shared";
import { TodoContext, TodoInput, TodoList } from "src/components";

import * as Styled from "./Todo.styled";

const RoundShape = () => {
  return (
    <Styled.ShapeWrapper>
      <Styled.Shape />
      <Styled.Shape />
    </Styled.ShapeWrapper>
  );
};

const TodoPage = () => {
  const [isLoading, todos, getTodos] = useGetTodo();
  const value = useMemo(() => ({ isLoading, todos, getTodos }), [isLoading, todos, getTodos]);

  useEffect(() => {
    void getTodos();
  }, [getTodos]);

  return (
    <TodoContext.Provider value={value}>
      <RoundShape />

      <Styled.Wrapper>
        <Styled.Title>Todo</Styled.Title>
        <GapUpDownBy $height={30} />
        <TodoInput />
        <TodoList />
      </Styled.Wrapper>
    </TodoContext.Provider>
  );
};

export default TodoPage;
