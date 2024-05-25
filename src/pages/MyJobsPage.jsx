import { useJob } from "../contexts/JobContext.jsx";
import Header from "../components/Header.jsx";
import { StyledDevJobContainer } from "../styles/DevJobContainer.jsx";
import { SearchComponent } from "../components/SearchComponent.jsx";
import FilterModal from "../components/FilterModal.jsx";
import MyJobListing from "../components/MyJobListing.jsx";
import Message from "../components/Message.jsx";
import Navbar from "../components/Navbar.jsx";
import { LayOut } from "../styles/DevJobContainer.jsx";

const MyJobsPage = () => {
  const { modalIsOpen, myJobs, isLoading, filteredMyJobs } = useJob();

  const jobsToDisplay = filteredMyJobs();
  return (
    <>
      <Header />
      <LayOut>
        <Navbar />
        <StyledDevJobContainer>
          {modalIsOpen && <FilterModal />}
          <SearchComponent />
          {isLoading && <Message message="🔘 Loading..." />}
          {!isLoading && myJobs.length === 0 && (
            <Message message="⚠️ You have not posted any jobs yet!" />
          )}
          {!isLoading && myJobs.length > 0 && jobsToDisplay.length === 0 && (
            <Message message="⚠️ No jobs found" />
          )}

          {myJobs.length > 0 && jobsToDisplay.length > 0 && <MyJobListing />}
        </StyledDevJobContainer>
      </LayOut>
    </>
  );
};

export default MyJobsPage;
