import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setFilterByLocation, setModalIsOpen } from "../state/searchSlice";
import { SearchInput, Icon, GridItem } from "./SearchComponent.styles";
import LocationIcon from "../desktop/icon-location.svg";
import { Button } from "./button.style";
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
`;

const ModalContainer = styled.div`
  background-color: var(--color-very-dark);
  border-radius: 0.8rem;
  padding: 2.4rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
`;

const FilterModal = () => {
  const filterByLocation = useSelector(
    (state) => state.search.filterByLocation
  );

  const dispatch = useDispatch();

  const handleLocationFilterChange = (e) => {
    dispatch(setFilterByLocation(e.target.value));
  };

  const closeModal = () => {
    dispatch(setModalIsOpen(false));
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
          <Checkbox />
        </GridItem>

        <Button onClick={closeModal}>Search</Button>
      </ModalContainer>
    </ModalBackground>
  );
};
export default FilterModal;
