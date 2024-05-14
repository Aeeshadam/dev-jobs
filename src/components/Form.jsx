import { useCountries } from "use-react-countries";
import { useNavigate } from "react-router-dom";
import { colorStyles } from "./CustomSelect";
import Select from "react-select";
import { optionsContract } from "./CustomSelect";
import { InputContainer, Input, PostJobTittle } from "./Form.style";
import { Button } from "./button.style";
import { useForm } from "../contexts/FormContext";

const Form = () => {
  const navigateTo = useNavigate();
  const { countries } = useCountries();

  const {
    company,
    setCompany,
    position,
    setPosition,
    location,
    setLocation,
    contract,
    setContract,
    website,
    setWebsite,
    description,
    setDescription,
    requirements,
    setRequirements,
    logo,
    setLogo,
    role,
    setRole,
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
            onChange={(e) => setCompany(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="position">Enter Position </label>
          <Input
            required
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="location">Enter location</label>

          <Select
            options={options}
            value={options.find((option) => option.value === location)}
            onChange={(selectedOption) => setLocation(selectedOption.value)}
            styles={colorStyles}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="contract">Enter type of contract</label>

          <Select
            options={optionsContract}
            value={optionsContract.find((option) => option.value === contract)}
            onChange={(selectedOption) => setContract(selectedOption.value)}
            styles={colorStyles}
          />
        </InputContainer>

        <InputContainer>
          <label htmlFor="website"> Enter the link to website</label>
          <Input
            type="text"
            placeholder="Link to Apply"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="logo">Upload Company Logo Link</label>
          <Input
            type="text"
            onChange={(e) => setLogo(e.target.value)}
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
            onChange={(e) => setDescription(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="requirements">Enter the requirements</label>
          <textarea
            type="text"
            placeholder="Requirements"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="role">Enter more info about the role</label>
          <textarea
            type="text"
            placeholder="Role Information"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          />
        </InputContainer>

        <Button type="submit">Post Job</Button>
      </form>
    </>
  );
};
export default Form;
