import { useEffect } from "react";

import { ProjectsContainer } from "../utils/styled";
import { AR, USA } from "../utils/translation";

//! mui component
import { Typography, Grid, Button, colors } from "@mui/material";

//! mui icons
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

//! react-router
import { Link } from "react-router-dom";

//! aos scroll animation
import AOS from "aos";
import "aos/dist/aos.css";
import ProjectsImages from "./ProjectsImages";

const Body = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <ProjectsImages
        checkSaudiFlag={props.checkSaudiFlag}
        checkDarkMode={props.checkDarkMode}
        colors={props.colors}
        className='body-container'
      />
    </div>
  );
};

export default Body;
