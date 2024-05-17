import PageContainer from "../components/PageContainer.jsx";
import Logo from "../components/Logo.jsx";
import {
  StyledAuthContainer,
  StyledInput,
  LoginButton,
  InputContainer,
  StyledLink,
  StyledH2,
  SmallText,
} from "../styles/SignIn-Up.style";
import { useState } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <PageContainer>
      <Logo />
      <StyledAuthContainer>
        <StyledH2>Sign Up</StyledH2>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <StyledInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <StyledInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </InputContainer>
        <LoginButton>Log In</LoginButton>

        <SmallText>
          Have an account? or go to &nbsp;
          <StyledLink to="/login">
            <span>Log in</span>
          </StyledLink>
          &nbsp; for demo access
        </SmallText>
      </StyledAuthContainer>
    </PageContainer>
  );
};
export default SignUp;
