import styled from "styled-components";

const JobDetailsHeader = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 0.8rem;
  background-color: var(--color-very-dark);
  overflow: hidden;
  margin-top: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    margin-top: 0;
  }
`;

const JobHeaderImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-170%);
  width: 5rem;
  height: 5rem;
  object-fit: contain;
  padding: 1rem;
  border-radius: 0.6rem;

  background-color: ${(props) => props.color};
  @media (min-width: 768px) {
    width: 14rem;
    height: 14rem;
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    padding: 3.2rem;
  }
`;

const JobHeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3.2rem;
  background-color: var(--color-very-dark);
  flex-grow: 1;
  flex-direction: column;
  gap: 3.2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
`;

export { JobDetailsHeader, JobHeaderImg, JobHeaderRight };
