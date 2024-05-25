import styled from "styled-components";

export const SearchContainer = styled.div`
  height: 8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  border-radius: 0.6rem;
  background-color: var(--color-very-dark);
  padding: 1.6rem;
  width: 100%;

  @media (min-width: 768px) {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.1rem;
    background-color: var(--color-dark-grey);
    padding: 0;
  }
`;

export const GridItem = styled.div`
  background-color: var(--color-very-dark);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.6rem;
  box-sizing: border-box;
  border-radius: 0.6rem;

  @media (min-width: 768px) {
    padding: 1.6rem;
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  background-color: var(--color-very-dark);
  color: var(--color-white);
  width: 100%;
  margin-left: 1.6rem;

  &::placeholder {
    color: var(--color-dark-grey);
    font-size: 1.6rem;
  }

  @media (min-width: 768px) {
    margin-left: 0;
  }
`;

export const Icon = styled.img`
  @media (min-width: 768px) {
    margin-right: 1.6rem;
  }
`;

export const FilterIcon = styled(Icon)`
  cursor: pointer;
`;

export const ClearIcon = styled.p`
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
