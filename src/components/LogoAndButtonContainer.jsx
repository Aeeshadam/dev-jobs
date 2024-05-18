import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { TertiaryButton } from "../styles/button.style";
import { useAuth } from "../contexts/AuthContext";

const StyledLogoAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-white);

  &:hover {
    text-decoration: underline;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

const LogoAndButtonContainer = () => {
  const { currentUser, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };
  return (
    <StyledLogoAndButtonContainer>
      <Logo />
      {currentUser ? (
        <Container>
          <StyledLink onClick={handleLogout}> Sign Out</StyledLink>
          <StyledLink to="/post-job">
            <TertiaryButton>Post A Job</TertiaryButton>
          </StyledLink>
        </Container>
      ) : (
        <StyledLink to="/login">
          <TertiaryButton>Log In</TertiaryButton>
        </StyledLink>
      )}
    </StyledLogoAndButtonContainer>
  );
};
export default LogoAndButtonContainer;
