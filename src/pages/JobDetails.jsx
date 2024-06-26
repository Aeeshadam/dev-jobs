import { useParams } from "react-router-dom";
import PageContainer from "../components/PageContainer.jsx";
import JobHeaderComponent from "../components/JobHeaderComponent";
import JobDetailsContent from "../components/JobDetailsContent";
import Footer from "../components/Footer";
import { useJob } from "../contexts/JobContext";
import Navbar from "../components/Navbar";

const JobDetails = () => {
  const { data } = useJob();
  const { id } = useParams();
  const job = data.find((job) => job.id === parseInt(id));

  //To do: add loading indicator
  if (!data.length) {
    return <div>Loading...</div>; // Add a loading indicator
  }

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <>
      <Navbar />
      <PageContainer>
        <JobHeaderComponent job={job} />
        <JobDetailsContent job={job} />
      </PageContainer>
      <Footer />
    </>
  );
};
export default JobDetails;
