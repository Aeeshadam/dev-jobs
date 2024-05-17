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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (confirmDelete) {
      deleteJob(job.firestoreId);
      navigate("/");
    }
  };
  return (
    <JobDetailsContainer>
      <JobDetailsTopComponenet job={job} />
      <JobDetailsBody job={job} />
      <DeleteButton onClick={handleDelete}>Delete Job</DeleteButton>
    </JobDetailsContainer>
  );
};
export default JobDetails;
