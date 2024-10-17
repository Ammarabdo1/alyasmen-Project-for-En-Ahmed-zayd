import React, { useState, useEffect, useRef } from "react";
import { ServicesContainer, HeaderText, Card } from "../utils/Services/Styled";
import { AR, USA } from "../utils/Services/Translelation";

import { Link } from "react-router-dom";

import imgInternal from "../utils/Services/images/Internal.jpg";
import imgOuter from "../utils/Services/images/out.jpg";
import imgLandScap from "../utils/Services/images/park.jpeg";
import imgArea from "../utils/Services/images/area.jpg";
import imgFinish from "../utils/Services/images/finish.jpg";
import imgBuild from "../utils/Services/images/build.jpg";
import imgLook from "../utils/Services/images/look.jpg";
import imgContactUs from "../utils/Services/images/ContactUs.jpg";

import { Typography, Button, Grid } from "@mui/material";
import { GiArmoredBoomerang } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
const Services = (props) => {

  AOS.init()

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);

  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);

  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const [showVideo, setShowVideo] = useState(false); // Track visibility
  const componentRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Play or pause the video based on its visibility
    if (isVisible && videoRef.current) {
      isVisible && setTimeout(() => videoRef.current.play(), 100);
      setTimeout(() => setShowVideo(false), 1200);
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set visibility state based on the component's visibility
        setIsVisible(entry.isIntersecting);
        setShowVideo(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the component is visible
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current); // Start observing the component
    }

    // Clean up the observer on component unmount
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []); // Run once on component mount

  return (
    <ServicesContainer checkDarkMode={props.checkDarkMode}>
      <Grid container className="container">
        <Grid md={12} sm={12} className="header">
          <HeaderText checkDarkMode={props.checkDarkMode} data-aos='zoom-in' data-aos-duration='1300' >
            <Typography variant="h1" className="main-text">
              {props.checkSaudiFlag ? AR.header : USA.header } <GiArmoredBoomerang className="icon" />
            </Typography>
          </HeaderText>
        </Grid>

        <Grid
          md={4}
          sm={12}
          className="service"
          onMouseEnter={() => setIsHovered4(true)}
          onMouseLeave={() => setIsHovered4(false)}
          data-aos='zoom-in' data-aos-duration='1000' 
        >
          <Card
            checkSaudiFlag={props.checkSaudiFlag}
            isHovered={isHovered4}
            checkDarkMode={props.checkDarkMode}
            showVideo={showVideo}
            ref={componentRef}
            img={imgArea}
          >
            <div className="front">
              <img src="images/Services/4) area.png" alt="" />
              <video src="videos/Up3.mp4" ref={videoRef} muted />
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.area : USA.area }</Typography>{" "}
            </div>
            <div className="back">
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.area : USA.area }</Typography>{" "}
              <Typography variant="subtitle2">{props.checkSaudiFlag ? AR.area_des : USA.area_des }</Typography>
              <Link to='services?service=area' ><Button variant="contained">{props.checkSaudiFlag ? AR.btn : USA.btn }</Button></Link>
            </div>
          </Card>
        </Grid>

        <Grid
          md={3}
          sm={12}
          className="service"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
          data-aos='zoom-in' data-aos-duration='1000' 
        >
          <Card
            checkSaudiFlag={props.checkSaudiFlag}
            isHovered={isHovered2}
            checkDarkMode={props.checkDarkMode}
            img={imgOuter}
          >
            <div className="front">
              <img src="images/Services/2) outer.png" alt="" />
              <Typography variant="h5">{props.checkSaudiFlag ? AR.outer : USA.outer }</Typography>
            </div>
            <div className="back">
              <Typography variant="h5">{props.checkSaudiFlag ? AR.outer : USA.outer }</Typography>
              <Typography variant="subtitle2">{props.checkSaudiFlag ? AR.outer_des : USA.outer_des }</Typography>
              <Link to='services?service=outer' ><Button variant="contained">{props.checkSaudiFlag ? AR.btn : USA.btn }</Button></Link>
            </div>
          </Card>
        </Grid>

        <Grid
          md={4}
          sm={12}
          className="service"
          onMouseEnter={() => setIsHovered3(true)}
          onMouseLeave={() => setIsHovered3(false)}
          data-aos='zoom-in' data-aos-duration='1000' 
        >
          <Card
            checkSaudiFlag={props.checkSaudiFlag}
            isHovered={isHovered3}
            checkDarkMode={props.checkDarkMode}
            img={imgLandScap}
          >
            <div className="front">
              <img src="images/Services/3) Landscape.png" alt="" />
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.park : USA.park }</Typography>
            </div>
            <div className="back">
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.park : USA.park }</Typography>
              <Typography variant="subtitle2">{props.checkSaudiFlag ? AR.park_des : USA.park_des }</Typography>
              <Link to='services?service=landscape' ><Button variant="contained">{props.checkSaudiFlag ? AR.btn : USA.btn }</Button></Link>
            </div>
          </Card>
        </Grid>

        <Grid
          md={3}
          sm={12}
          className="service"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          data-aos='zoom-in' data-aos-duration='1000' 
        >
          <Card
            checkSaudiFlag={props.checkSaudiFlag}
            isHovered={isHovered}
            checkDarkMode={props.checkDarkMode}
            img={imgInternal}
          >
            <div className="front">
              <img src="images/Services/1) Internal.png" alt="" />
              <Typography variant="h5">{props.checkSaudiFlag ? AR.internal : USA.internal } </Typography>
            </div>
            <div className="back">
              <Typography variant="h5">{props.checkSaudiFlag ? AR.internal : USA.internal } </Typography>
              <Typography variant="subtitle2">{props.checkSaudiFlag ? AR.internal_des : USA.internal_des }</Typography>
              <Link to='services?service=internal' ><Button variant="contained">{props.checkSaudiFlag ? AR.btn : USA.btn }</Button></Link>
            </div>
          </Card>
        </Grid>

        <Grid
          md={3}
          sm={12}
          className="service"
          onMouseEnter={() => setIsHovered5(true)}
          onMouseLeave={() => setIsHovered5(false)}
          data-aos='zoom-in' data-aos-duration='1000' 
        >
          <Card
            checkSaudiFlag={props.checkSaudiFlag}
            isHovered={isHovered5}
            checkDarkMode={props.checkDarkMode}
            img={imgFinish}
          >
            <div className="front">
              <img src="images/Services/5) Demolition.png" alt="" />
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.finish : USA.finish } </Typography>{" "}
            </div>
            <div className="back">
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.finish : USA.finish } </Typography>{" "}
              <Typography variant="subtitle2">{props.checkSaudiFlag ? AR.finish_des : USA.finish_des }</Typography>
              <Link to='services?service=finish' ><Button variant="contained">{props.checkSaudiFlag ? AR.btn : USA.btn }</Button></Link>
            </div>
          </Card>
        </Grid>

        <Grid
          md={3}
          sm={12}
          className="service"
          onMouseEnter={() => setIsHovered6(true)}
          onMouseLeave={() => setIsHovered6(false)}
          data-aos='zoom-in' data-aos-duration='1000' 
        >
          <Card
            checkSaudiFlag={props.checkSaudiFlag}
            isHovered={isHovered6}
            checkDarkMode={props.checkDarkMode}
            img={imgBuild}
          >
            <div className="front">
              <img src="images/Services/6) build.png" alt="" />{" "}
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.build : USA.build }</Typography>{" "}
            </div>
            <div className="back">
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.build : USA.build }</Typography>{" "}
              <Link to='services?service=build' ><Button variant="contained">{props.checkSaudiFlag ? AR.btn : USA.btn }</Button></Link>
            </div>
          </Card>
        </Grid>

        <Grid
          md={4}
          sm={12}
          className="service"
          onMouseEnter={() => setIsHovered7(true)}
          onMouseLeave={() => setIsHovered7(false)}
          data-aos='zoom-in' data-aos-duration='1000' 
        >
          <Card
            checkSaudiFlag={props.checkSaudiFlag}
            isHovered={isHovered7}
            checkDarkMode={props.checkDarkMode}
            img={imgLook}
          >
            <div className="front">
              <img src="images/Services/7) ProjectManager.png" alt="" />{" "}
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.look : USA.look }</Typography>{" "}
            </div>
            <div className="back">
              <Typography variant="h5"> {props.checkSaudiFlag ? AR.look : USA.look }</Typography>{" "}
              <Link to='services?service=look' ><Button variant="contained">{props.checkSaudiFlag ? AR.btn : USA.btn }</Button></Link>
            </div>
          </Card>
        </Grid>

        <Grid
          md={4}
          sm={12}
          className="service"
          onMouseEnter={() => setIsHovered8(true)}
          onMouseLeave={() => setIsHovered8(false)}
          data-aos='zoom-in' data-aos-duration='1000' 
        >
          <Card
            checkSaudiFlag={props.checkSaudiFlag}
            isHovered={isHovered8}
            checkDarkMode={props.checkDarkMode}
            type="contactUs"
            img={imgContactUs}
          >
            <div className="front">
              <img src="images/Services/8)contactUs.png" alt="" />{" "}
              <Typography variant="h5">{props.checkSaudiFlag ? AR.contact : USA.contact }</Typography>{" "}
            </div>
            <div className="back">
              <Typography variant="h5">{props.checkSaudiFlag ? AR.contact : USA.contact }</Typography>{" "}
              <Typography variant="subtitle2">{props.checkSaudiFlag ? AR.contact_des : USA.contact_des }</Typography>{" "}
              <Link to='contact' ><Button variant="contained">{props.checkSaudiFlag ? AR.btn : USA.btn }</Button></Link>
            </div>
          </Card>
        </Grid>
      </Grid>
    </ServicesContainer>
  );
};

export default Services;
