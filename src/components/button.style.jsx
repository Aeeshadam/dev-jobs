import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 1.6rem 3.2rem;
  font-weight: 500;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  height: auto;
  align-self: flex-start;
  cursor: pointer;

  @media (min-width: 768px) {
    padding: 1.6rem 3.2rem;
    margin-left: 0;
  }
`;

export const SecondaryButton = styled.button`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 1.4rem;
  font-weight: 600;
  border-radius: 0.6rem;
  margin-left: 1.6rem;
  cursor: pointer;
`;
