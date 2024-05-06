import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";
import { useEffect, useState } from "react";

export const SearchComponent = ({ openModal }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [searchValue, setSearchValue] = useState("");
  const [filterByLocation, setFilterByLocation] = useState("");

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);
  return (
    <>
      {isSmallScreen ? (
        <MobileSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filterByLocation={filterByLocation}
          setFilterByLocation={setFilterByLocation}
          openModal={openModal}
        />
      ) : (
        <DesktopSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          filterByLocation={filterByLocation}
          setFilterByLocation={setFilterByLocation}
        />
      )}
    </>
  );
};
