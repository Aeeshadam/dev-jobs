import { useParams } from "react-router-dom";
import data from "./data";
import PageWrapper from "./components/PageWrapper";
import Header from "./components/Header";
import { StyledDetailsContainer } from "./components/DevJobContainer";
import Logo from "./components/Logo";
import JobHeaderComponent from "./components/JobHeaderComponent";

const JobDetails = () => {
  const { id } = useParams();
  const job = data.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <PageWrapper>
      <StyledDetailsContainer>
        <Logo />
        <JobHeaderComponent job={job} />
      </StyledDetailsContainer>
      <Header />
    </PageWrapper>
  );
};
export default JobDetails;
