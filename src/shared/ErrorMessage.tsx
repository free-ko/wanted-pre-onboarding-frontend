import styled from "@emotion/styled";

const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: orangered;
`;

const Styled = {
  Text,
};

const ErrorMessage = ({ text }: { text: string | undefined }): JSX.Element => {
  if (text) {
    return <Styled.Text>{text}</Styled.Text>;
  }

  return <></>;
};

export default ErrorMessage;
