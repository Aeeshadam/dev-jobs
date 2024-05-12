import styled from "styled-components";

const JobDetailsP = styled.p`
  margin-bottom: 3rem;
`;
const JobDetailsBody = ({ job }) => {
  return (
    <>
      <JobDetailsP>{job.description}</JobDetailsP>
      <h3>Requirements</h3>
      <JobDetailsP>{job.requirements}</JobDetailsP>
      <h3>What You&apos;ll Do</h3>
      <JobDetailsP>{job.role}</JobDetailsP>
    </>
  );
};
export default JobDetailsBody;
