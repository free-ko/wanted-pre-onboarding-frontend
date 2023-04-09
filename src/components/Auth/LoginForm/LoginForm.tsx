import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";

import { authAPI } from "src/api";
import { useInput } from "src/hooks";
import { validator } from "src/utils";
import { Button, ErrorMessage, GapUpDownBy, Input } from "src/shared";

import * as Styled from "../Auth.styled";

const RoundShape = () => {
  return (
    <Styled.ShapeWrapper>
      <Styled.Shape />
      <Styled.Shape />
    </Styled.ShapeWrapper>
  );
};

const LoginForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const [email, isValidEmail] = useInput({ initValue: "", validator: validator.email });
  const [password, isValidPassword] = useInput({ initValue: "", validator: validator.password });

  const isDisabled = useMemo(
    () => ![isValidEmail.value, isValidPassword.value].every((valid) => valid),
    [isValidEmail.value, isValidPassword.value]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const res = await authAPI.login({ email: email.value, password: password.value });

      if (res?.status === 401) {
        return setError("이메일 또는 비밀번호가 틀렸습니다.");
      }

      if (res?.status === 200) {
        localStorage.setItem("token", res.data.access_token);
        return navigate("/todo");
      }
    },

    [email.value, password.value, navigate]
  );

  return (
    <>
      <RoundShape />

      <Styled.FormWrapper onSubmit={handleSubmit}>
        <Styled.Title>Login Here</Styled.Title>
        <GapUpDownBy $height={24} />
        <Input
          id="Email"
          type="text"
          label="Email"
          value={email.value}
          error={isValidEmail.message}
          placeholder="Please Email"
          dataTestID="email-input"
          onChange={email.onChange}
        />
        <GapUpDownBy $height={24} />
        <Input
          id="Password"
          type="password"
          label="Password"
          value={password.value}
          error={isValidPassword.message}
          placeholder="Please Password"
          dataTestID="password-input"
          onChange={password.onChange}
        />
        <GapUpDownBy $height={16} />
        <ErrorMessage text={error} />
        <GapUpDownBy $height={32} />
        <Button text="Log in" disabled={isDisabled} dataTestId="signin-button" />
        <GapUpDownBy $height={18} />
        <Styled.LinkText to="/signup">Go Signup</Styled.LinkText>
      </Styled.FormWrapper>
    </>
  );
};

export default LoginForm;
