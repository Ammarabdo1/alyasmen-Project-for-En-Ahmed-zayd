import React, { useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useMediaQuery, Button } from "@mui/material";

import {
  BackGroundColorContainer,
  ProjectsComponent,
  TextContainer,
  TopImages,
  MiddleImages,
  BottomImages,
  GoDownButton,
} from "../utils/styled";
import { AR, USA } from "../utils/translation";

//! mui component
import { Typography, Grid } from "@mui/material";

//! mui icons
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";

//! react-router

//! aos scroll animation
import AOS from "aos";
import "aos/dist/aos.css";

// Little helpers ...
const url = (name, wrap = false) =>
  `${
    wrap ? "url(" : ""
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ")" : ""
  }`;

export default function ProjectsImages({
  colors,
  checkSaudiFlag,
  checkDarkMode,
}) {
  const isMobile = useMediaQuery("(max-width: 1000px)");

  const parallax = useRef(null);
  return (
    <ProjectsComponent color={colors} checkDarkMode={checkDarkMode}>
      {isMobile ? (
        <div className="all-projects">
          <Parallax ref={parallax} pages={5}>
            {/*//! Text */}
            <TextContainer
              checkSaudiFlag={checkSaudiFlag}
              checkDarkMode={checkDarkMode}
              color={colors}
            >
              <ParallaxLayer
                offset={0.05}
                speed={-0.3}
                style={{
                  pointerEvents: "none",
                }}
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
                      {checkSaudiFlag ? AR.TITLE : USA.TITLE}{" "}
                      <TipsAndUpdatesIcon className="lamp-icon" />
                    </Typography>
                    <Typography variant="subtitle1">
                      {checkSaudiFlag ? AR.DIS : USA.DIS}
                    </Typography>
                  </Grid>
                </Grid>
              </ParallaxLayer>
            </TextContainer>

            <BackGroundColorContainer
              color={colors}
              checkDarkMode={checkDarkMode}
            >
              <ParallaxLayer offset={2} speed={1} className="bg-p1" />
              <ParallaxLayer offset={4} speed={1} className="bg-p2" />
            </BackGroundColorContainer>

            {/*//! 1 Top */}
            <TopImages color={colors}>
              <ParallaxLayer
                offset={1.1}
                speed={0.3}
                className="images-container"
              >
                <img src="images/real-projects/1.jpg" />
                <img src="images/real-projects/2.jpg" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.35}
                speed={0.3}
                className="images-container"
              >
                <img src="images/real-projects/10.jpg" />
                <img src="images/real-projects/12.jpg" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.52}
                speed={0.2}
                className="images-container"
              >
                <img src="images/real-projects/sw1.jpg" />
                <img src="images/real-projects/sw3.jpg" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.72}
                speed={0.2}
                className="images-container"
              >
                <img src="images/real-projects/sw2.jpg" />
                <img src="images/real-projects/sw4.jpg" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1.92}
                speed={0.2}
                className="images-container"
              >
                <img src="images/real-projects/sw5.jpg" />
                <img src="images/real-projects/sw8.jpg" />
              </ParallaxLayer>
            </TopImages>

            {/*//! starts */}
            <div>
              <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url("stars", true),
                  backgroundSize: "cover",
                }}
              />

              <ParallaxLayer
                offset={3}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url("stars", true),
                  backgroundSize: "cover",
                }}
              />

              <ParallaxLayer
                offset={6}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url("stars", true),
                  backgroundSize: "cover",
                }}
              />
            </div>

            {/*//! 2 Middle */}
            <MiddleImages
              color={colors}
              checkDarkMode={checkDarkMode}
              checkSaudiFlag={checkSaudiFlag}
            >
              {/*//! Right */}
              <ParallaxLayer offset={0.8} speed={-0.1} className="right">
                <img src="images/real-projects/t1.jpg" />

                <img src="images/real-projects/t2.jpg" />

                <img src="images/real-projects/t3.jpg" />
              </ParallaxLayer>

              {/*//! top */}
              <ParallaxLayer offset={0.5} speed={0.1} className="top">
                <img src="images/real-projects/w4.jpg" />
              </ParallaxLayer>

              {/*//! middle */}
              <ParallaxLayer offset={0.8} speed={0.2} className="middle">
                <img src="images/real-projects/w5.jpg" />
              </ParallaxLayer>

              {/*//! bottom */}
              <div className="bottom">
                {/*//* middle */}
                <ParallaxLayer offset={2} speed={-0} className="middle">
                  <div className="hover-img">
                    <img
                      src="images/real-projects/w3.jpg"
                      className="main-img"
                    />
                    <img
                      src={`images/real-projects/hoverImages/${
                        checkDarkMode ? "DMBg" : "bgL"
                      }.jpg`}
                      className="absolute-img"
                    />
                  </div>
                </ParallaxLayer>
              </div>

              {/*//! left */}
              <ParallaxLayer offset={0.8} speed={-0.1} className="left">
                <img src="images/real-projects/t4.jpg" />

                <img src="images/real-projects/t5.jpg" />

                <img src="images/real-projects/t6.jpg" />
              </ParallaxLayer>
            </MiddleImages>

            {/*//! clouds */}
            <div>
              <ParallaxLayer
                offset={1}
                speed={0.8}
                style={{
                  opacity: 0.2,
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "start",
                }}
              >
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%", marginLeft: "70%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%", marginLeft: "40%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1}
                speed={0.2}
                style={{
                  opacity: 0.2,
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%", marginLeft: "60%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "25%", marginLeft: "30%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%", marginLeft: "80%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={0}
                speed={-0.1}
                style={{
                  opacity: 0.2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%", marginLeft: "10%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%", marginLeft: "10%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%", marginLeft: "5%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "15%", marginLeft: "75%" }}
                />
              </ParallaxLayer>
            </div>

            {/*//! 3 Bottom */}
            <BottomImages color={colors}>
              <ParallaxLayer offset={2.4} speed={0.2} className="bottom-images">
                <img src="images/real-projects/3.jpg" />
                <img src="images/real-projects/4.jpg" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={2.65}
                speed={0.2}
                className="bottom-images"
              >
                <img src="images/real-projects/5.jpg" />
                <img src="images/real-projects/6.jpg" />
              </ParallaxLayer>

              <ParallaxLayer offset={2.9} speed={0.2} className="bottom-images">
                <img src="images/real-projects/7.jpg" />
                <img src="images/real-projects/8.jpg" />
              </ParallaxLayer>

              <ParallaxLayer offset={3.2} speed={0.2} className="bottom-images">
                <img src="images/real-projects/9.jpg" />
                <img src="images/real-projects/11.jpg" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={3.45}
                speed={0.2}
                className="bottom-images"
              >
                <img src="images/real-projects/13.jpg" />
                <img src="images/real-projects/17.jpg" />
              </ParallaxLayer>

              <ParallaxLayer offset={3.7} speed={0.2} className="bottom-images">
                <img src="images/real-projects/18.jpg" />
                <img src="images/real-projects/19.jpg" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={3.95}
                speed={0.2}
                className="bottom-images"
              >
                <img src="images/real-projects/20.jpg" />
                <img src="images/real-projects/21.jpg" />
              </ParallaxLayer>
              <GoDownButton color={colors}>
                  <Button
                    variant="contained"
                    onClick={() =>
                      window.scrollTo({
                        top: window.scrollY + window.innerHeight + 100,
                        behavior: "smooth",
                      })
                    }
                  >
                    <KeyboardArrowDownIcon className="icon" />
                  </Button>
              </GoDownButton>
            </BottomImages>
          </Parallax>
        </div>
      ) : (
        <div className="all-projects">
          <Parallax ref={parallax} pages={5}>
            {/*//! Text */}
            <TextContainer
              checkSaudiFlag={checkSaudiFlag}
              checkDarkMode={checkDarkMode}
              color={colors}
            >
              <ParallaxLayer
                offset={0.05}
                speed={-0.3}
                style={{
                  pointerEvents: "none",
                }}
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
                      {checkSaudiFlag ? AR.TITLE : USA.TITLE}{" "}
                      <TipsAndUpdatesIcon className="lamp-icon" />
                    </Typography>
                    <Typography variant="subtitle1">
                      {checkSaudiFlag ? AR.DIS : USA.DIS}
                    </Typography>
                  </Grid>
                </Grid>
              </ParallaxLayer>
            </TextContainer>

            <BackGroundColorContainer
              color={colors}
              checkDarkMode={checkDarkMode}
            >
              <ParallaxLayer offset={2} speed={1} className="bg-p1" />
              <ParallaxLayer offset={4} speed={1} className="bg-p2" />
            </BackGroundColorContainer>

            {/*//! 1 Top */}
            <TopImages color={colors}>
              <ParallaxLayer
                offset={0}
                speed={0.3}
                className="images-container"
              >
                <img src="images/real-projects/1.jpg" />
                <img src="images/real-projects/2.jpg" />
                <img src="images/real-projects/10.jpg" />
                <img src="images/real-projects/12.jpg" />
                <img src="images/real-projects/14.jpg" />
              </ParallaxLayer>
              <ParallaxLayer
                offset={0.26}
                speed={0.2}
                className="images-container"
              >
                <img src="images/real-projects/sw1.jpg" />
                <img src="images/real-projects/sw3.jpg" />
                <img src="images/real-projects/sw2.jpg" />
                <img src="images/real-projects/sw4.jpg" />
                <img src="images/real-projects/sw5.jpg" />
              </ParallaxLayer>
            </TopImages>

            {/*//! starts */}
            <div>
              <ParallaxLayer
                offset={0}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url("stars", true),
                  backgroundSize: "cover",
                }}
              />

              <ParallaxLayer
                offset={3}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url("stars", true),
                  backgroundSize: "cover",
                }}
              />

              <ParallaxLayer
                offset={6}
                speed={0}
                factor={3}
                style={{
                  backgroundImage: url("stars", true),
                  backgroundSize: "cover",
                }}
              />
            </div>

            {/*//! 2 Middle */}
            <MiddleImages color={colors} checkDarkMode={checkDarkMode}>
              {/*//! Right */}
              <ParallaxLayer offset={1} speed={-0.1} className="right">
                <img src="images/real-projects/t1.jpg" />

                <img src="images/real-projects/t2.jpg" />

                <img src="images/real-projects/t3.jpg" />
              </ParallaxLayer>

              {/*//! top */}
              <ParallaxLayer offset={0.8} speed={0.1} className="top">
                <img src="images/real-projects/w4.jpg" />
              </ParallaxLayer>

              {/*//! middle */}
              <ParallaxLayer offset={1.5} speed={0.2} className="middle">
                <img src="images/real-projects/w5.jpg" />
              </ParallaxLayer>

              {/*//! bottom */}
              <div className="bottom">
                {/*//* middle */}
                <ParallaxLayer offset={2.6} speed={-0} className="middle">
                  <div className="hover-img">
                    <img
                      src="images/real-projects/w3.jpg"
                      className="main-img"
                    />
                    <img
                      src={`images/real-projects/hoverImages/${
                        checkDarkMode ? "bgD" : "bgL"
                      }.jpg`}
                      className="absolute-img"
                    />
                  </div>
                </ParallaxLayer>
              </div>

              {/*//! left */}
              <ParallaxLayer offset={1} speed={-0.1} className="left">
                <img src="images/real-projects/t4.jpg" />

                <img src="images/real-projects/t5.jpg" />

                <img src="images/real-projects/t6.jpg" />
              </ParallaxLayer>
            </MiddleImages>

            {/*//! clouds */}
            <div>
              <ParallaxLayer
                offset={1}
                speed={0.8}
                style={{
                  opacity: 0.2,
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "start",
                }}
              >
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%", marginLeft: "70%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%", marginLeft: "40%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={1}
                speed={0.2}
                style={{
                  opacity: 0.2,
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "start",
                }}
              >
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%", marginLeft: "60%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "25%", marginLeft: "30%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%", marginLeft: "80%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer
                offset={0}
                speed={-0.1}
                style={{
                  opacity: 0.2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                }}
              >
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%", marginLeft: "10%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "10%", marginLeft: "10%" }}
                />
              </ParallaxLayer>

              <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "20%", marginLeft: "5%" }}
                />
                <img
                  src={url("cloud")}
                  style={{ display: "block", width: "15%", marginLeft: "75%" }}
                />
              </ParallaxLayer>
            </div>

            {/*//! 3 Bottom */}
            <BottomImages color={colors}>
              <ParallaxLayer offset={3.2} speed={0.2} className="bottom-images">
                <img src="images/real-projects/3.jpg" />
                <img src="images/real-projects/4.jpg" />
                <img src="images/real-projects/5.jpg" />
                <img src="images/real-projects/6.jpg" />
                <img src="images/real-projects/7.jpg" />
              </ParallaxLayer>

              <ParallaxLayer
                offset={3.55}
                speed={0.2}
                className="bottom-images"
              >
                <img src="images/real-projects/8.jpg" />
                <img src="images/real-projects/9.jpg" />
                <img src="images/real-projects/11.jpg" />
                <img src="images/real-projects/13.jpg" />
                <img src="images/real-projects/16.jpg" />
              </ParallaxLayer>

              <ParallaxLayer offset={3.9} speed={0.2} className="bottom-images">
                <img src="images/real-projects/17.jpg" />
                <img src="images/real-projects/18.jpg" />
                <img src="images/real-projects/19.jpg" />
                <img src="images/real-projects/20.jpg" />
                <img src="images/real-projects/21.jpg" />
              </ParallaxLayer>
            </BottomImages>
          </Parallax>
        </div>
      )}
    </ProjectsComponent>
  );
}
