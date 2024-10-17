import React, { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";

import { ElementHeader, HeaderComponent } from "../utils/ViewHeader/Styled";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import bgImg from "../utils/ViewHeader/images/H2.jpeg";
import bgImg2 from "../utils/ViewHeader/images/H3.jpg";
import bgImg3 from "../utils/ViewHeader/images/H4.jpeg";
import bgImg4 from "../utils/ViewHeader/images/H5.jpeg";

import {AR, USA} from '../utils/ViewHeader/translation'

import mobileBgImg from "../utils/ViewHeader/images/M2.jpg";
import mBgImg2 from "../utils/ViewHeader/images/M3.jpg";
import mBgImg3 from "../utils/ViewHeader/images/M4.jpg";
import mBgImg4 from "../utils/ViewHeader/images/M5.jpg";

import Forward5Icon from '@mui/icons-material/Forward5';

import { useSelector } from "react-redux";

const slides = [bgImg, "", bgImg2, "", bgImg3, "", bgImg4, ""];

const mSlides = [mobileBgImg, "", mBgImg2, "", mBgImg3, "", mBgImg4, ""];

const ViewHeader = ({checkDarkMode, checkSaudiFlag}) => {
  const [showImgHover, setShowImgHover] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const [index, set] = useState(0);

  const theme = useSelector((state)=> state.theme)
  const themeMode = useSelector((state)=> state[theme])
  const [colors, setColors] = useState(themeMode)
  useEffect(() => setColors(themeMode) ,[useSelector((state)=> state.theme)])

  useEffect(() => {
    const start = () => {
      setShowImgHover(true);
    };

    const stop = () => {
      setShowImgHover(false);
      setTimeout(start, 6000);
      setTimeout(stop, 12000);
    };

    const stopId = setTimeout(stop, 12000);

    return () => {
      clearTimeout(stopId);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const transitions = useTransition(index, {
    key: index,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 3000, // Duration of the transition animation
    },
    onRest: (_a, _b, item) => {
      if (index === item) {
        set((state) => (state + 1) % slides.length);
      }
    },
    exitBeforeEnter: true,
  });
  return (
    <HeaderComponent>
      <ElementHeader color={colors} checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} >
        <header>
          <Typography variant="h2">
            {checkSaudiFlag ? AR.header: USA.header}
          </Typography>
          <Typography variant="h3">
          {checkSaudiFlag ? AR.title: USA.title}
          </Typography>
          <Link to='' > <Button variant="contained" >{checkSaudiFlag ? AR.btn: USA.btn}<Forward5Icon className='icon' /> </Button> </Link>
        </header>
        
          <div className="flex fill center">
            {transitions((style, i) => (
              <animated.div
                className="change-img"
                style={{
                  ...style,
                  backgroundImage:
                    width > 1000 ? `url(${slides[i-1]})` : `url(${mSlides[i-1]})`,
                }}
              />
            ))}
          </div>
        
      </ElementHeader>
    </HeaderComponent>
  );
};

export default ViewHeader;
