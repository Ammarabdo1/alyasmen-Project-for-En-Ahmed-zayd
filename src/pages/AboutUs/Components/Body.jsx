import { useEffect } from "react";

import { AboutContainer } from "../utils/styled";
import { AR, USA } from "../utils/translation";

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

//! aos scroll animation
import AOS from "aos";
import "aos/dist/aos.css";
import Photos from "../utils/photosTransition";

const Body = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <AboutContainer
      checkSaudiFlag={props.checkSaudiFlag}
      checkDarkMode={props.checkDarkMode}
      color={props.colors}
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
            <TipsAndUpdatesIcon className="lamp-icon" />
          </Typography>
          <Typography variant="subtitle1">
            {props.checkSaudiFlag ? AR.DIS : USA.DIS}
          </Typography>
        </Grid>

        <Photos
          checkSaudiFlag={props.checkSaudiFlag}
          checkDarkMode={props.checkDarkMode}
        />
      </Grid>
    </AboutContainer>
  );
};

export default Body;
