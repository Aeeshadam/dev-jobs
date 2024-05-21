import JobDetailsTopComponenet from "./JobDetailsTopComponent";
import { JobDetailsContainer } from "../styles/JobDetailsContent.styles";
import JobDetailsBody from "./JobDetailsBody";
import { DeleteButton } from "../styles/button.style";
import { useJob } from "../contexts/JobContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "../styles/SignIn-Up.style";
import { useEffect } from "react";
const JobDetails = ({ job }) => {
  const { deleteJob, error, setError } = useJob();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setError("");
    window.scrollTo(0, 0);
  }, [job, currentUser, setError]);
  const handleDelete = async () => {
    if (!currentUser || currentUser.uid !== job.postedBy) {
      return setError("You can only delete your own jobs!");
    }
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this job?"
    );

    if (confirmDelete) {
      const success = await deleteJob(job.firestoreId, job.postedBy);
      if (success) {
        navigate("/");
      }
    }
  };
  return (
    <JobDetailsContainer>
      <JobDetailsTopComponenet job={job} />
      <JobDetailsBody job={job} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {currentUser && currentUser.uid === job.postedBy && (
        <DeleteButton onClick={handleDelete}>Delete Job</DeleteButton>
      )}
    </JobDetailsContainer>
  );
};
export default JobDetails;
