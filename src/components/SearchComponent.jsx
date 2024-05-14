import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";
import { useEffect } from "react";
import { useJob } from "../contexts/JobContext";

export const SearchComponent = () => {
  const { setIsSmallScreen, isSmallScreen } = useJob();

  const handleResize = () => {
    // eslint-disable-next-line no-undef
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    // eslint-disable-next-line no-undef
    window.addEventListener("resize", handleResize);
    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isSmallScreen ? <MobileSearch /> : <DesktopSearch />}</>;
};
