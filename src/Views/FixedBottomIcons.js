import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AOS from "aos";
import "aos/dist/aos.css";

const FixedBottomIcons = ({ checkSaudiFlag }) => {
  const [checkUpIcon, setCheckUpIcon] = useState(true);

  const [showUpIcon, setShowUpIcon] = useState(true);

  useEffect(() => {
    const setTime = setTimeout(() => setCheckUpIcon(false), 1000);
    return () => clearTimeout(setTime);
  }, [checkUpIcon]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <FixedIconsContainer
      checkSaudiFlag={checkSaudiFlag}
      checkUpIcon={checkUpIcon}
      showUpIcon={showUpIcon}
    >
      <div className="fixed-whats-icon">
        <Link to="https://wa.me/+201112644891">
          <WhatsAppIcon className="whats-icon icon" />
        </Link>
      </div>

      <div className="fixed-up-icon" data-aos="fade-up">
        <div className="up-icon-container">
          <KeyboardDoubleArrowUpIcon
            className="up-icon"
            onClick={() => {
              setCheckUpIcon(true);
              showUpIcon && setShowUpIcon(false);
              window.scrollTo(0, 0);
            }}
          />
        </div>
      </div>
    </FixedIconsContainer>
  );
};

const FixedIconsContainer = styled.div`
  position: fixed;
  width: 15%;
  height: 30%;
  bottom: 0;
  z-index: 1000;
  ${(props) =>
    props.checkSaudiFlag
      ? "right: 10px"
      : "right: 20px"};
  .icon {
    cursor: pointer;
    border-radius: 50%;
    color: white;
    transition: all 0.5s ease;
    padding: 2px;
  }

  .fixed-whats-icon {
    width: 10%;
    position: fixed;
    bottom: 10px; 
    ${(props) =>
      props.checkSaudiFlag
        ? "right: 10px"
        : "right: 20px"}; 

    z-index: 1000;

    .whats-icon {
      font-size: 3.5rem;
      background: #5fffa2;
      border: 1px solid #5fffa2;
      &:hover {
        transform: rotateY(180deg) scale(1.2);
        box-shadow: 0 0 8px 2px;
        border-radius: 50%;
      }
    }
  }

  .fixed-up-icon {
    position: fixed;
    bottom: 90px;
    ${(props) => (props.checkSaudiFlag ? "right: 10px" : "right: 20px")};
    z-index: 1000;
    width: 10%;

    .up-icon-container {
      overflow: hidden;
      position: relative;
      width: 55px;
      height: 55px;
      padding: 10px;
      background: #eece95;
      border-radius: 50%;
    }
    .up-icon {
      font-size: 3.5rem;
      cursor: pointer;
      color: white;
      transition: all 0.5s ease;
      padding: 2px;
      position: absolute;
      top: 0%;
      right: 0%;

      ${(props) => props.checkUpIcon && "animation: upIcon .5s 1 ease-in-out;"}

      ${(props) =>
        props.showUpIcon && "animation: startupUpIcon 3s infinite ease-in-out;"}
    }
  }

  @keyframes startupUpIcon {
    0% {
      top: 0px;
    }

    15% {
      transform: scale(1.2);
      top: -20px;
    }

    30% {
      top: 0px;
    }

    100% {
      top: 0px;
    }
  }

  @keyframes upIcon {
    0% {
      top: 0px;
    }

    35% {
      display: none;
      top: -40px;
      transform: scale(2);

    }

    70% {
      display: none;
      transform: scale(3);
      top: 40px;
    }

    100% {
      top: 0px;
    }
  }
`;

export default FixedBottomIcons;
