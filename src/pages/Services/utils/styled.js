import styled from "styled-components";
import mainImg from "../Images/main.jpg";
import internalImg from "../Images/internal.jpg";
import outerImg from "../Images/outer.jpg";
import areaImg from "../Images/area.jpg";
import buildImg from "../Images/build.jpg";
import finishImg from "../Images/finish.jpg";
import landscapeImg from "../Images/landscape.jpg";
import lookImg from "../Images/look.jpg";

const bgImgs = {
  internal: internalImg,
  outer: outerImg,
  area: areaImg,
  build: buildImg,
  finish: finishImg,
  landscape: landscapeImg,
  look: lookImg,
};

export const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
`;

export const HeaderElement = styled.div`
  height: 50vh;
  background: url(${(props) => bgImgs[props.serviceType] || mainImg}) no-repeat;
  background-size: cover;
  background-position: right 0px top  ${(props) => props.serviceType === 'outer' || props.serviceType === 'internal' ? '-300px' : '-500px'};
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
  height: 60vh;
    background: url(${(props) => bgImgs[props.serviceType] || mainImg})
      no-repeat;
    background-size: cover;
    background-position: start;
    ${(props) =>
      (!props.serviceType ||
        props.serviceType === "look" ||
        props.serviceType === "outer") &&
      "background-position: left 0px top -50px;"}

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

export const BodyComponent = styled.div`
  background-image: radial-gradient(
    ${(props) =>
      props.checkDarkMode
        ? "circle at center, #bcbcbc, #585858"
        : "circle at center, white, #eecd95ae"}
  );

  .services-container {
    width: 100%;
    ${(props) => props.serviceType && "min-height: 80vh"};
    .images-list {
      .images-list-box {
        .images-list-container {
        }
      }
    }
  }

  h2 {
    color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    margin-bottom: 30px;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }

  h6 {
    color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
    width: 80%;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }

  .MuiTabs-indicator {
    background: ${(props) => (props.checkDarkMode ? "#EECE95" : "#eecd95e0")};
    box-shadow: 0 0 12px 4px
      ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#eecd95e0")};
  }

  .all-items {
    padding: 30px 0;
    button {
      margin-left: 20px;
      color: white;
      box-shadow: 0 0 12px 4px
        ${(props) => (props.checkDarkMode ? "#e5e5e554" : "#000000a1")};
      color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#003641")};
    }
  }

  @media (max-width: 1000px) {
    padding: 0px;
    width: 100%;
    margin: 0;

    .services-container {
      width: 100%;
      ${(props) => props.serviceType && "min-height: 120vh"};
      .images-list {

      }
    }

    h2 {
      padding-bottom: 4px;
      text-align: center;
      font-size: 1.8rem;
      margin-bottom: 30px;
      box-shadow: 0 0 10px 1px;
      ${(props) =>
        !props.checkSaudiFlag &&
        `
        font-size: 1.6rem;
        margin-bottom: 20px;
        `}
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

export const ServiceDetailsContainer = styled.div`
.body-container {
margin-top: 8vh;
  .images-part {
  width: 100vw;
  min-height: 400px;
    position: relative !important;
      .images-list {
          position: absolute !important;
          top: 0;
          left 0;
          width: 100%;
          height: 100%;
      }
    }
}

@media (max-width: 1000px) {
  .images-part {
        margin-top: 8vh;
  }
}
`;
