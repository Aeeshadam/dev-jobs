import JobDetailsTopComponenet from "./JobDetailsTopComponent";
import { JobDetailsContainer } from "./JobDetailsContent.styles";
import JobDetailsBody from "./JobDetailsBody";
const JobDetails = ({ job }) => {
  return (
    <JobDetailsContainer>
      <JobDetailsTopComponenet job={job} />
      <JobDetailsBody job={job} />
    </JobDetailsContainer>
  );
};
export default JobDetails;
