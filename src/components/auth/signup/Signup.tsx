import { GapUpDownBy } from "src/shared";
import * as Styled from "../auth.styled";
import { useNavigate } from "react-router";

const Signup = () => {
  const navigate = useNavigate();
  const handleSignupClick = () => {
    console.log("click");
  };

  const handleLoginClick = () => {
    navigate("/signin");
  };

  return (
    <>
      <Styled.ShapeWrapper>
        <Styled.Shape />
        <Styled.Shape />
      </Styled.ShapeWrapper>

      <Styled.Wrapper>
        <Styled.Title>Signup Here</Styled.Title>
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
        <Styled.Button onClick={handleSignupClick}>Sign Up</Styled.Button>
        <GapUpDownBy $height={18} />
        <Styled.Button onClick={handleLoginClick}>Log In</Styled.Button>
      </Styled.Wrapper>
    </>
  );
};

export default Signup;
