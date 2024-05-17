import DesktopSearch from "./DesktopSearch";
import MobileSearch from "./MobileSearch";
import { useEffect } from "react";
import { useJob } from "../contexts/JobContext";

export const SearchComponent = () => {
  const { setIsSmallScreen, isSmallScreen } = useJob();

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      // eslint-disable-next-line no-undef
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <>{isSmallScreen ? <MobileSearch /> : <DesktopSearch />}</>;
};
