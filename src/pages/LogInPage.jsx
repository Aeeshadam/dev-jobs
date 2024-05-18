import { useNavigate } from "react-router-dom";
import PageContainer from "../components/PageContainer.jsx";
import Logo from "../components/Logo.jsx";
import { useAuth } from "../contexts/AuthContext.jsx";
import {
  StyledAuthContainer,
  StyledInput,
  LoginButton,
  DemoButton,
  InputContainer,
  StyledLink,
  StyledH2,
  SmallText,
  ErrorMessage,
} from "../styles/SignIn-Up.style.jsx";

const LogInPage = () => {
  const navigate = useNavigate();
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    error,
    emptyState,
    logIn,
    logInDemo,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await logIn();
    if (success) {
      emptyState();
      navigate("/");
    }
  };

  const handleLoginDemo = async (e) => {
    e.preventDefault();
    const success = await logInDemo();
    if (success) {
      emptyState();
      navigate("/");
    }
  };

  return (
    <PageContainer>
      <Logo />
      <StyledAuthContainer>
        <StyledH2>Log In</StyledH2>
        <InputContainer>
          <label htmlFor="email">Email</label>
          <StyledInput
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            type="email"
            placeholder="Email address"
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Password</label>
          <StyledInput
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </InputContainer>
        <LoginButton onClick={handleSubmit}>Log In</LoginButton>
        <DemoButton onClick={handleLoginDemo}>Demo Login</DemoButton>
        {error && <ErrorMessage>{error}</ErrorMessage>}
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
export default LogInPage;
