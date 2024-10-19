import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./Css/App.css";
import Main from "./Views/Main";
import MainUSA from "./Views/MainUSA";
import StartUpLoader from "./Views/StartUpLoader";
import NotFound from "./Views/NotFound";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs/AboutUs";
import Contact from "./pages/ContactUs/ContactUs";
import Services from "./pages/Services/ServicesPage";
import Projects from "./pages/Projects/Projects";
import FixedBottomIcons from "./Views/FixedBottomIcons";

import { useMediaQuery } from "@mui/material";

function App() {
  //TODO>> make a style to home at start up the code
  const [checkClickLink, setCheckClickLink] = useState("Home");

  //TODO>> Toggle color of page
  const [checkDarkMode, setCheckDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('colormode');
    return savedMode === 'true'; // Convert string to boolean
  });

  //TODO>> Toggle language of page
  // Initialize checkSaudiFlag with a boolean value based on localStorage
  const [checkSaudiFlag, setCheckSaudiFlag] = useState(() => {
    const savedLanguage = localStorage.getItem('language');
    return savedLanguage === 'false'; // Convert string to boolean
  });

  //TODO>> check loader
  const [loader, setLoader] = useState(true);

  const isMobile = useMediaQuery('(max-width: 1000px)')

  useEffect(() => {
    localStorage.setItem("colormode", checkDarkMode)
  } ,[checkDarkMode])

  useEffect(() => {
    localStorage.setItem('language', checkSaudiFlag)
  } ,[checkSaudiFlag])

  useEffect(() => {
    const closeLoader = setTimeout(() => setLoader(false), 4000);
    return () => clearTimeout(closeLoader)
  }, []);

  return (
    <div
      style={{
        direction: checkSaudiFlag ? "rtl" : "ltr",
        textAlign: checkSaudiFlag ? "right" : "left",
      }}
    >
      {loader ? (
        <StartUpLoader setLoader={setLoader} style={{ overflow: "hidden" }} />
      ) : checkSaudiFlag ? (
        <Router>
          <Navbar
            checkDarkMode={checkDarkMode}
            setCheckDarkMode={setCheckDarkMode}
            checkSaudiFlag={checkSaudiFlag}
            setCheckSaudiFlag={setCheckSaudiFlag}
            checkClickLink={checkClickLink}
            setCheckClickLink={setCheckClickLink}
          />

          <FixedBottomIcons checkSaudiFlag={checkSaudiFlag} isMobile={isMobile} />

          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <Main
                    checkDarkMode={checkDarkMode}
                    setCheckDarkMode={setCheckDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />
            <Route
              path="/*"
              element={<NotFound setCheckClickLink={setCheckClickLink} />}
            />
            <Route
              path="/about"
              element={
                <div>
                  <AboutUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />
            <Route
              path="/contact"
              element={
                <div>
                  <Contact
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    id='contact'
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />
            <Route
              path="/services"
              element={
                <div>
                  <Services
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route
              path="/projects"
              element={
                <div>
                  <Projects
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />
          </Routes>

          <Footer
            checkDarkMode={checkDarkMode}
            checkSaudiFlag={checkSaudiFlag}
          />
        </Router>
      ) : (
        <Router>
          <Navbar
            checkDarkMode={checkDarkMode}
            setCheckDarkMode={setCheckDarkMode}
            checkSaudiFlag={checkSaudiFlag}
            setCheckSaudiFlag={setCheckSaudiFlag}
            checkClickLink={checkClickLink}
            setCheckClickLink={setCheckClickLink}
          />
          <FixedBottomIcons checkSaudiFlag={checkSaudiFlag} isMobile={isMobile} />
          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <MainUSA
                    checkDarkMode={checkDarkMode}
                    setCheckDarkMode={setCheckDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route
              path="/about"
              element={
                <div>
                  <AboutUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route
              path="/contact"
              element={
                <div>
                  <Contact
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route
              path="/services"
              element={
                <div>
                  <Services
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route
              path="/projects"
              element={
                <div>
                  <Projects
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                  <ContactUs
                    checkDarkMode={checkDarkMode}
                    checkSaudiFlag={checkSaudiFlag}
                  />
                </div>
              }
            />

            <Route path="/*" element={<NotFound />} />
          </Routes>
          <Footer
            checkDarkMode={checkDarkMode}
            checkSaudiFlag={checkSaudiFlag}
          />
        </Router>
      )}
    </div>
  );
}

export default App;
