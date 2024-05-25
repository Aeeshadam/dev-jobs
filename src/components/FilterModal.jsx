import styled from "styled-components";
import { SearchInput, Icon, GridItem } from "../styles/SearchComponent.styles";
import LocationIcon from "../assets/desktop/icon-location.svg";
import { ButtonGrid } from "../styles/button.style";
import { useJob } from "../contexts/JobContext";
import { SelectContainer } from "../styles/Form.style";
import Checkbox from "./Checkbox";

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 4rem;
`;

const ModalContainer = styled.div`
  background-color: var(--color-very-dark);
  border-radius: 0.8rem;
  padding: 2.4rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
`;

const FilterModal = () => {
  const { filterByLocation, setFilterByLocation, setModalIsOpen } = useJob();

  const handleLocationFilterChange = (e) => {
    setFilterByLocation(e.target.value);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <ModalBackground>
      <ModalContainer>
        <GridItem>
          <Icon src={LocationIcon} />
          <SearchInput
            placeholder="Filter by Location"
            value={filterByLocation}
            onChange={handleLocationFilterChange}
          />
        </GridItem>
        <GridItem>
          <SelectContainer>
            <Checkbox />
          </SelectContainer>
        </GridItem>

        <ButtonGrid onClick={closeModal}>Return</ButtonGrid>
      </ModalContainer>
    </ModalBackground>
  );
};
export default FilterModal;
