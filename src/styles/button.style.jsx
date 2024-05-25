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
  cursor: pointer;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
  @media (min-width: 768px) {
    padding: 1.6rem 3.2rem;
    margin-left: 0;
    width: auto;
  }
`;

export const DeleteButton = styled(Button)`
  background-color: transparent;
  border: 1px solid red;
  color: var(--color-white);
  transition: all 0.3s linear;

  &:hover {
    background-color: #973434;
  }
`;

export const AnchorButton = styled.a`
  background-color: var(--color-primary);
  color: var(--color-white);
  border: none;
  padding: 1.6rem 3.2rem;
  font-weight: 500;
  border-radius: 0.6rem;
  font-size: 1.6rem;
  height: auto;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
  @media (min-width: 768px) {
    padding: 1.6rem 3.2rem;
    margin-left: 0;
    width: auto;
  }
`;

export const ButtonGrid = styled(Button)`
  align-self: flex-start;
`;

export const TertiaryButton = styled(Button)`
  background-color: var(--color-midnight);
  color: var(--color-primary);
  padding: 1rem 1.4rem;
`;

export const TertiaryLink = styled(AnchorButton)`
  background-color: var(--color-midnight);
  color: var(--color-primary);
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
