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
  const { modalIsOpen, myJobs, isLoading } = useJob();

  return (
    <>
      <Header />
      <LayOut>
        <Navbar />
        <StyledDevJobContainer>
          {modalIsOpen && <FilterModal />}
          <SearchComponent />
          {isLoading && <Message message="🔘 Loading..." />}
          {myJobs.length === 0 && !isLoading && (
            <Message message="There are no jobs matching your search criteria 😃" />
          )}
          <MyJobListing />
        </StyledDevJobContainer>
      </LayOut>
    </>
  );
};

export default MyJobsPage;
