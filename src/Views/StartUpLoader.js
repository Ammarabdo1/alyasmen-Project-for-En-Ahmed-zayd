import { useState } from "react";
import { CloseLoader, StartUpContainer } from "../utils/Start/Styled";
import { Button, Typography } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { GiOpenGate } from "react-icons/gi";
import ChairIcon from "@mui/icons-material/Chair";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";

import { ScaleLoader } from "react-spinners";

import { useRef, useEffect } from "react";
import { styled, keyframes } from "@stitches/react";
import { useTrail, animated } from "@react-spring/web";

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";

import AOS from "aos";
import "aos/dist/aos.css";

const AppContainer = styled("div", {
  position: "relative",
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "#e1a140",
  "@media (max-width: 1000px)": {
    "& .loader": {
      width: "60px !important",
    },
  },
});

const Container = styled("div", {
  display: "flex",
  gap: 10,
  marginBottom: 80,
  "@media (max-width: 1000px)": {
    gap: 5,
    marginBottom: 40,
  },
});

const Box = styled("div", {
  position: "relative",
  height: 100,
  width: 80,
  "@media (max-width: 1000px)": {
    width: 25,
    height: 35,
  },
});

const SharedStyles = {
  width: "100%",
  height: "100%",
  position: "absolute",
  inset: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Helvetica",
  fontWeight: 800,
  backfaceVisibility: "hidden",
};

const FrontBox = styled(animated.div, {
  ...SharedStyles,
  backgroundColor: "#e1a140",
  border: "none",
});

const moveGradient = keyframes({
  "0%": {
    backgroundPosition: "0% 50%",
  },
  "100%": {
    backgroundPosition: "100% 50%",
  },
});

const BackBox = styled(animated.div, {
  ...SharedStyles,
  border: "none",
  color: "#f4e1d2",
  fontSize: "5rem",
  transition: "background-position 1s ease",
  background: "linear-gradient(to right, #E5E5E5, #914110)",
  backgroundSize: "200% 100%",
  animation: "moveGradient 3s ease infinite",

  animation: `${moveGradient} 3s ease infinite`, // Apply the keyframes animation

  "& .flower-icon": {
    fontSize: "4rem",
    fill: "url(#flowerGradient)",
  },

  "& .empty": {
    "& .line-icon": {
      fontSize: "2rem",
    },
  },

  "@media(max-width: 1000px)": {
    fontSize: "1.6rem !important",
    "& .flower-icon": {
      fontSize: "1.5rem",
    },
    "& .empty": {
      "& .line-icon": {
        fontSize: "1rem",
      },
    },
  },
});

const items = [
  "A", "l", "y", "a", "s", "m", "e", "e", "n",
  <LocalFloristIcon className="flower-icon" />,
];

export default function StartUpLoader(props) {
  AOS.init();

  const [trail, api] = useTrail(items.length, () => ({
    rotateX: 0,
  }));

  const isFlipped = useRef(false);

  const [gradientIndex, setGradientIndex] = useState(0);

  // Array of gradient colors
  const gradients = [
    "linear-gradient(45deg, transparent, transparent)", // Peach
    "linear-gradient(45deg, #585858, #E5E5E5)", // Blue
    "linear-gradient(45deg, #E5E5E5, #003641)", // Pink
  ];

  // Auto change gradient every few seconds
  useEffect(() => {
    const setTime1 = setTimeout(() => {
      setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
      const setTime2 = setTimeout(() => {
        setGradientIndex((prevIndex) => (prevIndex + 1) % gradients.length);
      }, 1000); // Change every 3 seconds
      return () => clearTimeout(setTime2);
    }, 2000); // Change every 3 seconds

    return () => clearTimeout(setTime1); // Cleanup on component unmount
  }, []);
  useEffect(() => {
    api.start({
      rotateX: 180,
    });
    isFlipped.current = true;
  }, []);

  return (
    <StartUpContainer>
      <AppContainer
        style={{ direction: "ltr" }}
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <svg width="0" height="0">
          <defs>
            <linearGradient id="flowerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "#af4261", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "#f3ec78", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <Container>
          {trail.map(({ rotateX }, i) => (
            <Box key={i}>
              <FrontBox
                key={items[i]}
                style={{
                  transform: rotateX.to(
                    (val) => `perspective(600px) rotateX(${val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              ></FrontBox>
              <BackBox
                gradientIndex={gradientIndex}
                style={{
                  // background: gradients[gradientIndex],
                  transform: rotateX.to(
                    (val) => `perspective(600px) rotateX(${180 - val}deg)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                {items[i]}
              </BackBox>
            </Box>
          ))}
        </Container>
        <ScaleLoader
          className="loader"
          color="#ffff"
          height={80}
          radius={100}
          speedMultiplier={1}
          width={10}
        />
        <CloseLoader>
          <Button onClick={() => props.setLoader(false)}>
            <CloseIcon style={{ fontSize: "2rem", color: "#EECE95" }} />
          </Button>
        </CloseLoader>
      </AppContainer>
    </StartUpContainer>
  );
}
