import styled from "styled-components";
import { Link } from "react-router-dom";
import { Input } from "../styles/Form.style";
import { Button } from "../styles/button.style.jsx";

const StyledAuthContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 400px;
  margin: auto;
  background-color: var(--color-very-dark);
  padding: 3rem;
  border-radius: 0.8rem;
`;

const StyledInput = styled(Input)`
  border: 0.5px solid var(--color-dark-grey);
  margin-top: 0.5rem;
`;

const LoginButton = styled(Button)`
  width: 100%;
  margin-bottom: 2.4rem;
`;
const DemoButton = styled(LoginButton)`
  background-color: var(--color-primary-light);
`;
const InputContainer = styled.div`
  margin-bottom: 2.4rem;
  text-align: left;
  width: 100%;
`;

const StyledLink = styled(Link)`
  color: var(--color-white);
`;

const StyledH2 = styled.h2`
  color: var(--color-primary);
`;
const SmallText = styled.p`
  font-size: 1.4rem;
`;
export {
  StyledAuthContainer,
  StyledInput,
  LoginButton,
  DemoButton,
  InputContainer,
  StyledLink,
  StyledH2,
  SmallText,
};
