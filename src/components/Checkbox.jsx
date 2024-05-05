import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-right: 1.6rem;
  accent-color: var(--color-primary);
  height: 2.4rem;
  width: 2.4rem;
  color: var(--color-primary);
  cursor: pointer;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.label`
  font-size: 1.6rem;
  color: var(--color-dark-grey);
`;

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <InputWrapper>
      <Input
        type="checkbox"
        value={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <Label htmlFor="checkbox">Fulltime only</Label>
    </InputWrapper>
  );
};
export default Checkbox;
