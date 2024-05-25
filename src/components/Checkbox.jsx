import styled from "styled-components";
import { components } from "react-select";
import React, { useState } from "react";
import Select from "react-select";
import { colorStyles } from "../styles/CustomSelect";
import { useJob } from "../contexts/JobContext";

const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const CustomCheckbox = styled.input`
  margin-right: 8px;
`;
const CustomOption = (props) => {
  return (
    <components.Option {...props}>
      <OptionWrapper>
        <CustomCheckbox
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />
        <label>{props.label}</label>
      </OptionWrapper>
    </components.Option>
  );
};

const options = [
  { value: "full time", label: "Full Time" },
  { value: "part time", label: "Part Time" },
  { value: "remote", label: "Remote" },
  { value: "internship", label: "Internship" },
];

const Checkbox = () => {
  const { setFilterByContract } = useJob();
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (selected) => {
    setSelectedOptions(selected);
    const selectedValues = selected
      ? selected.map((option) => option.value)
      : [];
    setFilterByContract(selectedValues);
  };

  return (
    <Select
      options={options}
      placeholder="Filter by Contract"
      isMulti
      styles={colorStyles}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{ Option: CustomOption }}
      onChange={handleChange}
      value={selectedOptions}
    />
  );
};

export default Checkbox;
