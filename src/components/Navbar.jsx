import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { toggle_theme } from "../redux/actions/colorActions";

import {
  NavbarContainer,
  NavbarList,
  NavbarLogo,
  NavbarLinks,
  NavbarActions,
} from "../utils/Navbar/styled";

//! responsive navbar
import TemporaryDrawer from "../utils/Navbar/ResposiveNavbar";

//! mui components
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

//! mui icons
import LightModeIcon from "@mui/icons-material/LightMode";
import { MdDarkMode } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";
const Navbar = (props) => {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme); // color mode light or dark
  const themeMode = useSelector((state) => state[theme]);
  const [colors, setColors] = useState(themeMode);
  useEffect(() => setColors(themeMode), [useSelector((state) => state.theme)]);
  console.log(colors.secondary_bg);

  AOS.init();
  //TODO>> check scroll
  const [checkScroll, setCheckScroll] = useState(false);

  //TODO>> fetch widow width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //! check scroll to add background if scroll to navbar
  useEffect(() => {
    window.addEventListener("scroll", () => setCheckScroll(window.scrollY > 0));
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
  }, [window.innerWidth]);

  return (
    <>
      {windowWidth < 1000 ? (
        <TemporaryDrawer
          checkSaudiFlag={props.checkSaudiFlag}
          setCheckSaudiFlag={props.setCheckSaudiFlag}
          checkDarkMode={props.checkDarkMode}
          setCheckDarkMode={props.setCheckDarkMode}
        />
      ) : (
        <NavbarContainer
          checkScroll={checkScroll}
          color={colors}
        >
          <NavbarList
            checkScroll={checkScroll}
            color={colors}
          >
            <NavbarLogo>
              <li>
                <Link to="/">
                  <img
                    className="navbar-img"
                    src="images/icons/Logo.png"
                    alt="Logo"
                    onClick={() => props.setCheckClickLink("Home")}
                  />
                </Link>
              </li>
            </NavbarLogo>

            <NavbarLinks
            checkSaudiFlag={props.checkSaudiFlag}
              checkScroll={checkScroll}
              color={colors}
            >
              <li>
                {/* //! Home Link */}
                <Link
                  to="/"
                  onClick={() => props.setCheckClickLink("Home")}
                  className={props.checkClickLink == "Home" ? "link1" : "link"}
                >
                  {props.checkSaudiFlag ? "الرئيسية" : "Home"}
                </Link>
              </li>
              {/* //! About Link */}
              <li>
                <Link
                  to="/about"
                  onClick={() => props.setCheckClickLink("about")}
                  exact
                  className={props.checkClickLink == "about" ? "link1" : "link"}
                >
                  {props.checkSaudiFlag ? " من نحن" : "About Us"}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  onClick={() => props.setCheckClickLink("projects")}
                  exact
                  className={
                    props.checkClickLink == "projects" ? "link1" : "link"
                  }
                >
                  {props.checkSaudiFlag
                    ? "البعض من مشاريعنا"
                    : "Some of our projects"}
                </Link>
              </li>
              {/* <li>
                <Link
                  to="/more"
                  onClick={() => props.setCheckClickLink("championships")}
                  exact
                  className={
                    props.checkClickLink == "championships" ? "link1" : "link"
                  }
                >
                  {" "}
                  {props.checkSaudiFlag ? 'اعرف اكثر' : 'Know More'} 
                </Link>
              </li> */}

              <li>
                <Link
                  to="/services"
                  onClick={() => props.setCheckClickLink("services")}
                  exact
                  className={
                    props.checkClickLink == "services" ? "link1" : "link"
                  }
                >
                  {" "}
                  {props.checkSaudiFlag ? "خدماتنا" : "Services"}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => props.setCheckClickLink("contact")}
                  exact
                  className={
                    props.checkClickLink == "contact" ? "link1" : "link"
                  }
                >
                  {props.checkSaudiFlag ? " تواصل معنا" : "Contact Us"}
                </Link>
              </li>
            </NavbarLinks>

            <NavbarActions>
              <li style={{ transition: "all 0s ease" }}>
                {/*//! switch mode color  */}
                {props.checkDarkMode && (
                  <Button
                    data-aos="zoom-in"
                    disabled={!props.checkDarkMode}
                    onClick={() => {
                      props.setCheckDarkMode(false);
                      dispatch(toggle_theme());
                    }}
                  >
                    <MdDarkMode
                      style={{ color: "#2b4148", fontSize: "2rem" }}
                    />
                  </Button>
                )}
                {!props.checkDarkMode && (
                  <Button
                    data-aos="zoom-in"
                    disable={props.checkDarkMode}
                    onClick={() => {
                      props.setCheckDarkMode(true);
                      dispatch(toggle_theme());
                    }}
                  >
                    <LightModeIcon
                      style={{ color: "#EECE95", fontSize: "2rem" }}
                    />
                  </Button>
                )}
              </li>

              {/*//! Language change Button  */}
              <li>
                <Button
                  onClick={() => {
                    props.setCheckSaudiFlag(!props.checkSaudiFlag);
                  }}
                  style={{ height: "100%" }}
                >
                  <img
                    style={{ width: "30px" }}
                    src={
                      props.checkSaudiFlag
                        ? "images/USAFlag.png"
                        : "images/saudiFlag.png"
                    }
                    alt="flag"
                  />
                </Button>
              </li>
            </NavbarActions>
          </NavbarList>
        </NavbarContainer>
      )}
    </>
  );
};

export default Navbar;
