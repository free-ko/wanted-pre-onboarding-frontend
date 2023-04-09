import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ShapeWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 400px;
  height: 440px;
`;

export const Shape = styled.div`
  position: absolute;

  width: 200px;
  height: 200px;

  border-radius: 50%;

  :first-child {
    top: -144px;
    left: -138px;

    background: linear-gradient(#1845ad, #23a2f6);
  }

  :last-child {
    right: -138px;
    bottom: -144px;

    background: linear-gradient(to right, #ff512f, #f09819);
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: auto;
  padding: 50px 35px;

  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.13);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
`;

export const Title = styled.h3`
  font-size: 32px;
  font-weight: 500;
  text-align: center;
  line-height: 42px;
  letter-spacing: 0.5px;
  color: #fff;
`;

export const LinkText = styled(Link)`
  text-align: right;
  color: white;
  text-decoration: none;
`;
