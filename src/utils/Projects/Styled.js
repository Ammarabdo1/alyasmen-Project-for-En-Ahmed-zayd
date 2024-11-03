import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: ${(props) =>
    props.checkSaudiFlag ? "100px 100px 100px 0" : "100px 0px 100px 100px"};
  background: ${(props) => props.color.bg};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 95%;
    margin: auto;
    height: 1%;
    box-shadow: 0 10px 15px 10px ${(props) => props.color.bg1};
    backdrop-filter: blur(10px);
    border-radius: 50%;
  }

  .text {
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: center;
    h1 {
      font-size: 5rem;
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      margin-bottom: 30px;
      color: ${(props) => props.color.text};
    }

    h4 {
      font-size: 2rem;
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      width: 70%;
      color: ${(props) => props.color.text2};
    }
    Button {
      width: fit-content;
      margin-top: 50px;
      padding: 7px;
      border: none;
      font-size: 1rem;
      font-weight: 800;
      background: ${(props) => props.color.text2};
      color: ${(props) => props.color.bg};
      box-shadow: 0 0 8px 2px ${(props) => props.color.text2};
      transition: all 0.3s ease;
      &:hover {
        box-shadow: 0 0 8px 2px ${(props) => props.color.text2};
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  }

  @media (max-width: 1000px) {
    padding: 80px 0 120px 0;
    position: relative;
    .text {
      justify-content: start;
      height: 15vh;
      h1 {
        margin-bottom: 0px;
        font-size: 1.7rem;
        padding-right: ${(props) => (props.checkSaudiFlag ? "10px" : "0")};
        padding-left: ${(props) => (!props.checkSaudiFlag ? "10px" : "0")};
      }

      h4 {
        display: none;
      }

      .icon {
        font-size: 1.5rem !important;
      }
    }
    button {
      position: absolute;
      bottom: 40px;
      right: ${(props) => (props.checkSaudiFlag ? "15px" : "0")};
      left: ${(props) => (!props.checkSaudiFlag ? "15px" : "0")};
    }
  }
`;

export const SwiperContainer = styled.div`
  .swiper {
    width: 500px;
    height: 600px;
    box-shadow: 0 0 10px 3px ${(props) => props.color.text2};
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #00000078;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 80%;
    object-fit: cover;
  }

  .swiper-pagination {
    background: ${(props) => props.color.bg3};
  }

  .swiper-pagination-bullet {
    background: ${(props) => props.color.text};
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: ${(props) => props.color.text};
    backdrop-filer: blur(10px);
    background: ${(props) => props.color.bg3};
  }

  @media (max-width: 1000px) {
    .swiper {
      width: 290px;
      margin: auto;
      height: 350px;
    }
    .swiper-pagination-bullet {
      display: none;
    }
  }
`;

export const AutoplayContainer = styled.div`
  .autoplay-progress {
    position: absolute;
    right: 16px;
    bottom: 16px;
    z-index: 10;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: ${(props) => props.color.bg2};
  }

  .autoplay-progress svg {
    --progress: 0;
    position: absolute;
    left: 0;
    top: 0px;
    z-index: 10;
    width: 100%;
    height: 100%;
    stroke-width: 3px;
    stroke: ${(props) => props.color.bg2};
    fill: none;
    stroke-dashoffset: calc(125.6px * (1 - var(--progress)));
    stroke-dasharray: 125.6;
    transform: rotate(-90deg);
  }
`;
