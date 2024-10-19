import React, { useEffect, useState } from "react";
import { AboutContainer } from "../utils/About/Styled";
import { AR, USA } from "../utils/About/Translation";

//! mui component
import { Typography, Grid, Button } from "@mui/material";

//! mui icons
// left arrow icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// right arrow icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// lamp icon
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

//! react-router
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

//! aos scroll animation
import AOS from "aos";
import "aos/dist/aos.css";
import ColorPicker from "./Color";

const About = (props) => {

  const theme = useSelector(state => state.theme)
  const themeMode = useSelector(state => state[theme])
  const [colors, setColors] = useState(themeMode)

  useEffect(()=> setColors(themeMode) ,[useSelector(state => state.theme)])

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutContainer
      checkSaudiFlag={props.checkSaudiFlag}
      checkDarkMode={props.checkDarkMode}
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
            {props.checkSaudiFlag ? AR.TITLE : USA.TITLE}{" "}
            <TipsAndUpdatesIcon className='lamp-icon'/>
          </Typography>
          <Typography variant="subtitle1">
            {props.checkSaudiFlag ? AR.DIS : USA.DIS}
            <span>
              {" "}
              <p>{props.checkSaudiFlag ? AR.ST : USA.ST}</p>{" "}
              {props.checkSaudiFlag ? (
                <ArrowBackIcon className='arrow' />
              ) : (
                <ArrowForwardIcon className='arrow' />
              )}{" "}
              <p>{props.checkSaudiFlag ? AR.ND : USA.ND}</p>{" "}
              {props.checkSaudiFlag ? (
                <ArrowBackIcon className='arrow' />
              ) : (
                <ArrowForwardIcon className='arrow' />
              )}{" "}
              <p>{props.checkSaudiFlag ? AR.RD : USA.RD}</p>{" "}
            </span>
          </Typography>
          <Link to='/about' >
            <Button variant="contained">
              {props.checkSaudiFlag ? AR.BTN : USA.BTN}
            </Button>
          </Link>
        </Grid>

        <Grid md={5} sm={12} data-aos="fade-up" data-aos-duration="1000">
          <div className="img-container">
            <img src="images/about.jpeg" alt="company" />
          </div>
        </Grid>
      </Grid>
    </AboutContainer>
  );
};

export default About;
