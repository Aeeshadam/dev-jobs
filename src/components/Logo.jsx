import LogoSvg from "../desktop/logo.svg";
import styled from "styled-components";

const StyledLogoLink = styled.a`
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
      <StyledLogo src={LogoSvg} alt="Logo" />
    </StyledLogoLink>
  );
};
export default Logo;
