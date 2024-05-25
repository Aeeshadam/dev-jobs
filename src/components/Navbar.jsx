import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "./Logo";
import {
  NavbarContainer,
  LogoContainer,
  Menu,
  MenuItem,
  StyledLink,
  Hamburger,
  TopContainer,
  InnerContainer,
} from "../styles/Navbar.styles";

const Navbar = () => {
  const navRef = useRef();
  const [open, setOpen] = useState(false);
  const { currentUser, logOut } = useAuth();
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    const confirmation = window.confirm("Are you sure you want to log out?");

    if (confirmation) {
      try {
        await logOut();
        navigateTo("/");
      } catch (error) {
        console.error("Error during logout:", error);
      }
    } else {
      return;
    }
  };
  const location = useLocation();

  const closeMenu = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMenu);
    return () => {
      window.removeEventListener("click", closeMenu);
    };
  }, [open]);

  return (
    <NavbarContainer ref={navRef}>
      <InnerContainer>
        <TopContainer>
          <LogoContainer>{<Logo />}</LogoContainer>

          <Hamburger onClick={() => setOpen(!open)}>
            <div></div>
            <div></div>
            <div></div>
          </Hamburger>
        </TopContainer>
        <Menu open={open}>
          {currentUser ? (
            <>
              <MenuItem>
                <StyledLink
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  Home
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink
                  to="/my-jobs"
                  className={location.pathname === "/my-jobs" ? "active" : ""}
                >
                  My jobs
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink
                  to="/post-job"
                  className={location.pathname === "/post-job" ? "active" : ""}
                >
                  Post a job
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink onClick={handleLogout}>Sign Out</StyledLink>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <StyledLink to="/login"> Log In</StyledLink>
            </MenuItem>
          )}
        </Menu>
      </InnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;
