import React, {useState, useEffect} from "react";
import {
  FooterComponent,
  P1Description,
  P2Links,
  P3Media,
  P4Contact,
  P5Copyright,
  CopyrightText,
} from "../utils/Footer/styled";

import { AR, USA } from "../utils/Footer/translation";

import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaFacebook } from "react-icons/fa";
import LinkIcon from "@mui/icons-material/Link";

import { useSelector } from "react-redux";

// import "../Css/Footer.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = ({ checkDarkMode, checkSaudiFlag }) => {
  AOS.init();
  const isMobile = useMediaQuery('(max-width: 1000px)')

  const theme = useSelector(state=> state.theme)
  const themeMode = useSelector(state => state[theme])
  const [colors, setColors] = useState(themeMode)

  useEffect(()=>setColors(themeMode), [useSelector(state => state.theme)])

  return (
    <FooterComponent
      checkDarkMode={checkDarkMode}
      checkSaudiFlag={checkSaudiFlag}
      color={colors}
    >
      <Grid container className="footer">
        <Grid md={12} sm={12} className="img-container">
          <div className="img-main" data-aos="fade-down" data-aos-duration="2000">
            <div className="img" data-aos="zoom-out" data-aos-duration="2000">
              <img
                src="images/icons/Logo.png"
                alt="decorGate"
                data-aos="fade-down"
                data-aos-duration="2000"
              />
            </div>
            <div className="rotate-img"></div>
          </div>
        </Grid>

        <Grid
          md={4}
          sm={12}
          className="details"
          data-aos="zoom-out"
          data-aos-duration="1000"
        >
          <P1Description color={colors} checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} >
            <Typography variant="subtitle1">
              <span className='header-description'>{checkSaudiFlag ? AR.des_title : USA.des_title}</span>,{" "}
              {checkSaudiFlag ? AR.des : USA.des},{" "}
              <span className='more-description' >{checkSaudiFlag ? AR.des2 : USA.des2}.</span>
            </Typography>
          </P1Description>
        </Grid>

        <Grid md={3} sm={12} data-aos="zoom-out" data-aos-duration="1000">
          <P2Links color={colors} checkDarkMode={checkDarkMode}>
            <div className="pages">
              <Typography variant="h5">
                {checkSaudiFlag ? AR.title : USA.title}{" "}
                <LinkIcon className="link-icon" />
              </Typography>
              <Link to="/">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[0] : USA.links[0]}
                </Typography>
              </Link>
              <Link to="/about">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[1] : USA.links[1]}
                </Typography>
              </Link>
              <Link to="/projects">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[2] : USA.links[2]}
                </Typography>
              </Link>
              <Link to="/services">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[4] : USA.links[4]}
                </Typography>
              </Link>
              <Link to="/contact">
                <Typography className="page" variant="subtitle2">
                  - {checkSaudiFlag ? AR.links[5] : USA.links[5]}
                </Typography>
              </Link>
            </div>
          </P2Links>
        </Grid>

        <Grid md={3} sm={12} xs={12} data-aos="zoom-out" data-aos-duration="1000">
          <P3Media color={colors} checkDarkMode={checkDarkMode}>
            <div className="medias">
              <Typography variant="h5">
                {checkSaudiFlag ? AR.media : USA.media}
              </Typography>
              <Link to="https://wa.me/+201112644891">
                <WhatsAppIcon className="media whats" />
              </Link>
              <Link to="https://www.instagram.com/azaid6481/">
                <img src="images/icons/instagram.ico" className="media insta" />
              </Link>
              <Link to="https://www.facebook.com/share/nVgCkbGY7mtkJEJD/">
                <FaFacebook className="media face" />
              </Link>
            </div>
          </P3Media>
        </Grid>

        <Grid md={2} sm={12} xs={12} data-aos={!isMobile && "zoom-out"} data-aos-duration="1000">
          <P4Contact color={colors} checkDarkMode={checkDarkMode}>
            <div>
              <Typography variant="h5">
                {checkSaudiFlag ? AR.contact : USA.contact}
              </Typography>
              <Typography variant="subtitle2">
                {checkSaudiFlag ? AR.email : USA.email}
              </Typography>
            </div>
          </P4Contact>
        </Grid>

        <Grid md={12} sm={12} className='copyright-container'>
          <P5Copyright color={colors} checkDarkMode={checkDarkMode}>
            <CopyrightText color={colors} checkDarkMode={checkDarkMode}>
              {checkSaudiFlag ? AR.copyright : USA.copyright}
            </CopyrightText>
          </P5Copyright>
        </Grid>
      </Grid>
    </FooterComponent>
  );
};

export default Footer;
