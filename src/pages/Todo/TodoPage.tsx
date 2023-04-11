import { useNavigate } from "react-router";
import React, { useCallback, useEffect, useMemo } from "react";

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
  const navigate = useNavigate();
  const [isLoading, todos, getTodos] = useGetTodo();
  const value = useMemo(() => ({ isLoading, todos, getTodos }), [isLoading, todos, getTodos]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      void getTodos();
    } else {
      navigate("/");
    }
  }, [getTodos]);

  const handleLogout = useCallback(() => {
    if (!window.confirm("로그아웃 하시겠습니까?")) return;

    localStorage.removeItem("token");
    window.location.href = "/signin";
  }, []);

  return (
    <TodoContext.Provider value={value}>
      <RoundShape />

      <Styled.Wrapper>
        <Styled.Title>Todo</Styled.Title>
        <Styled.Text onClick={handleLogout}>Log out</Styled.Text>
        <GapUpDownBy $height={30} />
        <TodoInput />
        <TodoList />
      </Styled.Wrapper>
    </TodoContext.Provider>
  );
};

export default TodoPage;
