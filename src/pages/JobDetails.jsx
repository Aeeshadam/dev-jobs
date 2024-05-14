import { useParams } from "react-router-dom";
import { useEffect } from "react";
import PageWrapper from "../components/PageWrapper";
import Header from "../components/Header";
import { StyledDetailsContainer } from "../components/DevJobContainer";
import Logo from "../components/Logo";
import JobHeaderComponent from "../components/JobHeaderComponent";
import JobDetailsContent from "../components/JobDetailsContent";
import Footer from "../components/Footer";
import { useJob } from "../contexts/JobContext";

const JobDetails = () => {
  const { data, fetchJobs } = useJob();
  const { id } = useParams();
  const job = data.find((job) => job.id === parseInt(id));

  useEffect(() => {
    fetchJobs();
  }, []);

  //To do: add loading indicator
  if (!data.length) {
    return <div>Loading...</div>; // Add a loading indicator
  }

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
