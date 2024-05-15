import JobDetailsTopComponenet from "./JobDetailsTopComponent";
import { JobDetailsContainer } from "../styles/JobDetailsContent.styles";
import JobDetailsBody from "./JobDetailsBody";
import { DeleteButton } from "../styles/button.style";
import { useJob } from "../contexts/JobContext";
import { useNavigate, useParams } from "react-router-dom";
const JobDetails = ({ job }) => {
  const { deleteJob } = useJob();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteJob(job.firestoreId);
    navigate("/");
  };
  return (
    <JobDetailsContainer>
      <JobDetailsTopComponenet job={job} />
      <JobDetailsBody job={job} />
      <DeleteButton>Delete Job</DeleteButton>
    </JobDetailsContainer>
  );
};
export default JobDetails;
