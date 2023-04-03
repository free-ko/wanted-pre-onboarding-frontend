import { useNavigate } from "react-router";
import { GapUpDownBy } from "src/shared";

import * as Styled from "./Login.styled";

const Login = () => {
  const navigate = useNavigate();

  const handleClick = ({ path }: { path: string }) => {
    navigate(path);
  };

  return (
    <>
      <Styled.CenterWrapper>
        <Styled.Shape />
        <Styled.Shape />
      </Styled.CenterWrapper>

      <Styled.Wrapper>
        <Styled.Title>Login Here</Styled.Title>
        <GapUpDownBy $height={24} />
        <Styled.LabelText>Name</Styled.LabelText>
        <GapUpDownBy $height={12} />
        <Styled.Input type="text" placeholder="Email" data-testid="email-input" required />
        <GapUpDownBy $height={24} />
        <Styled.LabelText>Password</Styled.LabelText>
        <GapUpDownBy $height={12} />
        <Styled.Input
          type="password"
          placeholder="Password"
          data-testid="password-input"
          required
        />
        <GapUpDownBy $height={44} />
        <Styled.Button>Log In</Styled.Button>
        <GapUpDownBy $height={18} />
        <Styled.Button onClick={() => handleClick({ path: "signup" })}>Sign Up</Styled.Button>
      </Styled.Wrapper>
    </>
  );
};

export default Login;
