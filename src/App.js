// Importing necessary libraries, components, themes, and styles
import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.jsx";
import styled from "styled-components";
import { Snackbar } from "@mui/material";

import "./App.css";

// Styled-component for the main application body
const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

// Wrapper styled-component for sections that need a background gradient
const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
// Main App component
function App() {
  // State for managing the theme mode
  const [darkMode, setDarkMode] = useState(true);

  // State for managing modal visibility and content
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Define state for Snackbar in App.js
  const [snackbarInfo, setSnackbarInfo] = useState({
    open: false,
    message: "",
    severity: "",
  });

  // Function to update the Snackbar state
  const updateSnackbar = (open, message, severity) => {
    setSnackbarInfo({ open, message, severity });
  };

  console.log(openModal);

  // Render the application within the ThemeProvider and Router context
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        {/* Navbar component with props for theme and toggle functionality */}
        <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
        <Body>
          {/* Main sections of the application */}
          <HeroSection />
          <Wrapper>
            {/* Wrapper used for Skills and Experience sections */}
            <Skills />
            <Experience />
          </Wrapper>
          {/* Projects section with state for modal management */}

          <Projects openModal={openModal} setOpenModal={setOpenModal} />

          <Wrapper>
            {/* Wrapper used for Education and Contact sections */}
            <Education />
            <Contact updateSnackbar={updateSnackbar} />
          </Wrapper>
          {/* Snackbar for displaying notifications */}
          <Snackbar
            open={snackbarInfo.open}
            autoHideDuration={6000}
            onClose={() => setSnackbarInfo({ ...snackbarInfo, open: false })}
            message={snackbarInfo.message}
            severity={snackbarInfo.severity}
          />
          {/* Footer section */}
          <Footer />
          {/* Conditional rendering of the ProjectDetails component based on modal state */}
          {openModal.state && (
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
