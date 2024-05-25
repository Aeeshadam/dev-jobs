import { useCountries } from "use-react-countries";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { colorStyles, optionsContract } from "../styles/CustomSelect";
import { InputContainer, Input, PostJobTittle } from "../styles/Form.style";
import { Button } from "../styles/button.style";
import { useForm } from "../contexts/FormContext";

const Form = () => {
  const navigateTo = useNavigate();
  const { countries } = useCountries();

  const {
    company,
    position,
    location,
    contract,
    website,
    description,
    requirements,
    logo,
    role,
    updateField,
    handleFormSubmit,
  } = useForm();

  const handleSubmit = (e) => {
    handleFormSubmit();
    e.preventDefault();
    navigateTo("/");
  };

  const options = countries.map((country) => ({
    value: country.name,
    label: country.name,
  }));

  return (
    <>
      <PostJobTittle>Post A Job</PostJobTittle>
      <form onSubmit={handleSubmit}>
        <InputContainer>
          <label htmlFor="company">Enter Company Name</label>
          <Input
            required
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => updateField("company", e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="position">Enter Position </label>
          <Input
            required
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => updateField("position", e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="location">Select location</label>

          <Select
            options={options}
            value={options.find((option) => option.value === location)}
            onChange={(selectedOption) =>
              updateField("location", selectedOption.value)
            }
            styles={colorStyles}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="contract">Select type of contract</label>

          <Select
            options={optionsContract}
            value={optionsContract.find((option) => option.value === contract)}
            onChange={(selectedOption) =>
              updateField("contract", selectedOption.value)
            }
            styles={colorStyles}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="website"> Enter the link to website</label>
          <Input
            type="text"
            placeholder="Link to Apply"
            value={website}
            onChange={(e) => updateField("website", e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="logo">Upload Company Logo Link</label>
          <Input
            type="text"
            onChange={(e) => updateField("logo", e.target.value)}
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
            onChange={(e) => updateField("description", e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="requirements">Enter the requirements</label>
          <textarea
            type="text"
            placeholder="Requirements"
            value={requirements}
            onChange={(e) => updateField("requirements", e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="role">Enter more info about the role</label>
          <textarea
            type="text"
            placeholder="Role Information"
            value={role}
            onChange={(e) => updateField("role", e.target.value)}
          />
        </InputContainer>

        <Button type="submit">Post Job</Button>
      </form>
    </>
  );
};
export default Form;
