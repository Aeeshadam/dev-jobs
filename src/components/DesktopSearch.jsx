import {
  SearchContainer,
  GridItem,
  SearchInput,
  Icon,
  ClearIcon,
} from "../styles/SearchComponent.styles";
import SearchIconSvg from "../assets/desktop/icon-search.svg";
import LocationIconSvg from "../assets/desktop/icon-location.svg";
import { useJob } from "../contexts/JobContext";
import { SelectContainer } from "../styles/Form.style";
import Checkbox from "./Checkbox";

const DesktopSearch = () => {
  const { setSearchQuery, setFilterByLocation, searchQuery, filterByLocation } =
    useJob();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleLocationFilterChange = (e) => {
    setFilterByLocation(e.target.value);
  };
  const handleSearchClear = () => {
    setSearchQuery("");
  };

  const handleLocationFilterClear = () => {
    setFilterByLocation("");
  };

  return (
    <SearchContainer>
      <GridItem>
        <Icon src={SearchIconSvg} />
        <SearchInput
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <ClearIcon onClick={handleSearchClear}>x</ClearIcon>
      </GridItem>
      <GridItem>
        <Icon src={LocationIconSvg} />
        <SearchInput
          placeholder="Filter by Location"
          value={filterByLocation}
          onChange={handleLocationFilterChange}
        />
        <ClearIcon onClick={handleLocationFilterClear}>x</ClearIcon>
      </GridItem>
      <GridItem>
        <SelectContainer>
          <Checkbox />
        </SelectContainer>
      </GridItem>
    </SearchContainer>
  );
};
export default DesktopSearch;
