import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setModalIsOpen } from "./state/searchSlice";
import Header from "./components/Header.jsx";
import { StyledDevJobContainer } from "./components/DevJobContainer.jsx";
import { SearchComponent } from "./components/SearchComponent.jsx";
import Logo from "./components/Logo.jsx";
import FilterModal from "./components/FilterModal.jsx";
import JobListing from "./components/JobListing.jsx";
import PageWrapper from "./components/PageWrapper.jsx";

const HomePage = () => {
  //const [modalIsOpen, setModalIsOpen] = useState(false);
  const modalIsOpen = useSelector((state) => state.search.modalIsOpen);

  return (
    <PageWrapper>
      <Header />
      <StyledDevJobContainer>
        {modalIsOpen && <FilterModal />}
        <Logo />
        <SearchComponent />
        <JobListing />
      </StyledDevJobContainer>
    </PageWrapper>
  );
};
export default HomePage;
