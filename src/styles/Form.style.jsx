import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 4.8rem;
  border-radius: 0.8rem;
  border: none;
  background-color: var(--color-very-dark);
  color: var(--color-white);
  font-size: 1.6rem;
  padding: 0 1.6rem;
  outline: none;

  &::placeholder {
    color: var(--color-dark-grey);
    opacity: 50%;
    font-size: 1.5rem;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 4.8rem;
  border-radius: 0.8rem;
  border: none;
  background-color: var(--color-very-dark);
  color: var(--color-white);
  font-size: 1.6rem;
  padding: 0 1.6rem;
  outline: none;

  &::placeholder {
    color: var(--color-dark-grey);
    opacity: 50%;
    font-size: 1.5rem;
  }
`;

const InputContainer = styled.div`
  margin-bottom: 2.4rem;
  display: flex;
  flex-direction: column;
`;
const SelectContainer = styled.div`
  width: 100%;
`;

const PostJobTittle = styled.div`
  width: 100%;
  text-align: center;
  background-color: var(--color-very-dark);
  color: var(--color-white);
  border-radius: 0.8rem;
  font-size: 2rem;
  padding: 3rem;
  font-weight: 600;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

export { Input, InputContainer, SelectContainer, PostJobTittle, StyledSelect };
