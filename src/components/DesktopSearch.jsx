import {
  SearchContainer,
  GridItem,
  SearchInput,
  Icon,
} from "./SearchComponent.styles";
import Checkbox from "./Checkbox";
import SearchIconSvg from "../assets/desktop/icon-search.svg";
import LocationIconSvg from "../assets/desktop/icon-location.svg";
import { useJob } from "../contexts/JobContext";

const DesktopSearch = () => {
  const { setSearchQuery, setFilterByLocation, searchQuery, filterByLocation } =
    useJob();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleLocationFilterChange = (e) => {
    setFilterByLocation(e.target.value);
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
      </GridItem>
      <GridItem>
        <Icon src={LocationIconSvg} />
        <SearchInput
          placeholder="Filter by Location"
          value={filterByLocation}
          onChange={handleLocationFilterChange}
        />
      </GridItem>
      <GridItem>
        <Checkbox />
      </GridItem>
    </SearchContainer>
  );
};
export default DesktopSearch;
