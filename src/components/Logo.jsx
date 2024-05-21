import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogoLink = styled(Link)`
  margin: 1rem 0;
  text-decoration: none;
`;

const StyledLogo = styled.h2`
  cursor: pointer;
`;
const Logo = () => {
  return (
    <StyledLogoLink to="/">
      <StyledLogo>devJobs</StyledLogo>
    </StyledLogoLink>
  );
};
export default Logo;
