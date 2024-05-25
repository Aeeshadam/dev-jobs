import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100vw;
`;
export const StyledHeader = styled.div`
  background-image: url("/bg-pattern-header.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  height: 136px;
  width: 100%;

  @media (min-width: 768px) {
    min-height: 160px;
  }
`;
