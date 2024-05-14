import { useJob } from "../contexts/JobContext.jsx";
import Header from "../components/Header.jsx";
import { StyledDevJobContainer } from "../components/DevJobContainer.jsx";
import { SearchComponent } from "../components/SearchComponent.jsx";
import LogoAndButtonContainer from "../components/LogoAndButtonContainer.jsx";
import FilterModal from "../components/FilterModal.jsx";
import JobListing from "../components/JobListing.jsx";
import PageWrapper from "../components/PageWrapper.jsx";

const HomePage = () => {
  const { modalIsOpen } = useJob();

  return (
    <PageWrapper>
      <Header />
      <StyledDevJobContainer>
        {modalIsOpen && <FilterModal />}
        <LogoAndButtonContainer />
        <SearchComponent />
        <JobListing />
      </StyledDevJobContainer>
    </PageWrapper>
  );
};
export default HomePage;
