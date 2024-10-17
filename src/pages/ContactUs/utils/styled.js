import styled from "styled-components";
import bgImg from "../Images/contact.jpg";
import bgImgM from "../Images/contact2.jpg";

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
  background: url(${bgImgM}) no-repeat;
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

export const BodyComponent = styled.div`
  padding: 100px;
  background-image: radial-gradient(
    ${(props) =>
      props.checkDarkMode
        ? "circle at center, #bcbcbc, #585858"
        : "circle at center, white, #eecd95ae"}
  );

  h2 {
    color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    margin-bottom: 60px;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
      width: fit-content;

      display: flex;
      align-items: end;
      justify-content: center;

  }

  .contact-icon {
    font-size: 3.5rem;
    ${props => props.checkSaudiFlag ? 'margin-right: 5px' : 'margin-left: 5px'} ;
    ${props => !props.checkSaudiFlag && 'transform: rotateY(180deg)'} ;
  }

  h6 {
    color: #585858;
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

  .img-container {
    border-radius: 25px;
    overflow: hidden;
    img {
      width: 100%;
      transition: all 0.7s ease;
    }
  }

  &:hover {
    .img-container {
      img {
        transform: scale(1.2);
      }
    }
  }

  @media (max-width: 1000px) {
    min-height: 90vh;
    padding: 0px;
    width: 100%;
    margin: 0;
    .text {
      width: 100vw;
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h2 {
      width: 90vw;
      padding-bottom: 4px;
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 30px;
      box-shadow: 0 0 10px 1px;
      ${(props) =>
        !props.checkSaudiFlag &&
        `
        font-size: 2.2rem;
        margin-bottom: 20px;
        `}
      margin-bottom: 50px;
    }

    .contact-icon {
      font-size: 2.3rem;
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

    .img-container {
      margin: 50px auto 80px auto;
      text-align: center;
      width: 90%;
    }
  }
`;

export const ContactInfo = styled.div`
  @keyframes jump {
    0% {
      transform: scale(1);
    }

    15% {
      transform: scale(1);
      color: #eece95;
    }

    30% {
      transform: scale(1.2);
      color: #eece95;
    }

    45% {
      transform: scale(1.2);
      color: #eece95;
    }

    60% {
      transform: scale(1);
    }

    75% {
      transform: scale(1);
    }

    90% {
      transform: scale(1);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes color {
    0% {
    }

    50% {
      color: #eece95;
    }

    100% {
    }
  }

  background: #e5e5e526;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  border-radius: 50px;
  margin-bottom: 25px;
  transition: all 0.7s ease;
  box-shadow: 0 0 5px 1px silver;
  &:hover {
    background: transparent;
    transform: scale(1.1);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 10px 3px silver;
  }

  .info-icon {
    color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
    font-size: 2.3rem;
    ${(props) => props.checkClickInfo && "animation: jump 1s ease-in-out 1"};
    ${props => props.checkSaudiFlag && 'transform: rotateY(180deg)'} ;
  }

  h6 {
    color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
    ${(props) => props.checkClickInfo && "animation: color 1s ease-out 1"};
  }

  @media (max-width: 1000px) {
    width: 250px;
    margin-bottom: 30px;
    .info-icon {
      font-size: 1.5rem;
      margin: ${props => props.checkSaudiFlag ? '0 5px 0 20px' : '0 20px 0 5px'} ;
    }

    h6 {
      font-size: 0.7rem;
      text-align: start;
      height: 100%;
      margin: auto;
    }
  }
`;
