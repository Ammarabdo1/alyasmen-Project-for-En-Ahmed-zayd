import * as React from "react";
import Box from "@mui/material/Box";
import { ImageList, ImageListItem, useMediaQuery } from "@mui/material";

import { useEffect } from "react";

import { ServiceDetailsContainer } from "../utils/styled";
import { AR, USA } from "../utils/translation";

//! mui component
import { Typography, Grid } from "@mui/material";

//! mui icons
// lamp icon
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

//! aos scroll animation
import AOS from "aos";
import "aos/dist/aos.css";
import ConvertImage from "./ConvertImg";

export const ServiceDetails = ({
  checkDarkMode,
  checkSaudiFlag,
  serviceType,
  imageNumber,
  colors
}) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ServiceDetailsContainer
      checkSaudiFlag={checkSaudiFlag}
      checkDarkMode={checkDarkMode}
      serviceType={serviceType}
      color={colors}
    >
      <Grid container className="body-container">
        <Grid
          md={7}
          sm={12}
          className="text"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <Typography variant="h2">
            {checkSaudiFlag ? AR[serviceType] : USA[serviceType]}
          </Typography>
          <Typography variant="subtitle1">
            {checkSaudiFlag
              ? AR[serviceType + "_des"]
              : USA[serviceType + "_des"]}
          </Typography>
        </Grid>
        <Grid
          md={5}
          sm={12}
          data-aos="zoom-in"
          data-aos-duration="1000"
          className="images-part"
        >
            <ConvertImage serviceType={serviceType} />
            <ImagesList
              imageType={serviceType}
              imageName={serviceType}
              imageNumber={imageNumber}
            />
        </Grid>
      </Grid>
    </ServiceDetailsContainer>
  );
};

export default function ImagesList({ imageType, imageName, imageNumber }) {

  const isMobile = useMediaQuery("(max-width: 1000px)");

  const ImageNumberList = Array(imageNumber).fill(null);
  return (
    // <Box
    //   sx={!isMobile && !isTablet && { width: 824 }}
    //   className="images-list-box"
    // >
    <ImageList cols={ isMobile ? 1 : 2} rowHeight={300} className="images-list">
      {ImageNumberList.map((item, index) => (
        <ImageListItem key={index}>
          <img
            srcSet={`images/${imageType}/${imageName}${index + 1}.jpg`}
            src={`images/${imageType}/${imageName}${index + 1}.jpg`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>

    // </Box>
  );
}

export function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
