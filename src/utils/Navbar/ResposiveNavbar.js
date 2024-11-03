import React, { useState, useEffect } from "react";
import SwitchModeColor from "./MaterialUISwitch";
import { toggle_theme } from "../../redux/actions/colorActions";
import { useDispatch } from "react-redux";
//! styled components
import styled from "styled-components";

//! mui components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//! mui Icons
import HomeIcon from "@mui/icons-material/Home";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import InfoIcon from "@mui/icons-material/Info";
// import MoreTimeIcon from "@mui/icons-material/MoreTime";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import SpeedIcon from "@mui/icons-material/Speed";

// Media icons
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { FaFacebook } from "react-icons/fa";
// list Icon
import ReorderIcon from "@mui/icons-material/Reorder";
import ClearAllIcon from "@mui/icons-material/ClearAll";

// mode color Icons
import LightModeIcon from "@mui/icons-material/LightMode";
import { MdDarkMode } from "react-icons/md";

//! react-router
import { Link } from "react-router-dom";

//! aos animation scroll
import AOS from "aos";
import "aos/dist/aos.css";

import { useSelector } from "react-redux";

export default function TemporaryDrawer(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  const {open, setOpen} = props;
  const theme = useSelector((state) => state.theme);
  const themeMode = useSelector((state) => state[theme]);
  const [colors, setColors] = useState(themeMode);

  useEffect(() => setColors(themeMode), [useSelector((state) => state.theme)]);

  const dispatch = useDispatch();
  //!stats

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //! function show responsive navbar
  const DrawerList = (
    <Box
      sx={{ width: "250px", background: colors.bg, height: "100vh" }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* //TODO>> logo img */}
      <div style={{ margin: "10px", direction: "rtl" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => props.setCheckSaudiFlag(!props.checkSaudiFlag)}
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

          {props.checkDarkMode && (
            <Button
              data-aos="zoom-in"
              disabled={!props.checkDarkMode}
              onClick={() => {
                props.setCheckDarkMode(false);
                dispatch(toggle_theme());
              }}
            >
              <MdDarkMode style={{ color: "#2b4148", fontSize: "2rem" }} />
            </Button>
          )}
          {!props.checkDarkMode && (
            <Button
              data-aos="zoom-in"
              disabled={props.checkDarkMode}
              onClick={(e) => {
                props.setCheckDarkMode(true);
                dispatch(toggle_theme());
              }}
            >
              <LightModeIcon style={{ color: "#EECE95", fontSize: "2rem" }} />
            </Button>
          )}
        </div>
      </div>
      <Divider style={{ background: colors.text }} />

      {/* //TODO>> pages list */}
      <List style={{ color: colors.text }}>
        {/* Home */}
        <ListItem
          disablePadding
          style={{ borderBottom: `1px solid ${colors.border}` }}
        >
          <ListItemButton component={Link} to="/">
            <ListItemIcon>
              <HomeIcon style={{ color: colors.text2 }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "الرئيسية" : "Home"}
            />
          </ListItemButton>
        </ListItem>

        {/* about */}
        <ListItem
          disablePadding
          style={{ borderBottom: `1px solid ${colors.border}` }}
        >
          <ListItemButton component={Link} to="/about">
            <ListItemIcon>
              <InfoIcon style={{ color: colors.text2 }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "من نحن" : "About Us"}
            />
          </ListItemButton>
        </ListItem>

        {/* works */}
        <ListItem
          disablePadding
          style={{ borderBottom: `1px solid ${colors.border}` }}
        >
          {" "}
          <ListItemButton component={Link} to="/projects">
            <ListItemIcon>
              <AutoFixHighIcon style={{ color: colors.text2 }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? " أعمالنا" : "Projects"}
            />
          </ListItemButton>
        </ListItem>

        {/* more */}
        {/* <ListItem
          disablePadding
          style={{ borderBottom: "1px solid #eecd9567" }}
        >
          <ListItemButton component={Link} to="/more">
            <ListItemIcon>
              <MoreTimeIcon style={{ color: colors.text2 }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "اعرف اكثر" : "Know More"}
            />
          </ListItemButton>
        </ListItem> */}

        {/* services */}
        <ListItem
          disablePadding
          style={{ borderBottom: `1px solid ${colors.border}` }}
        >
          <ListItemButton component={Link} to="/services">
            <ListItemIcon>
              <SpeedIcon style={{ color: colors.text2 }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "خدماتنا " : "Services"}
            />
          </ListItemButton>
        </ListItem>

        {/* contact */}
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact">
            <ListItemIcon>
              <ContactMailIcon style={{ color: colors.text2 }} />
            </ListItemIcon>
            <ListItemText
              primary={props.checkSaudiFlag ? "تواصل معنا" : "Contact Us"}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  //! main component
  return (
    <div>
      {/*//? << main navbar >>  */}
      <NavbarContainer
        checkDarkMode={props.checkDarkMode}
        style={{ width: "100%", overflow: "hidden", direction: "ltr" }}
        color={colors}
      >
        <Link to="/">
          <img
            className="navbar-img"
            src={`images/icons/Logo${colors.mode === "dark" ? "" : "WM"}.png`}
            alt="Logo"
          />
        </Link>

        <div style={{ display: "flex", alignItems: "center" }}>
          {!open && (
            <Button onClick={toggleDrawer(true)}>
              <ReorderIcon
                data-aos="flip-left"
                data-aos-duration="400"
                data-aos-delay="0"
                className="list-icon"
              />
            </Button>
          )}

          {open && (
            <Button onClick={toggleDrawer(false)}>
              <ClearAllIcon
                data-aos="flip-left"
                data-aos-duration="400"
                data-aos-delay="0"
                className="list-icon"
              />
            </Button>
          )}
        </div>

        {open && (
          <Drawer
            anchor="left"
            data-aos="fade-right"
            data-aos-duration="400"
            open={open}
            onClose={toggleDrawer(false)}
            transitionDuration={0}
            style={{
              direction: "rtl",
              width: "100px",
              background: "black",
            }}
          >
            {DrawerList}
            <WhatsContainer>
              <Link target="_blank" to="https://wa.me/+201112644891">
                <WhatsAppIcon className="whats-icon" />
              </Link>
              <Link
                target="_blank"
                to="https://www.facebook.com/share/nVgCkbGY7mtkJEJD/"
              >
                <FaFacebook className="face-icon" />
              </Link>
              <Link target="_blank" to="https://www.instagram.com/azaid6481/">
                <img
                  src="images/icons/instagram.ico"
                  className="instagram-icon"
                />
              </Link>
            </WhatsContainer>
          </Drawer>
        )}
      </NavbarContainer>

      {/* //TODO>> list links */}
    </div>
  );
}

const NavbarContainer = styled.div`
  transition: all 0s ease;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: ${(props) => props.color.bg};
  backdrop-filter: blur(10px);
  position: relative;
  top: 0;
  z-index: 1000;
  min-height: 12vh;
  box-shadow: 0px 0px 18px 7px
    ${(props) => (props.checkDarkMode ? "#E5E5E5" : "#000000de")};

  img {
    width: 80px;
    margin-left: 10px;
  }

  .list-icon {
    color: #eece95;
    font-size: 2rem;
    outline-offset: 3px;
    outline: 1px solid white;
  }
`;

const WhatsContainer = styled.div`
  .whats-icon {
    text-align: center;
    margin-left: 5px;
    font-size: 2.5rem;
    font-weight: 600;
    border: none;
    color: #5fffa2;
    transition: transform 0.7s ease, box-shadow 0.7s ease,
      border-radius 0.7s ease;
    position: absolute;
    bottom: 20px;
    left: 20px;
    &:hover {
      transform: rotateY(180deg) scale(1.2);
      box-shadow: 0 0 8px 2px;
      border-radius: 50%;
    }
  }

  .face-icon {
    text-align: center;
    margin-left: 5px;
    font-size: 2.5rem;
    font-weight: 600;
    border: none;
    color: #4fa4ff;
    transition: transform 0.7s ease, box-shadow 0.7s ease,
      border-radius 0.7s ease;
    position: absolute;
    bottom: 20px;
    left: 40%;
    &:hover {
      transform: rotateY(180deg) scale(1.2);
      box-shadow: 0 0 8px 2px;
      border-radius: 50%;
    }
  }

  .instagram-icon {
    text-align: center;
    margin-left: 5px;
    font-size: 2.5rem;
    font-weight: 600;
    border: none;
    color: #fcaf45;
    transition: transform 0.7s ease, box-shadow 0.7s ease,
      border-radius 0.7s ease;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 43px;
    &:hover {
      transform: rotateY(180deg) scale(1.2);
      box-shadow: 0 0 8px 2px;
      border-radius: 50%;
    }
  }
`;
