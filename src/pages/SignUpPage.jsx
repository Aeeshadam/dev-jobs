import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer.jsx";
import Logo from "../components/Logo.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import {
  StyledAuthContainer,
  StyledInput,
  LoginButton,
  InputContainer,
  StyledLink,
  StyledH2,
  SmallText,
  ErrorMessage,
} from "../styles/SignIn-Up.style.jsx";
const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    authError,
    emptyState,
    signUp,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await signUp();
    if (success) {
      emptyState();
      navigate("/");
    }
  };
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
        <InputContainer>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <StyledInput
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Password"
          />
        </InputContainer>
        <LoginButton onClick={handleSubmit}>Sign Up</LoginButton>
        {authError && <ErrorMessage>{authError}</ErrorMessage>}
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
export default SignUpPage;
