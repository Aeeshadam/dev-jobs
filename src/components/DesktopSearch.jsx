import Select from "react-select";
import {
  SearchContainer,
  GridItem,
  SearchInput,
  Icon,
} from "../styles/SearchComponent.styles";
import SearchIconSvg from "../assets/desktop/icon-search.svg";
import LocationIconSvg from "../assets/desktop/icon-location.svg";
import { useJob } from "../contexts/JobContext";
import { optionsContract, colorStyles } from "../styles/CustomSelect";
import { SelectContainer } from "../styles/Form.style";

const DesktopSearch = () => {
  const {
    setSearchQuery,
    setFilterByLocation,
    searchQuery,
    filterByLocation,
    filterByContract,
    setFilterByContract,
  } = useJob();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const handleLocationFilterChange = (e) => {
    setFilterByLocation(e.target.value);
  };

  const handleContractChange = (selectedOption) => {
    setFilterByContract(selectedOption ? selectedOption.value : "");
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
        <SelectContainer>
          <Select
            options={optionsContract}
            value={optionsContract.find(
              (option) => option.value === filterByContract
            )}
            onChange={handleContractChange}
            styles={colorStyles}
            placeholder="Filter Jobs by Contract Type "
          />
        </SelectContainer>
      </GridItem>
    </SearchContainer>
  );
};
export default DesktopSearch;
