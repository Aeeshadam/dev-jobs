import { useJob } from "../contexts/JobContext.jsx";
import Header from "../components/Header.jsx";
import { StyledDevJobContainer } from "../styles/DevJobContainer.jsx";
import { SearchComponent } from "../components/SearchComponent.jsx";
import FilterModal from "../components/FilterModal.jsx";
import JobListing from "../components/JobListing.jsx";
import Message from "../components/Message.jsx";
import Navbar from "../components/Navbar.jsx";
import { LayOut } from "../styles/DevJobContainer.jsx";
import { useEffect } from "react";

const HomePage = () => {
  const { modalIsOpen, filteredJobs, isLoading } = useJob();
  const jobsToDisplay = filteredJobs();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [filteredJobs]);
  return (
    <>
      <Header />
      <LayOut>
        <Navbar />
        <StyledDevJobContainer>
          {modalIsOpen && <FilterModal />}
          <SearchComponent />
          {isLoading && <Message message="🔘 Loading..." />}
          {jobsToDisplay.length === 0 && !isLoading && (
            <Message message="There are no jobs matching your search criteria 😃" />
          )}
          <JobListing />
        </StyledDevJobContainer>
      </LayOut>
    </>
  );
};
export default HomePage;
