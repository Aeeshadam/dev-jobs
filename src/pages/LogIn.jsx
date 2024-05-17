import PageContainer from "../components/PageContainer.jsx";
import Logo from "../components/Logo.jsx";
import {
  StyledAuthContainer,
  StyledInput,
  LoginButton,
  DemoButton,
  InputContainer,
  StyledLink,
  StyledH2,
  SmallText,
} from "../styles/SignIn-Up.style";
import { useState } from "react";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <PageContainer>
      <Logo />
      <StyledAuthContainer>
        <StyledH2>Log In</StyledH2>
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
        <DemoButton>Demo Login</DemoButton>
        <SmallText>
          Don&apos;t have an account?{" "}
          <StyledLink to="/signup">
            <span>Sign Up</span>
          </StyledLink>
        </SmallText>
      </StyledAuthContainer>
    </PageContainer>
  );
};
export default LogIn;
