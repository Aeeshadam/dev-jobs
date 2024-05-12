import Select from "react-select";
import { countries } from "countries-list";
import { useDispatch, useSelector } from "react-redux";
import {
  InputContainer,
  Input,
  PostJobTittle,
  StyledSelect,
} from "./Form.style";
import { Button } from "./button.style";
import { setFieldValue } from "../state/formSlice";
import { addNewJob } from "../actions/jobsThunks";

//Todo: add drop down for types of contract and location
//TOdo tomorrow: add date automatically, push code to backend and get response, add image optionally

const Form = () => {
  const data = useSelector((state) => state.jobs.jobs);
  const state = useSelector((state) => state.addJob);
  const dispatch = useDispatch();
  const {
    company,
    position,
    location,
    contract,
    website,
    description,
    requirements,
    role,
    logo,
  } = state;

  const emptyFields = () => {
    dispatch(setFieldValue({ field: "company", value: "" }));
    dispatch(setFieldValue({ field: "position", value: "" }));
    dispatch(setFieldValue({ field: "location", value: "" }));
    dispatch(setFieldValue({ field: "contract", value: "" }));
    dispatch(setFieldValue({ field: "website", value: "" }));
    dispatch(setFieldValue({ field: "description", value: "" }));
    dispatch(setFieldValue({ field: "requirements", value: "" }));
    dispatch(setFieldValue({ field: "logo", value: "" }));
    dispatch(setFieldValue({ field: "role", value: "" }));
  };

  const id = data.length + 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newJobData = {
      company,
      position,
      location,
      contract,
      website,
      description,
      requirements,
      role,
      logo,
      id,
    };
    dispatch(addNewJob(newJobData));
    emptyFields();
  };

  return (
    <>
      <PostJobTittle>Post A Job</PostJobTittle>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="company">Enter Company Name</label>
          <Input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) =>
              dispatch(
                setFieldValue({ field: "company", value: e.target.value })
              )
            }
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="position">Enter Position </label>
          <Input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) =>
              dispatch(
                setFieldValue({ field: "position", value: e.target.value })
              )
            }
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="location">Enter location</label>
          <StyledSelect
            value={location}
            onChange={(e) => {
              const selectedCountryCode = e.target.value;
              const selectedCountryName = countries[selectedCountryCode].name;
              dispatch(
                setFieldValue({ field: "location", value: selectedCountryName })
              );
            }}
          >
            {Object.keys(countries).map((code) => (
              <option key={code} value={code}>
                {countries[code].name}
              </option>
            ))}
          </StyledSelect>
        </InputContainer>
        <InputContainer>
          <label htmlFor="contract">Enter type of contract</label>
          <StyledSelect
            value={contract}
            onChange={(e) =>
              dispatch(
                setFieldValue({ field: "contract", value: e.target.value })
              )
            }
          >
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
            <option value="remote">Remote</option>
            <option value="internship">Internship</option>
          </StyledSelect>
        </InputContainer>
        <InputContainer>
          <label htmlFor="website"> Enter the link to website</label>
          <Input
            type="text"
            placeholder="Link to Apply"
            value={website}
            onChange={(e) =>
              dispatch(
                setFieldValue({ field: "website", value: e.target.value })
              )
            }
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="logo">Upload Company Logo Link</label>
          <Input
            type="text"
            onChange={(e) =>
              dispatch(setFieldValue({ field: "logo", value: e.target.value }))
            }
            value={logo}
            placeholder="www.Logo.com"
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="description">Enter role description</label>
          <textarea
            type="text"
            placeholder="Role Description"
            value={description}
            onChange={(e) =>
              dispatch(
                setFieldValue({ field: "description", value: e.target.value })
              )
            }
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="requirements">Enter the requirements</label>
          <textarea
            type="text"
            placeholder="Requirements"
            value={requirements}
            onChange={(e) =>
              dispatch(
                setFieldValue({ field: "requirements", value: e.target.value })
              )
            }
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="role">Enter more info about the role</label>
          <textarea
            type="text"
            placeholder="Role Information"
            value={role}
            onChange={(e) =>
              dispatch(setFieldValue({ field: "role", value: e.target.value }))
            }
          />
        </InputContainer>
        <Button type="submit">Post Job</Button>
      </form>
    </>
  );
};
export default Form;
