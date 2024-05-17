import {
  SearchContainer,
  SearchInput,
  FilterIcon,
} from "../styles/SearchComponent.styles";
import FilterIconSvg from "../assets/mobile/icon-filter.svg";
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
