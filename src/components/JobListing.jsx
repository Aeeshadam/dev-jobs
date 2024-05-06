import data from "../data";
import {
  JobListingContainer,
  StyledJobListing,
  CompanyLogo,
  TimeAndTypeContainer,
  Country,
  Oval,
  ListingP,
  StyledLink,
} from "./JobListing.styles";

const JobListing = () => {
  return (
    <JobListingContainer>
      {data.map((job) => (
        <StyledJobListing key={job.id}>
          <CompanyLogo color={job.logoBackground} src={job.logo} />
          <TimeAndTypeContainer>
            <ListingP>{job.postedAt}</ListingP>
            <Oval />
            <ListingP>{job.contract}</ListingP>
          </TimeAndTypeContainer>
          <StyledLink to={`/job/${job.id}`}>
            <h3>{job.position}</h3>
          </StyledLink>
          <ListingP>{job.company}</ListingP>
          <Country>{job.location}</Country>
        </StyledJobListing>
      ))}
    </JobListingContainer>
  );
};
export default JobListing;
