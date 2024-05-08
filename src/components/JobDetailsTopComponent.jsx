import { JobDetailsTop, JobDetailsTopTittle } from "./JobDetailsContent.styles";
import {
  TimeAndTypeContainer,
  Oval,
  ListingP,
  Country,
} from "./JobListing.styles";
import { Button } from "./button.style";

const JobDetailsTopComponenet = ({ job }) => {
  return (
    <JobDetailsTop>
      <JobDetailsTopTittle>
        <TimeAndTypeContainer>
          <ListingP>{job.postedAt}</ListingP>
          <Oval />
          <ListingP>{job.contract}</ListingP>
        </TimeAndTypeContainer>
        <h3>{job.position}</h3>
        <Country>{job.location}</Country>
      </JobDetailsTopTittle>
      <Button>Apply Now</Button>
    </JobDetailsTop>
  );
};
export default JobDetailsTopComponenet;
