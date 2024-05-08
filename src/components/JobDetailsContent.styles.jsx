import styled from "styled-components";

export const JobDetailsContainer = styled.div`
  margin: 3.2rem 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: var(--color-very-dark);
  padding: 2.4rem;
  border-radius: 0.8rem;

  @media (min-width: 768px) {
    padding: 4.8rem;
  }
`;

export const JobDetailsTop = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2.4rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const JobDetailsTopTittle = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;
