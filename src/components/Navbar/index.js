import React, { useEffect, useState } from "react";
import MoonIcon from "../../utils/moon.png";
import SunIcon from "../../utils/sun.png";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  ThemeToggleButton,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

// Primary Navbar component that utilizes styled components for rendering
const Navbar = ({ darkMode, toggleTheme }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const iconColor = darkMode ? "white" : "black"; // colors for dark and light mode
  const textColor = darkMode ? "white" : "black";

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log("MobileIcon width: ", window.innerWidth);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // JSX for the Navbar, containing logo, navigation links, theme toggle, and mobile menu
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          {/* Icon and Portfolio text */}
          <DiCssdeck size="3rem" style={{ color: iconColor }} />
          <Span style={{ color: textColor }}>Portfolio</Span>
        </NavLogo>
        {/* Hamburger icon for mobile menu */}
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        {/* Desktop navigation items */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {/* Theme toggle button */}
        <ButtonContainer>
          <ThemeToggleButton onClick={toggleTheme} title="Switch Theme">
            <img
              src={darkMode ? SunIcon : MoonIcon}
              alt="Theme Toggle"
              style={darkMode ? {} : { marginLeft: "150px" }}
              /* make the icons aligned, even tho they should be because of the moons shape, it seemed like they are not*/
            />
          </ThemeToggleButton>
          {/* Mobile menu which is conditionally rendered based on screen size */}
        </ButtonContainer>
        {isOpen && width < 768 && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
            >
              Github Profile
            </GitHubButton>
            <ThemeToggleButton onClick={toggleTheme} title="Switch Theme">
              <img src={darkMode ? SunIcon : MoonIcon} alt="Theme Toggle" />
            </ThemeToggleButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
