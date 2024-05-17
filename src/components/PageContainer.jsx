import { StyledDetailsContainer } from "../styles/DevJobContainer.jsx";
import Header from "../components/Header.jsx";
import PageWrapper from "../styles/PageWrapper.jsx";

const PageContainer = ({ children }) => {
  return (
    <PageWrapper>
      <Header />
      <StyledDetailsContainer>{children}</StyledDetailsContainer>
    </PageWrapper>
  );
};
export default PageContainer;
