import styled from "styled-components";
import { StyledDetailsContainer } from "../components/DevJobContainer.jsx";
import Header from "../components/Header.jsx";
import PageWrapper from "../components/PageWrapper.jsx";
import Logo from "../components/Logo.jsx";
import Form from "../components/Form.jsx";

const PostJobPage = () => {
  return (
    <PageWrapper>
      <Header />
      <StyledDetailsContainer>
        <Logo />

        <Form />
      </StyledDetailsContainer>
    </PageWrapper>
  );
};
export default PostJobPage;
