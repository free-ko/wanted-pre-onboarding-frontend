import React, { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router";

import { authAPI } from "src/api";
import { useInput } from "src/hooks";
import { validator, ValidationError } from "src/utils";
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

const SignupForm = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  const [email, isValidEmail] = useInput({ initValue: "", validator: validator.email });
  const [password, isValidPassword] = useInput({ initValue: "", validator: validator.password });
  const [passwordCheck, isValidPasswordCheck] = useInput({
    initValue: "",
    validator: validator.password,
  });

  const isDisabled = useMemo(
    () =>
      ![isValidEmail.value, isValidPassword.value, isValidPasswordCheck.value].every(
        (valid) => valid
      ),
    [isValidEmail.value, isValidPassword.value]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (password.value !== passwordCheck.value) {
        return setError(ValidationError.PASSWORD_CHECK_ERROR);
      }

      const res = await authAPI.signup({ email: email.value, password: password.value });

      if (res?.status === 400) {
        return setError(res.data.message);
      }

      if (res?.status === 201) {
        return navigate("/signin");
      }
    },

    [email.value, password.value, passwordCheck.value, navigate]
  );

  return (
    <>
      <RoundShape />

      <Styled.FormWrapper onSubmit={handleSubmit}>
        <Styled.Title>Signup Here</Styled.Title>
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
        <GapUpDownBy $height={24} />
        <Input
          id="Repeat Password"
          type="password"
          label="Repeat Password"
          value={passwordCheck.value}
          error={isValidPasswordCheck.message}
          placeholder="Please Repeat Password"
          dataTestID="repeat-password-input"
          onChange={passwordCheck.onChange}
        />
        <GapUpDownBy $height={16} />
        <ErrorMessage text={error} />
        <GapUpDownBy $height={32} />
        <Button text="Sign in" dataTestId="signup-button" disabled={isDisabled} />
        <GapUpDownBy $height={18} />
        <Styled.LinkText to="/signin">Go Login</Styled.LinkText>
      </Styled.FormWrapper>
    </>
  );
};

export default SignupForm;
