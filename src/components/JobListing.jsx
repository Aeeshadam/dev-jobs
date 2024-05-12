import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import { fetchJobs } from "../actions/jobsThunks";
import {
  JobListingContainer,
  StyledJobListing,
  CompanyLogo,
  TimeAndTypeContainer,
  Country,
  Oval,
  ListingP,
  StyledLink,
} from "./JobListing.styles";
import { useEffect } from "react";

const JobListing = () => {
  const data = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.jobs.isLoading);
  const error = useSelector((state) => state.jobs.error);

  const formatTimeDifference = (timestamp) => {
    return formatDistanceToNow(timestamp, { addSuffix: true });
  };
  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <JobListingContainer>
      {data.map((job) => (
        <StyledJobListing key={job.id}>
          <CompanyLogo src={job.logo} />
          <TimeAndTypeContainer>
            <ListingP>{formatTimeDifference(job.timestamp)}</ListingP>
            <Oval />
            <ListingP>{job.contract}</ListingP>
          </TimeAndTypeContainer>
          <StyledLink to={`/job/${job.id}`}>
            <h3>{job.position}</h3>
          </StyledLink>
          <ListingP>{job.company}</ListingP>
          <Country>{job.location}</Country>
        </StyledJobListing>
      ))}
    </JobListingContainer>
  );
};
export default JobListing;
