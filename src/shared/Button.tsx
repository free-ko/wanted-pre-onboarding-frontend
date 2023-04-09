import styled from "@emotion/styled";

const ButtonWrapper = styled.button<{ $disabled: boolean }>`
  width: 100%;
  padding: 15px 0;

  font-size: 18px;
  font-weight: 600;

  border: none;
  border-radius: 5px;
  background-color: #fff;
  color: #080710;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
`;

const Styled = {
  ButtonWrapper,
};

type Props = {
  text: string;
  disabled?: boolean;
  dataTestId: string;
};
const Button = ({ text, disabled = false, dataTestId }: Props) => {
  console.log(disabled);
  return (
    <Styled.ButtonWrapper $disabled={disabled} data-testid={dataTestId}>
      {text}
    </Styled.ButtonWrapper>
  );
};

export default Button;
