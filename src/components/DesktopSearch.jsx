import { useSelector, useDispatch } from "react-redux";
import { setSearchValue, setFilterByLocation } from "../state/searchSlice";
import {
  SearchContainer,
  GridItem,
  SearchInput,
  Icon,
} from "./SearchComponent.styles";
import Checkbox from "./Checkbox";
import SearchIconSvg from "../assets/desktop/icon-search.svg";
import LocationIconSvg from "../assets/desktop/icon-location.svg";
import { Button } from "./button.style";

const DesktopSearch = () => {
  const searchValue = useSelector((state) => state.search.searchValue);
  const filterByLocation = useSelector(
    (state) => state.search.filterByLocation
  );
  const dispatch = useDispatch();

  const handleSearchInputChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };
  const handleLocationFilterChange = (e) => {
    dispatch(setFilterByLocation(e.target.value));
  };

  return (
    <SearchContainer>
      <GridItem>
        <Icon src={SearchIconSvg} />
        <SearchInput
          placeholder="Search"
          value={searchValue}
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
        <Button>Search</Button>
      </GridItem>
    </SearchContainer>
  );
};
export default DesktopSearch;
