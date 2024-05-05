import styled from "styled-components";

const StyledDevJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 2.4rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1460px;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 1rem 4rem;
  }

  @media (min-width: 1024px) {
    margin: 0 auto;
    padding: 1rem 12rem;
  }
`;

export default StyledDevJobContainer;
