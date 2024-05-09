import { useDispatch, useSelector } from "react-redux";
import { InputContainer, Input, PostJobTittle } from "./Form.style";
import { Button } from "./button.style";
import {
  setCompany,
  setPosition,
  setLocation,
  setContract,
  setLink,
  setDescription,
  setRequirements,
} from "../state/addJobSlice";

//Todo: add drop down for types of contract and location
const Form = () => {
  const state = useSelector((state) => state.addJob);
  const dispatch = useDispatch();
  const {
    company,
    position,
    location,
    contract,
    link,
    description,
    requirements,
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      company,
      position,
      location,
      contract,
      link,
      description,
      requirements,
    };
    console.log(data);
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
            onChange={(e) => dispatch(setCompany(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="position">Enter Position </label>
          <Input
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => dispatch(setPosition(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="location">Enter location</label>
          <Input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => dispatch(setLocation(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="contract">Enter type of contact</label>
          <Input
            type="text"
            placeholder="Contract"
            value={contract}
            onChange={(e) => dispatch(setContract(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="link"> Enter the link to apply</label>
          <Input
            type="text"
            placeholder="Link to Apply"
            value={link}
            onChange={(e) => dispatch(setLink(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="description">Enter role description</label>
          <textarea
            type="text"
            placeholder="Role Description"
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="requirements">Enter the requirements</label>
          <textarea
            type="text"
            placeholder="Requirements"
            value={requirements}
            onChange={(e) => dispatch(setRequirements(e.target.value))}
          />
        </InputContainer>
        <Button type="submit">Post Job</Button>
      </form>
    </>
  );
};
export default Form;
