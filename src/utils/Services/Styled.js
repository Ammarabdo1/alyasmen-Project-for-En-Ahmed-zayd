import styled from "styled-components";
import bgImgD from './images/dark2.jpg'
import bgImgL from './images/light.jpg'
import bgImgCD from './images/dark.jpg'
import bgImgCL from './images/light2.jpg'

export const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  background: ${(props) => props.color.bg};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 95%;
    height: 1%;
    box-shadow: 0 10px 15px 10px ${(props) => props.color.bg1};
    backdrop-filter: blur(10px);
    border-radius: 50%;
  }

  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .header {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
    width: 100%;
  }

  h6 {
    width: 50%;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }
  img {
    width: 80px;
    margin-bottom: 30px;
    position: absolute;
    left: 15px;
    top: 11px;
  }

  .service {
    margin: 10px;
    width: 100%;
    height: 250px;
    perspective: 1000px;
    @media (max-width: 1000px) {
      width: 85%;
      height: 230px;
    }
  }

  @media (max-width: 1000px) {
    .service {
      height: 70vh;
    }
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, 0);
      width: 95%;
      height: 7px;
      box-shadow: 0 10px 15px 10px ${(props) => props.color.bg1};
      backdrop-filter: blur(10px);
      border-radius: 50%;
    }
  }
`;

export const HeaderText = styled.header`
  padding: 10px 20px;
  box-shadow: 0 0 10px 3px ${(props) => props.color.text2};
  border-radius: 30px;
  width: 450px;
  height: 140px;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-text {
    transform: rotateY(15deg);
    transition: background-color 0.5s ease, color 0.5s ease;
    font-size: 7rem;
    ${(props) => !props.checkSaudiFlag && "font-size: 5rem;"}
    ${(props) => !props.checkSaudiFlag && "letter-spacing: 2px;"}
    color: ${(props) => props.color.text};
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    text-align: center;
    line-height: 70px;
    .icon {
      font-size: 3rem;
    }
  }
  @media (max-width: 1000px) {
    padding: 10px;
    width: 100%;
    height: 100px;
    border-radius: 0;
    .main-text {
      line-height: 55px;
      font-size: ${(props) => (props.checkSaudiFlag ? "3.5rem" : "3rem")};
    }
  }
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s ease-in-out;
  transform: rotateX(${(props) => (props.isHovered ? "180deg" : "0deg")});

  .front,
  .back {
    display: flex;
    align-items: center;
    ${(props) => !props.checkSaudiFlag && "justify-content:end;"}
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden; /* Hides the back when the front is showing */
    font-size: 18px;
    color: white;
    border-radius: 10px;
  }

  .front {
    ${(props) => !props.checkSaudiFlag && "transform: rotate(180deg);"}
    padding: 30px 15px;
    background: url(${props => props.checkDarkMode ? bgImgD : bgImgL });
    ${props => props.type == 'contactUs' && `background: url(${props.checkDarkMode ? bgImgCD : bgImgCL} );`}
    background-size: cover;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 1;
      width: 100%;
      height: 100%;
${props => props.checkDarkMode && `background: linear-gradient(to bottom, transparent 100px, ${props.color.border});`}
    }
    
    h5 {
      z-index: 2;
      color: ${(props) => props.color.text2};
      ${(props) => !props.checkSaudiFlag && "transform: rotate(180deg);"}
      width: 50%;
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
    }
    img {
      z-index: 2;
      width: 80px;
      position: absolute;
      top: 70px;
      ${(props) => !props.checkSaudiFlag && "transform: rotate(180deg);"}
    }

    video {
      width: 50px;
      position: absolute;
      top: 33%;
      left: 46%;
      transition: opacity 0.5s ease, transform 0.5s ease; /* Smooth transition */
      opacity: ${(props) => (props.showVideo ? 1 : 0)};
      transform: ${(props) =>
        props.showVideo
          ? "translateY(0)"
          : "translateY(-20px)"}; /* Add movement for effect */
      pointer-events: ${(props) =>
        props.showVideo
          ? "auto"
          : "none"}; /* Prevent interaction when hidden */
    }

    @media (max-width: 1000px) {

    align-items: start;
        

      h5 {
        width: 73%;
        font-size: ${(props) => (props.checkSaudiFlag ? " 1.2rem" : "1rem")};
        font-weight: 700;
      }
      img {
        width: 100px;
        ${(props) => (props.checkSaudiFlag ? "left: 15px;" : "right: 15px;")}
        top: 280px;
        left: 20px;
      }
      video {
        width: 40px;
        top: 34%;
        left: 42%;
      }
    }
  }

  .back {
    position: relative;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background: ${(props) => `url(${props.img})`};
    background-size: cover;
    background-position: center;
    transform: rotateX(180deg); /* The back side is initially flipped */

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      ${(props) =>
        props.checkDarkMode &&
        `background-image: repeating-linear-gradient(
      45deg,
      transparent,
      #000000a1 20%
    );`}
      z-index: -1;
    }
    h5 {
      color: ${(props) => props.color.text2};
      ${(props) => !props.checkDarkMode && "backdrop-filter: blur(10px);"};
      ${(props) => !props.checkDarkMode && "background: #e5e5e571;"};
      ${(props) => !props.checkDarkMode && "padding: 2px;"};
      ${(props) => !props.checkDarkMode && "border-radius: 5px;"};
      width: fit-content;
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      // -webkit-background-clip: text;
      // color: transparent;
    }

    h6 {
      color: ${(props) => props.color.text1};
      backdrop-filter: ${(props) =>
        props.checkDarkMode ? "blur(3px)" : "blur(20px)"};
      font-weight: 800;
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      margin: 10px;
      width: fit-content;
    }

    button {
      font-size: 1rem;
      font-weight: 800;
      background: ${(props) => props.color.text2};
      color: ${(props) => props.color.bg};
      box-shadow: 0 0 8px 2px ${(props) => props.color.text2};
    }

    @media (max-width: 1000px) {
      h5 {
        font-size: 1.4rem;
        font-weight: 900;
      }

      h6 {
        font-size: ${(props) => (props.checkSaudiFlag ? "1rem" : "1rem")};
      }
    }
  }
`;
