import { useSelector, useDispatch } from "react-redux";
import { setSearchValue, setModalIsOpen } from "../state/searchSlice";
import {
  SearchContainer,
  SearchInput,
  Icon,
  FilterIcon,
} from "./SearchComponent.styles";
import FilterIconSvg from "../assets/mobile/icon-filter.svg";
import SearchIcon from "../assets/mobile/icon-search.svg";
import { SecondaryButton } from "./button.style";

const MobileSearch = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setModalIsOpen(true));
  };

  const handleSearchInputChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search by tittle"
        value={searchValue}
        onChange={handleSearchInputChange}
      />
      <FilterIcon src={FilterIconSvg} alt="filter" onClick={openModal} />
      <SecondaryButton>
        <Icon src={SearchIcon} alt="search" />
      </SecondaryButton>
    </SearchContainer>
  );
};
export default MobileSearch;
