import {
  SearchContainer,
  SearchInput,
  FilterIcon,
} from "./SearchComponent.styles";
import FilterIconSvg from "../assets/mobile/icon-filter.svg";
import SearchIcon from "../assets/mobile/icon-search.svg";
import { SecondaryButton } from "./button.style";
import { useJob } from "../contexts/JobContext";

const MobileSearch = () => {
  const { searchQuery, setModalIsOpen, setSearchQuery } = useJob();
  const openModal = () => {
    setModalIsOpen(true);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search by tittle"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <FilterIcon src={FilterIconSvg} alt="filter" onClick={openModal} />
      {/*<SecondaryButton>
        <Icon src={SearchIcon} alt="search" />
  </SecondaryButton> */}
    </SearchContainer>
  );
};
export default MobileSearch;
