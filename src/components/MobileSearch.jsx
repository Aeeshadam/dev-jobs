import {
  SearchContainer,
  SearchInput,
  Icon,
  FilterIcon,
} from "./SearchComponent.styles";
import FilterIconSvg from "../mobile/icon-filter.svg";
import SearchIcon from "../mobile/icon-search.svg";
import { SecondaryButton } from "./button.style";

const MobileSearch = ({
  searchValue,
  setSearchValue,
  filterByLocation,
  setFilterByLocation,
  openModal,
}) => {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search by tittle"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <FilterIcon src={FilterIconSvg} alt="filter" onClick={openModal} />
      <SecondaryButton>
        <Icon src={SearchIcon} alt="search" />
      </SecondaryButton>
    </SearchContainer>
  );
};
export default MobileSearch;
