import styled from "styled-components";
import bgImg from "../Images/aboutBG.jpg";

export const HeaderContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 50vh;
`;

export const HeaderElement = styled.div`
  height: 50vh;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  background-position: center;
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

export const AboutContainer = styled.div`
  padding: 100px;
  background-image: radial-gradient(
    ${(props) =>
      props.checkDarkMode
        ? "circle at center, #bcbcbc, #585858"
        : "circle at center, white, #eecd95ae"}
  );

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

  span {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  p {
    border-radius: 10px;
    padding: 1px 5px;
    background: ${(props) => (props.checkDarkMode ? "white" : "#585858")};
    color: ${(props) => (props.checkDarkMode ? "#bf9752" : "white")};
    margin-right: 10px;
  }

  button {
    margin-top: 50px;
    color: white;
    padding: 7px;
    border: none;
    box-shadow: 0 0 12px 4px
      ${(props) => (props.checkDarkMode ? "#5858585f" : "#000000a1")};
    background: ${(props) => (props.checkDarkMode ? "#bf9752e0" : "#003641")};
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  .wrapper {
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: end;
    justify-content: end;

    .container {
      display: grid;
      grid-template-columns: repeat(4, minmax(300px, 1fr));
      grid-gap: 25px;
      padding: 25px;
      background: transparent !important;
      backdrop-filter: blur(10px);
      border-radius: 15px;
      cursor: pointer;
      will-change: width, height;

      .item {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        will-change: transform, opacity;
      }
    }
  }

  @media (max-width: 1000px) {
    min-height: ${(props) => (props.checkSaudiFlag ? "150vh" : "130vh")};
    padding: 0px;
    width: 100%;
    margin: 0;

    .container {
      grid-template-columns: repeat(2, minmax(100px, 1fr)) !important;
      grid-gap: 15px !important;
      padding: 15px !important;

      .item {
        width: 100% !important;
        height: 100% !important;
      }
    }

    .text {
      margin-top: 50px;
    }

    h2 {
      padding-bottom: 4px;
      text-align: center;
      font-size: 3rem;
      margin-bottom: 30px;
      box-shadow: 0 0 10px 1px;
      ${(props) =>
        !props.checkSaudiFlag &&
        `
        font-size: 2.5rem;
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

    span {
      display: flex;
      align-items: center;
      margin-top: 20px;
    }

    p {
      ${(props) =>
        !props.checkSaudiFlag &&
        `
      margin-right: 0px;
        font-size: .7rem;
      `}
    }

    button {
      margin-right: 36px;
      ${(props) =>
        !props.checkSaudiFlag &&
        `
      margin-right: 0px;
      margin-left: 30px;
      `}
    }
  }
`;

export const ItemsContainer = styled.div`
  .show-images-button {
    position: absolute;
    top: -100px;
    span {
      display: ${(props) => props.open && "none"};
      margin-bottom: 400px;
      color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "")};
      font-size: 2rem;
      padding: 10px;
      border-radius: 10px;
      box-shadow: 0 0 10px 3px silver;
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 3px 3px gray;
        border-right: 2px solid silver;
        border-bottom: 2px solid silver;
        outline: 1px solid #e5e5e5;
        transform: translateY(-4px);
      }
    }
  }

  @media (max-width: 1000px) {
    .show-images-button {
      position: absolute;
      width: 100vw;
      height: 100%;
      top: 0;
      left: 0;

      .show-images-button-child {
        position: relative;
        width: 100vw;
        height: 100%;

        span {
          position: absolute;
          ${(props) => (props.checkSaudiFlag ? "top: 50%" : "top: 50%")};
          transform: translate(-50%, -50%);
          ${(props) => (props.checkSaudiFlag ? "left: 50%" : "left: -30%")};
          font-size: 1rem;
          width: ${(props) => (props.checkSaudiFlag ? "120px" : "122px")};
        }
      }
    }
  }
`;
