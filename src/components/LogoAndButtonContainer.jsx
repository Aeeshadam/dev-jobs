import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { TertiaryButton } from "../styles/button.style";

const StyledLogoAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const LogoAndButtonContainer = () => {
  return (
    <StyledLogoAndButtonContainer>
      <Logo />
      <StyledLink to="/post-job">
        <TertiaryButton>Post A Job</TertiaryButton>
      </StyledLink>
    </StyledLogoAndButtonContainer>
  );
};
export default LogoAndButtonContainer;
