import styled from "styled-components";

export const FooterComponent = styled.div`
  position: relative;
  min-height: 70vh;
  overflow: hidden;
  .footer {
    padding-bottom: 180px;
    ${(props) =>
      props.checkSaudiFlag ? "padding-right: 100px" : "padding-left: 100px"};
    position: relative;
    min-height: 70vh;
    background: ${(props) => props.color.bg};

    .copyright-container {
      position: absolute;
      bottom: 0;
      right: 0;
    }

    .img-container {
      margin: 70px 0 40px 0;
      height: fit-content;
      @keyframes changeBgMain {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes changeBg {
        0% {
          background: ${(props) => props.color.bg4};
        }

        50% {
          background: ${(props) => props.color.bg3};
          transform: scale(1.1);
        }

        100% {
          background: ${(props) => props.color.bg4};
        }
      }

      .img-main {
        position: relative;
        width: 120px;
        height: 120px;
        margin-right: 30px;

        .rotate-img {
          ${(props) => `background: conic-gradient(
            ${props.color.link1},
            ${props.color.card},
            ${props.color.link1},
            ${props.color.card},
            ${props.color.link1},
            ${props.color.card},
            ${props.color.link1},
            ${props.color.card}
          );
          z-index: -1;
          border-right: 5px solid ${props.color.text};
          border-left: 5px solid ${props.color.text};
          border-top: 5px solid ${props.color.bg1};
          border-bottom: 5px solid ${props.color.bg1};
          width: 120px;
          height: 120px;
          animation: changeBgMain 20s linear infinite;
          border-radius: 50%;`}
        }

        .img {
          position: absolute;
          z-index: 1;
          top: 50%;
          left: 50%;
          margin-top: -50px; /* Half of element's height */
          margin-left: -50px;
          display: flex;
          justify-content: center;
          padding: 5px;
          transition: all 1s ease;
          width: 100px;
          height: 100px;
          box-shadow: 0 0 10px 3px ${(props) => props.color.border};
          border-radius: 50%;
          animation: changeBg 7s ease-in-out infinite;
          img {
            margin-top: 15px;
            margin-right: 10px;
            width: 85px;
            height: 70px;
          }
        }
      }
    }

    @media (max-width: 1000px) {
      padding-bottom: 160px;
      padding-right: 0px;
      padding-left: 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      .img-container {
        margin-top: 70px;

        .img-main {
          margin-right: 0px;
        }
      }
    }
  }
`;

export const P1Description = styled.div`
  width: ${(props) => (props.checkSaudiFlag ? "75%" : "88%")};
  h6 {
    margin-right: 30px;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    color: ${(props) => props.color.text2};

    .header-description {
      color: ${(props) => props.color.text};
      font-weight: 800;
    }
    .more-description {
      ${(props) => !props.checkSaudiFlag && "display: none"};
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    justify-content: center;
    h6 {
      width: 80%;
      margin-right: 0px;
      margin-top: 30px;
      ${(props) => !props.checkSaudiFlag && "font-size: .8rem;"}

      .more-description {
        display: none;
      }
    }
  }
`;
export const P2Links = styled.div`
  h5 {
    display: flex;
    align-items: center;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    font-size: 2rem;
    color: ${(props) => props.color.text};
    margin-bottom: 20px;
    .link-icon {
      font-size: 1.8rem;
    }
  }

  a {
    text-decoration: none;
    h6 {
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      color: ${(props) => props.color.text2};
      margin-bottom: 10px;
      font-weight: 800;
      transition: all 0.3s ease;
      &:hover {
        transform: scale(1.1);
        opacity: 0.5;
      }
    }
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
export const P3Media = styled.div`
  h5 {
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    font-size: 2rem;
    color: ${(props) => props.color.text};
    margin-bottom: 20px;
  }

  .media {
    font-size: 2.1rem;
    margin-left: 25px;
    margin-top: 10px;
    transition: all 0.7s ease;
    &:hover {
      transform: rotateY(180deg) scale(1.2);
      box-shadow: 0 0 8px 2px;
      border-radius: 50%;
    }
  }

  @media (max-width: 1000px) {
    margin-bottom: 40px;
    h5 {
      font-size: 1.8rem;
      margin-top: 50px;
      margin-bottom: 10px;
    }
    .media {
      margin: 0 15px;
      margin-top: 10px;
    }
  }

  .media.insta {
    width: 30px;
  }

  .media.whats {
    color: #5fffa2;
  }

  .media.face {
    color: #4fa4ff;
  }
`;
export const P4Contact = styled.div`
  h5 {
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    font-size: 2rem;
    color: ${(props) => props.color.text};
    margin-bottom: 20px;
  }

  h6 {
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
    color: ${(props) => props.color.text2};
  }

  @media (max-width: 1000px) {
    h5 {
      font-size: 1.8rem;
    }
  }
`;

export const P5Copyright = styled.div`
  height: 70px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color.bg};
  position: relative;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    ${(props) =>
      `background: linear-gradient(to right, transparent 1px, ${props.color.bg4});`}
  }

  @media (max-width: 1000px) {
    height: 85px;
  }
`;

export const CopyrightText = styled.h6`
  font-family: "Open Sans", Tahoma, Arial, Helvetica;
  z-index: 2;
  font-size: 0.8rem;
  color: ${(props) => (props.checkDarkMode ? "#e5e5e5" : "#585858")};
  margin-bottom: 20px;
  @media (max-width: 1000px) {
  font-size: 0.7rem;
    width: 90%;
    line-height: 25px;
  }
`;
