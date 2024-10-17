import styled from "styled-components";
import bgImg from "./images/mainM.jpg";
import bgImgM from "./images/mainM.jpg";

export const HeaderComponent = styled.div`
  position: relative;
  overflow: hidden;
  height: 80vh;
`;

export const ElementHeader = styled.div`
  position: relative;
  @keyframes scale {
    0% {
      opacity(1);
    }

    50% {
      opacity(.5);
    }

    100% {
      opacity(1);
    }
  }

  animation: scale 12s ease infinite alternate;
  height: 80vh;
  background: url(${bgImg}) no-repeat;
  background-size: cover;
  background-position: center;
  z-index: 2;
  header {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &::after {
    content: "";
    transition: all 0.4s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color.bg3};
    z-index: -1;
  }
  h2 {
  transition: font-weight .001s ease;
  font-weight: 900;
    font-size: 10rem;
    width: fit-content;
    color: ${(props) => (props.color.link1)};
    border-bottom: 5px solid ${(props) => props.color.text};
  }

  h3 {
    font-size: 3rem;
    width: fit-content;
    color: ${(props) => (props.color.link1)};
    line-height: 80px;
  }

  button {
    background: ${props=> props.color.bg};
    color: ${props=> props.color.link1};
    font-size: 1.5rem;
    font-weight: 800;
    margin-top: ${props=> props.checkSaudiFlag ? '10px' : '30px'};
    .icon {
      ${props=> props.checkSaudiFlag ? 'margin-right: 5px' : 'margin-left: 5px'};
    }
  }

  @media (max-width: 1000px) {
    height: 88vh;
    background: url(${bgImgM});
    background-size: cover;
    background-position: center;

    h2 {
      font-size: 4.5rem;
      ${(props) => !props.checkSaudiFlag && `font-size: 3rem`}
    }

    h3 {
      line-height: 45px;
      font-size: 1.3rem;
      ${(props) => !props.checkDarkMode && 'backdrop-filter: blur(10px);'}
      ${(props) => !props.checkSaudiFlag && `font-size: .9rem`}
    }
  }

  .change-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    will-change: opacity;
    z-index: -1;
  }
`;
