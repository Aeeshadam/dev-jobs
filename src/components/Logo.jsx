import { Link } from "react-router-dom";
import LogoSvg from "../assets/desktop/logo.svg";
import styled from "styled-components";

const StyledLogoLink = styled.div`
  margin: 3.2rem 0;

  @media (min-width: 768px) {
    margin: 4.4rem 0;
  }
`;

const StyledLogo = styled.img`
  cursor: pointer;
`;
const Logo = () => {
  return (
    <StyledLogoLink href="/">
      <Link to="/">
        <StyledLogo src={LogoSvg} alt="Logo" />
      </Link>
    </StyledLogoLink>
  );
};
export default Logo;
