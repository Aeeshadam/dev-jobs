import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { AnchorButton } from "./button.style";

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
  const data = useSelector((state) => state.jobs.jobs);
  const { id } = useParams();
  const job = data.find((job) => job.id === parseInt(id));
  return (
    <FooterContainer>
      <AnchorButton href={job.website} target="_blank">
        Apply Now
      </AnchorButton>
    </FooterContainer>
  );
};
export default Footer;
