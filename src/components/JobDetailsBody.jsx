import styled from "styled-components";

const JobDetailsP = styled.p`
  margin-bottom: 3rem;
`;
const JobDetailsBody = ({ job }) => {
  return (
    <>
      <JobDetailsP>
        {job.description
          ? job.description
          : "This job was posted with no description. Please follow the link to the website for more information"}
      </JobDetailsP>
      <h3>Requirements</h3>
      <JobDetailsP>
        {job.requirements
          ? job.requirements
          : "This job was posted with no description. Please follow the link to the website for more information"}
      </JobDetailsP>
      {job.role !== "" && (
        <>
          <h3>What You&apos;ll Do</h3>
          <JobDetailsP>{job.role}</JobDetailsP>
        </>
      )}
    </>
  );
};
export default JobDetailsBody;
