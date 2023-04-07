import React from "react";
import styled from "@emotion/styled";

import { ErrorMessage, GapUpDownBy } from "src/shared";

const LabelText = styled.label`
  font-size: 24px;
  font-weight: 500;
  color: #fff;
`;

const InputWrapper = styled.input`
  height: 50px;
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
  LabelText,
  InputWrapper,
};

type Props = {
  id: string;
  type: string;
  label: string;
  error: string | undefined;
  value: string;
  placeholder: string;
  dataTestID: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  type,
  label,
  error,
  value,
  required = true,
  placeholder,
  dataTestID,
  onChange,
}: Props) => {
  return (
    <>
      <Styled.LabelText htmlFor={id}>{label}</Styled.LabelText>
      <GapUpDownBy $height={12} />
      <Styled.InputWrapper
        type={type}
        value={value}
        required={required}
        data-testid={dataTestID}
        placeholder={placeholder}
        onChange={onChange}
      />
      <GapUpDownBy $height={12} />
      <ErrorMessage text={error} />
    </>
  );
};

export default Input;
