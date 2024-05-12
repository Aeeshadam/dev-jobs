import {
  JobDetailsHeader,
  JobHeaderImg,
  JobHeaderRight,
} from "./JobHeader.style";
import { TertiaryButton } from "./button.style";

const JobHeaderComponent = ({ job }) => {
  return (
    <JobDetailsHeader>
      <JobHeaderImg
        src={job.logo}
        alt={job.company}
        color={job.logoBackground}
      />
      <JobHeaderRight>
        <h2>{job.company}</h2>

        <TertiaryButton href={job.website} target="_blank">
          Company Site
        </TertiaryButton>
      </JobHeaderRight>
    </JobDetailsHeader>
  );
};
export default JobHeaderComponent;
