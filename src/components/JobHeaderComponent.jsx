import {
  JobDetailsHeader,
  JobHeaderImg,
  JobHeaderRight,
} from "../styles/JobHeader.style";
import { TertiaryLink } from "../styles/button.style";

const JobHeaderComponent = ({ job }) => {
  return (
    <JobDetailsHeader>
      <JobHeaderImg
        src={
          job.logo
            ? job.logo
            : "https://suesys.com/assets/website/images/company-logo-default.png"
        }
        alt={job.company}
        color={job.logoBackground}
      />
      <JobHeaderRight>
        <h2>{job.company}</h2>

        <TertiaryLink href={job.website} target="_blank">
          Company Site
        </TertiaryLink>
      </JobHeaderRight>
    </JobDetailsHeader>
  );
};
export default JobHeaderComponent;
