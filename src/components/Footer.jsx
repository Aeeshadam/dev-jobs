import styled from "styled-components";
import { Button } from "./button.style";

const FooterContainer = styled.div`
  background-color: var(--color-very-dark);
  width: 100%;
  padding: 2.4rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Button>Apply Now</Button>
    </FooterContainer>
  );
};
export default Footer;
