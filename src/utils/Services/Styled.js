import styled from "styled-components";

export const ServicesContainer = styled.div`
  min-height: 100vh;
  padding: 100px 0;
  background-image: radial-gradient(
    ${(props) =>
      props.checkDarkMode
        ? "circle at center, #bcbcbc, #585858"
        : "circle at center, white, #eecd95ae"}
  );

  // background: ${(props) => (props.checkDarkMode ? "gray" : "#eecd95ae")};

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
    color: #003641;
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
`;

export const HeaderText = styled.header`
  padding: 20px;
  box-shadow: 0 0 10px 4px
    ${(props) => (props.checkDarkMode ? "#eece95" : "#5858585f")};
  border-radius: 50%;
  width: 300px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;

  .main-text {
    transition: background-color 0.5s ease, color 0.5s ease;
    font-size: 5rem;
    ${(props) => !props.checkSaudiFlag && "font-size: 4rem;"}
    color: ${(props) => (props.checkDarkMode ? "#eece95" : "#003641")};
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    text-align: center;
    line-height: 70px;
    .icon {
      font-size: 3rem;
    }
  }
  @media (max-width: 1000px) {
    padding: 10px;
    width: 230px;
    height: 140px;
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

    ${(props) =>
      props.type === "contactUs"
        ? props.checkDarkMode
          ? `background-image: conic-gradient(
      from 45deg,
      #172F49 0%,
      #172F49 50%,
      #e5e5e5 25%,
      #5858585f 50%,
      #e5e5e5 60%,
      #e5e5e554 75%,
      #e5e5e5 100%
    );`
          : `
    background-image: conic-gradient(
      from 45deg,
      #172F49 0%,
      #172F49 50%,
      #585858 25%,
      #5858585f 50%,
      #585858 60%,
      #5858585f 75%,
      #585858 100%
    );
    `
        : props.checkDarkMode
        ? `background-image: conic-gradient(
      from 45deg,
      silver 0%,
      silver 25%,
      #eece95 25%,
      #5858585f 50%,
      #e5e5e5 60%,
      #5858585f 75%,
      #eece95 100%
    );`
        : `
    background-image: conic-gradient(
      from 45deg,
      gray 0%,
      gray 25%,
      #585858 25%,
      #5858585f 50%,
      #585858 60%,
      #5858585f 75%,
      #585858 100%
    );
    `}
    // background-image: repeating-linear-gradient(45deg, black, black 10px, white 10px, white 20px);
    // background-image: conic-gradient(from 90deg, red 0%, yellow 25%, green 50%, blue 100%);
    // 50% T bottom
    // 75% T top
    h5 {
      color: ${(props) => (props.checkDarkMode ? "#E5E5E5" : "#E5E5E5")};
      ${(props) => !props.checkSaudiFlag && "transform: rotate(180deg);"}
      width: 50%;
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
    }
    img {
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
      h5 {
        width: 50%;
        font-size: ${(props) => (props.checkSaudiFlag ? " 1.2rem" : "1rem")};
        font-weight: 700;
      }
      img {
        width: 60px;
        ${(props) => (props.checkSaudiFlag ? "left: 15px;" : "right: 15px;")}
        top: 70px;
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
      color: ${(props) => (props.checkDarkMode ? "white" : "#003641")};
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
      color: ${(props) => (props.checkDarkMode ? "#ebc481" : "#e5e5e5")};
      backdrop-filter: ${(props) => (props.checkDarkMode ? "blur(3px)" : "blur(20px)")};
      font-weight: 800;
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      margin: 10px;
      width: fit-content;
    }

    button {
      background: ${(props) =>
        props.checkDarkMode ? "#bf9752e0" : "#003641e4"};
    }

    @media (max-width: 1000px) {

      h5 {
        font-size: 1.4rem;
      }

      h6 {
        font-size: ${props => props.checkSaudiFlag ? '.7rem' : '.6rem'} ;
      }
    }
  }
`;
