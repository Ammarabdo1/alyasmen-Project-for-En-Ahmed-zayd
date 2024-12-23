import React, { useState, useEffect } from "react";
import { BodyComponent, ContactInfo } from "../utils/styled";
import { AR, USA } from "../utils/translation";
import { Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import RecentActorsOutlinedIcon from "@mui/icons-material/RecentActorsOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import ContactMailOutlinedIcon from "@mui/icons-material/ContactMailOutlined";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

const Body = ({ checkDarkMode, checkSaudiFlag, colors }) => {
  const [checkClickInfoPhone, setCheckClickInfoPhone] = useState(false);

  const handleClickInfoPhone = () => {
    setCheckClickInfoPhone(true);
    const timeoutInfo = setTimeout(() => setCheckClickInfoPhone(false), 1000);

    return () => clearTimeout(timeoutInfo);
  };

  const [checkClickInfoEmail, setCheckClickInfoEmail] = useState(false);

  const handleClickInfoEmail = () => {
    window.scrollTo({
      top: window.scrollY + (window.innerHeight * 1.5), // Scroll down by one full viewport height
      behavior: "smooth", // Smooth scroll effect
    })
    setCheckClickInfoEmail(true);
    const timeoutInfo = setTimeout(() => setCheckClickInfoEmail(false), 1000);

    return () => clearTimeout(timeoutInfo);
  };

  const [checkClickInfoLocation, setCheckClickInfoLocation] = useState(false);

  const handleClickInfoLocation = () => {
    setCheckClickInfoLocation(true);
    const timeoutInfo = setTimeout(
      () => setCheckClickInfoLocation(false),
      1000
    );

    return () => clearTimeout(timeoutInfo);
  };

  useEffect(() => {
    AOS.init();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <BodyComponent
      checkSaudiFlag={checkSaudiFlag}
      checkDarkMode={checkDarkMode}
      color={colors}
    >
      <Grid container>
        <Grid
          md={7}
          sm={12}
          className="text"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Typography variant="h2">
            {checkSaudiFlag ? AR.title : USA.title}
            <RecentActorsOutlinedIcon className="contact-icon" />
          </Typography>
          <Link to="https://wa.me/+201112644891">
            <ContactInfo
              checkSaudiFlag={checkSaudiFlag}
              checkDarkMode={checkDarkMode}
              checkClickInfo={checkClickInfoPhone}
              color={colors}
              onClick={handleClickInfoPhone}
            >
              <ContactPhoneOutlinedIcon className="info-icon" />

              <Typography variant="subtitle1">
                {checkSaudiFlag ? AR.phone : USA.phone}
              </Typography>
            </ContactInfo>
          </Link>
          <Link
           smooth
          >
            <ContactInfo
              checkSaudiFlag={checkSaudiFlag}
              checkDarkMode={checkDarkMode}
              checkClickInfo={checkClickInfoEmail}
              color={colors}
              onClick={handleClickInfoEmail}
            >
              <ContactMailOutlinedIcon className="info-icon" />

              <Typography variant="subtitle1">
                {checkSaudiFlag ? AR.email : USA.email}
              </Typography>
            </ContactInfo>
          </Link>
          <ContactInfo
            checkSaudiFlag={checkSaudiFlag}
            checkDarkMode={checkDarkMode}
            checkClickInfo={checkClickInfoLocation}
            color={colors}
            onClick={handleClickInfoLocation}
          >
            <LocationOnTwoToneIcon className="info-icon" />
            <Typography variant="subtitle1">
              {checkSaudiFlag ? AR.address : USA.address}
            </Typography>
          </ContactInfo>
        </Grid>

        <Grid md={5} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img src="images/about.jpeg" alt="company" />
          </div>
        </Grid>
      </Grid>
    </BodyComponent>
  );
};

export default Body;
