import { formatDistanceToNow } from "date-fns";
import { useJob } from "../contexts/JobContext";

import {
  JobListingContainer,
  StyledJobListing,
  CompanyLogo,
  TimeAndTypeContainer,
  Country,
  Oval,
  ListingP,
  StyledLink,
  ContractP,
} from "../styles/JobListing.styles";

const MyJobListing = () => {
  const { myJobs } = useJob();

  const formatTimeDifference = (timestamp) => {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  };

  return (
    <JobListingContainer>
      {myJobs.map((job) => (
        <StyledJobListing key={job.id}>
          <CompanyLogo
            src={
              job.logo
                ? job.logo
                : "https://suesys.com/assets/website/images/company-logo-default.png"
            }
          />
          <TimeAndTypeContainer>
            <ListingP>{formatTimeDifference(job.timestamp)}</ListingP>
            <Oval />
            <ContractP>{job.contract}</ContractP>
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
export default MyJobListing;
