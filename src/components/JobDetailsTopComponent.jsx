import { formatDistanceToNow } from "date-fns";
import {
  JobDetailsTop,
  JobDetailsTopTittle,
} from "../styles/JobDetailsContent.styles";
import {
  TimeAndTypeContainer,
  Oval,
  ListingP,
  Country,
} from "../styles/JobListing.styles";
import { AnchorButton } from "../styles/button.style";

const JobDetailsTopComponenet = ({ job }) => {
  const formatTimeDifference = (timestamp) => {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  };
  return (
    <JobDetailsTop>
      <JobDetailsTopTittle>
        <TimeAndTypeContainer>
          <ListingP>{formatTimeDifference(job.timestamp)}</ListingP>
          <Oval />
          <ListingP>{job.contract}</ListingP>
        </TimeAndTypeContainer>
        <h3>{job.position}</h3>
        <Country>{job.location}</Country>
      </JobDetailsTopTittle>
      <AnchorButton href={job.website} target="_blank">
        Apply Now
      </AnchorButton>
    </JobDetailsTop>
  );
};
export default JobDetailsTopComponenet;
