import React, { useCallback, useContext } from "react";
import styled from "@emotion/styled";

import { todoAPI } from "src/api";
import { useInput } from "src/hooks";
import { TodoContext } from "src/components";

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 10px;

  font-size: 14px;
  font-weight: 300;

  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.07);

  outline: none;
  border: none;
  color: #fff;

  ::placeholder {
    color: #e5e5e5;
  }
`;

const Styled = {
  Wrapper,
  Input,
};

const TodoInput = () => {
  const { getTodos } = useContext(TodoContext);
  const [todo] = useInput({ initValue: "" });

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!todo.value) {
        return alert("Todo를 입력해주세요.");
      }

      await todoAPI.createTodo(todo.value);

      getTodos();

      todo.setValue("");
    },
    [getTodos, todo]
  );

  return (
    <Styled.Wrapper onSubmit={handleSubmit}>
      <Styled.Input
        type="text"
        value={todo.value}
        onChange={todo.onChange}
        placeholder="Type Your Todo"
        data-testid="new-todo-input"
      />
    </Styled.Wrapper>
  );
};

export default TodoInput;
