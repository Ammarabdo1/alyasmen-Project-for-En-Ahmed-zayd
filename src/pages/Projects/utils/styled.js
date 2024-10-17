import styled from "styled-components";
import bgImg from "../Images/ProjectsBg.jpg";

import middleDBg from "../Images/bgD.jpg";
import middleLBg from "../Images/bgL.jpg";

export const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
`;

export const HeaderElement = styled.div`
  height: 50vh;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  background-position: left 0 bottom -200px;
  z-index: 2;
  position: relative;

  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      width: fit-content;
      color: ${(props) => (props.checkDarkMode ? "#eece95" : "#003641")};
      background: ${(props) => (props.checkDarkMode ? "" : "#EECE95")};
      backdrop-filter: blur(
        ${(props) => (props.checkDarkMode ? "0px" : "100px")}
      );
      padding: ${(props) => (props.checkDarkMode ? "0" : "0 10px")};

      ${(props) =>
        props.checkDarkMode && props.checkSaudiFlag
          ? "padding-right: 10px"
          : "padding-left: 10px"};

      ${(props) =>
        props.checkDarkMode && props.checkSaudiFlag
          ? "border-right: 3px solid #eece95"
          : "border-left: 3px solid #eece95"};

      ${(props) =>
        props.checkDarkMode ? "border-bottom: 3px solid #eece95" : "none"};
    }
  }
  &::after {
    content: "";
    transition: all 0.4s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${(props) =>
      props.checkDarkMode &&
      `background-color: #00000058;
    z-index: -1;`}
  }

  @media (max-width: 1000px) {
    background-size: cover;
    background-position: center;

    h2 {
      ${(props) =>
        props.checkSaudiFlag
          ? `${props.checkDarkMode && "border-right: 2px solid"}`
          : `${props.checkDarkMode && "border-left: 2px solid"}`};
      font-size: 2rem;
      ${(props) =>
        props.checkSaudiFlag
          ? `padding: ${
              props.checkDarkMode ? "0 10px 1px 0 !important" : "0 3px"
            }`
          : `padding: ${
              props.checkDarkMode ? "0 0 1px 10px !important" : "0 3px"
            }`};
      ${(props) => !props.checkSaudiFlag && `font-size: 1.8rem`};
    }
  }
`;

export const ProjectsComponent = styled.div`
  .all-projects {
    width: 100%;
    min-height: 100vh !important;
    background: ${(props) => (props.checkDarkMode ? "#253237" : "#5858585f")};
  }

  @media (max-width: 1000px) {
  }
`;

export const TextContainer = styled.div`
  .text {
    ${(props) =>
      props.checkSaudiFlag ? "padding-right: 50px" : "padding-left: 50px"};
  }

  h2 {
    color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    margin-bottom: 30px;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }

  .lamp-icon {
    font-size: 2rem;
  }

  h6 {
    color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
    width: 80%;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }

  @media (max-width: 1000px) {
    min-height: ${(props) => (props.checkSaudiFlag ? "150vh" : "130vh")};
    padding: 0px;
    width: 100%;
    margin: 0;

    .text {
      padding: 0;
    }

    h2 {
      padding-bottom: 4px;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 30px;
      box-shadow: 0 0 10px 1px;
      ${(props) =>
        !props.checkSaudiFlag &&
        `
        font-size: 1.8rem;
        margin-bottom: 20px;
        `}
    }

    .lamp-icon {
      font-size: 1.7rem;
    }

    h6 {
      text-align: center;
      font-size: 0.9rem;
      font-weight: 600;
      width: 90%;
      margin: auto;
      ${(props) =>
        !props.checkSaudiFlag &&
        `
        font-size: .8rem;
        margin-bottom: 20px;
        `}
    }
  }
`;

export const BackGroundColorContainer = styled.div`
  .bg-p1 {
    background: ${(props) => (props.checkDarkMode ? "#172f498e" : "#EECE95")};
  }

  .bg-p2 {
    background: ${(props) => (props.checkDarkMode ? "#172f498e" : "#EECE95")};
  }
`;

export const TopImages = styled.div`
  .images-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    // pointer-events: none;
  }

  img {
    width: 18%;
  }

  @media (max-width: 1000px) {
    .images-container {
      z-index: 10;
    }

    img {
      width: 48%;
    }
  }
`;

export const MiddleImages = styled.div`
  //TODO>> right
  .right {
    pointer-events: none;
    filter: brightness(1.2);
    display: flex;
    flex-direction: column;
    img {
      width: 15%;
      margin-bottom: 5px;
      ${(props) => !props.checkSaudiFlag && "margin-left: 85%;"}
    }

    @media (max-width: 1000px) {
      img {
        width: 20%;
        ${(props) => !props.checkSaudiFlag && "margin-left: 80%;"}
      }
    }
  }

  //TODO>> top
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 50%;
      border-radius: 10%;
    }
  }

  //TODO>> middle
  .middle {
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    img {
      width: 50%;
      border-radius: 10%;
    }
  }

  //TODO>> bottom

    //* middle
    .middle {
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;

      .hover-img {
        position: relative;
        width: 60%;

        .main-img {
          width: 100%;
        }

        .absolute-img {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          opacity: 0.4;
        }
      }
    }

    @media (max-width: 1000px) {
      .middle {

        .hover-img {
          width: 90%;

          .main-img {
            width: 100%;
          }

          .absolute-img {
            opacity: 0.3;
          }
        }
      }
    }
  }

  //TODO>> left
  .left {
    pointer-events: none;
    filter: brightness(1.2);
    img {
      width: 15%;
      margin-right: 85%;
      margin-bottom: 2px;
    }

    @media (max-width: 1000px) {
      img {
        width: 20%;
        margin-right: 80%;
      }
    }
  }
`;

export const BottomImages = styled.div`
  .bottom-images {
    display: flex;
    justify-content: space-around;
    align-items: center;
    pointer-events: none;
  }

  img {
    width: 18%;
  }

  @media (max-width: 1000px) {
    img {
    width: 48%;
    }
  }
`;
