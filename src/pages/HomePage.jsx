import { useJob } from "../contexts/JobContext.jsx";
import Header from "../components/Header.jsx";
import { StyledDevJobContainer } from "../components/DevJobContainer.jsx";
import { SearchComponent } from "../components/SearchComponent.jsx";
import LogoAndButtonContainer from "../components/LogoAndButtonContainer.jsx";
import FilterModal from "../components/FilterModal.jsx";
import JobListing from "../components/JobListing.jsx";
import PageWrapper from "../components/PageWrapper.jsx";
import Message from "../components/Message.jsx";

const HomePage = () => {
  const { modalIsOpen, filteredJobsByContract, isLoading } = useJob();

  return (
    <PageWrapper>
      <Header />
      <StyledDevJobContainer>
        {modalIsOpen && <FilterModal />}
        <LogoAndButtonContainer />
        <SearchComponent />
        {isLoading && <Message message="🔘 Loading..." />}
        {filteredJobsByContract.length === 0 && !isLoading && (
          <Message message="There are no jobs matching your search criteria 😃" />
        )}
        <JobListing />
      </StyledDevJobContainer>
    </PageWrapper>
  );
};
export default HomePage;
