import {
  SearchContainer,
  GridItem,
  SearchInput,
  Icon,
} from "./SearchComponent.styles";
import Checkbox from "./Checkbox";
import SearchIconSvg from "../desktop/icon-search.svg";
import LocationIconSvg from "../desktop/icon-location.svg";
import { Button } from "./button.style";

const DesktopSearch = ({
  searchValue,
  setSearchValue,
  filterByLocation,
  setFilterByLocation,
}) => {
  return (
    <SearchContainer>
      <GridItem>
        <Icon src={SearchIconSvg} />
        <SearchInput
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </GridItem>
      <GridItem>
        <Icon src={LocationIconSvg} />
        <SearchInput
          placeholder="Filter by Location"
          value={filterByLocation}
          onChange={(e) => setFilterByLocation(e.target.value)}
        />
      </GridItem>
      <GridItem>
        <Checkbox />
        <Button>Search</Button>
      </GridItem>
    </SearchContainer>
  );
};
export default DesktopSearch;
