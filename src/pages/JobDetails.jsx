import { useParams } from "react-router-dom";
import data from "../data";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import { StyledDetailsContainer } from "../components/DevJobContainer";
import Logo from "../components/Logo";
import JobHeaderComponent from "../components/JobHeaderComponent";
import JobDetailsContent from "../components/JobDetailsContent";
import Footer from "../components/Footer";

const JobDetails = () => {
  const { id } = useParams();
  const job = data.find((job) => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <PageWrapper>
        <Header />
        <StyledDetailsContainer>
          <Logo />
          <JobHeaderComponent job={job} />
          <JobDetailsContent job={job} />
        </StyledDetailsContainer>
      </PageWrapper>

      <Footer />
    </>
  );
};
export default JobDetails;
