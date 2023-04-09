import React, { useCallback, useContext, useState } from "react";
import styled from "@emotion/styled";

import { todoAPI } from "src/api";
import { Todo } from "src/types";
import { TodoContext } from "src/components";

const Wrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FormWrapper = styled.form`
  width: 100%;
`;

const LabelWrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Text = styled.p`
  color: #fff;
`;

const Styled = {
  Wrapper,
  FormWrapper,
  LabelWrapper,
  ButtonWrapper,
  Text,
};

const TodoItem = ({ todo }: { todo: Todo }): JSX.Element => {
  const [todoData, setTodoData] = useState(todo);
  const [isModify, setIsModify] = useState(false);
  const [isChecked, setIsChecked] = useState(todo.isCompleted);

  const { getTodos } = useContext(TodoContext);

  const handleChecked = useCallback(() => {
    setIsChecked((prev) => !prev);

    void todoAPI.updateTodo(todo.id, todo.todo, !isChecked);
  }, [todo.id, todo.todo, isChecked]);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    if (!window.confirm("정말 수정하시겠습니까?")) return;

    const {
      todoInput: { value },
    } = e.currentTarget;

    const data = await todoAPI.updateTodo(todo.id, value, isChecked);

    setTodoData(data);
    getTodos();
    setIsModify(false);
  };

  const handleDelete = useCallback(
    async (todoId: number) => {
      if (!window.confirm("정말 삭제하시겠습니까?")) return;

      await todoAPI.deleteTodo(todoId);
      getTodos();
    },
    [getTodos]
  );

  return (
    <Styled.Wrapper>
      {isModify ? (
        <Styled.FormWrapper onSubmit={handleUpdate}>
          <Styled.LabelWrapper>
            <input type="checkbox" checked={isChecked} onChange={handleChecked} />
            <input
              type="text"
              name="todoInput"
              defaultValue={todoData.todo}
              data-testid="modify-input"
            />
            <button type="submit" data-testid="submit-button">
              제출
            </button>
            <button type="button" data-testid="cancel-button" onClick={() => setIsModify(false)}>
              취소
            </button>
          </Styled.LabelWrapper>
        </Styled.FormWrapper>
      ) : (
        <>
          <Styled.LabelWrapper>
            <input type="checkbox" checked={isChecked} onChange={handleChecked} />
            <Styled.Text>{todoData.todo}</Styled.Text>
          </Styled.LabelWrapper>
          <Styled.ButtonWrapper>
            <button
              type="button"
              data-testid="modify-button"
              onClick={() => setIsModify((prev) => !prev)}
            >
              수정
            </button>
            <button type="button" data-testid="delete-button" onClick={() => handleDelete(todo.id)}>
              제거
            </button>
          </Styled.ButtonWrapper>
        </>
      )}
    </Styled.Wrapper>
  );
};

export default TodoItem;
