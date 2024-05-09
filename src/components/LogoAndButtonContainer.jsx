import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { TertiaryButton } from "./button.style";

const StyledLogoAndButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoAndButtonContainer = () => {
  return (
    <StyledLogoAndButtonContainer>
      <Logo />
      <Link to="/post-job">
        <TertiaryButton>Post A Job</TertiaryButton>
      </Link>
    </StyledLogoAndButtonContainer>
  );
};
export default LogoAndButtonContainer;
