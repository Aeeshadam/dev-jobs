import styled from "styled-components";
import Header from "./components/Header.jsx";
import { StyledDevJobContainer } from "./components/DevJobContainer.jsx";
import { SearchComponent } from "./components/SearchComponent.jsx";
import Logo from "./components/Logo.jsx";
import FilterModal from "./components/FilterModal.jsx";
import { useState } from "react";
import JobListing from "./components/JobListing.jsx";
import PageWrapper from "./components/PageWrapper.jsx";

const HomePage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <PageWrapper>
      <StyledDevJobContainer>
        {modalIsOpen && (
          <FilterModal closeModal={closeModal} modalIsOpen={modalIsOpen} />
        )}
        <Logo />
        <SearchComponent openModal={openModal} />
        <JobListing />
      </StyledDevJobContainer>
      <Header />
    </PageWrapper>
  );
};
export default HomePage;
