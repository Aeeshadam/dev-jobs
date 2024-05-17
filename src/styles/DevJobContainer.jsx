import styled from "styled-components";

const StyledDevJobContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin: -150px auto 0 auto;
  padding: 1rem 2.4rem;
  top: 0;
  left: 0;
  right: 0;
  max-width: 1460px;

  @media (min-width: 768px) {
    padding: 1rem 4rem;
    margin: -170px auto 0 auto;
  }

  @media (min-width: 1024px) {
    padding: 1rem 12rem;
  }
`;

const StyledDetailsContainer = styled(StyledDevJobContainer)`
  max-width: 730px;
  margin: -150px auto 0 auto;

  @media (min-width: 1024px) {
    padding: 1rem 0;
  }

  @media (min-width: 768px) {
    margin: -170px auto 0 auto;
  }
`;

export { StyledDetailsContainer, StyledDevJobContainer };
