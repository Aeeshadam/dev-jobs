import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { TertiaryButton } from "../styles/button.style";
import { useAuth } from "../contexts/AuthContext";

const StyledLogoAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--color-white);
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  gap: 0.5rem;
  margin: 2rem 0;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 1.6rem;
  }
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
