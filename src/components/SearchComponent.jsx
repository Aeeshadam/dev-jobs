import { useSelector, useDispatch } from "react-redux";
import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";
import { useEffect } from "react";
import { setIsSmallScreen } from "../state/searchSlice";

export const SearchComponent = () => {
  const isSmallScreen = useSelector((state) => state.search.isSmallScreen);
  const dispatch = useDispatch();

  const handleResize = () => {
    dispatch(setIsSmallScreen(window.innerWidth <= 768));
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isSmallScreen ? <MobileSearch /> : <DesktopSearch />}</>;
};
