import styled from "styled-components";
import { Link } from "react-router-dom";
const JobListingContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  margin-top: 6.4rem;
  gap: 4.8rem 2.4rem;
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const StyledJobListing = styled.div`
  display: flex;
  flex-direction: column;
  // width: 327px;
  height: 228px;
  border-radius: 0.8rem;
  background-color: var(--color-very-dark);
  position: relative;
  padding-left: 3.2rem;
  padding-bottom: 3.2rem;
  padding-top: 5rem;
`;

const CompanyLogo = styled.img`
  position: absolute;
  bottom: 20rem;
  left: 3.2rem;
  width: 5rem;
  height: 5rem;
  border-radius: 0.6rem;
  object-fit: cover;
`;

const Country = styled.p`
  font-size: 1.4rem;
  color: var(--color-primary);
  font-weight: 600;
  margin-top: auto;
`;

const TimeAndTypeContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
  align-items: center;
`;

const Oval = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  background-color: var(--color-dark-grey);
  border-radius: 50%;
`;

const ListingP = styled.p`
  color: var(--color-dark-grey);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
`;

export {
  JobListingContainer,
  StyledJobListing,
  CompanyLogo,
  Country,
  TimeAndTypeContainer,
  Oval,
  ListingP,
  StyledLink,
};
