import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Logo from "./Logo";
import {
  NavbarContainer,
  LogoContainer,
  Menu,
  MenuItem,
  StyledLink,
  TopContainer,
  InnerContainer,
  NavIcon,
} from "../styles/Navbar.styles";
import { TertiaryButton } from "../styles/button.style";
import HomeIconSVG from "../assets/mobile/house-solid.svg";
import MyJobsIconSVG from "../assets/mobile/folder-solid.svg";
import AddIconSvg from "../assets/mobile/plus-solid.svg";
import logOutIconSVG from "../assets/mobile/right-from-bracket-solid.svg";

const Navbar = () => {
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

  return (
    <NavbarContainer>
      <InnerContainer>
        <TopContainer>
          <LogoContainer>{<Logo />}</LogoContainer>
        </TopContainer>
        <Menu>
          {currentUser ? (
            <>
              <MenuItem>
                <StyledLink
                  to="/"
                  className={location.pathname === "/" ? "active" : ""}
                >
                  {window.innerWidth < 768 ? (
                    <NavIcon src={HomeIconSVG} alt="home" />
                  ) : (
                    "Home"
                  )}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink
                  to="/my-jobs"
                  className={location.pathname === "/my-jobs" ? "active" : ""}
                >
                  {window.innerWidth < 768 ? (
                    <NavIcon src={MyJobsIconSVG} alt="my jobs" />
                  ) : (
                    "My Jobs"
                  )}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink
                  to="/post-job"
                  className={location.pathname === "/post-job" ? "active" : ""}
                >
                  {window.innerWidth < 768 ? (
                    <NavIcon src={AddIconSvg} alt="Post job" />
                  ) : (
                    "Post Job"
                  )}
                </StyledLink>
              </MenuItem>
              <MenuItem>
                <StyledLink onClick={handleLogout}>
                  {window.innerWidth < 768 ? (
                    <NavIcon src={logOutIconSVG} alt="log out" />
                  ) : (
                    "Log Out"
                  )}
                </StyledLink>
              </MenuItem>
            </>
          ) : (
            <MenuItem>
              <TertiaryButton>
                <StyledLink to="/login">Log in </StyledLink>
              </TertiaryButton>
            </MenuItem>
          )}
        </Menu>
      </InnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;
