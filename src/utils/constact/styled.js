import styled from "styled-components";
import bgImg from "./images/rR6HYXBrMmX4cRpXfXUOvpvpB0.png";

export const ContactUsContainer = styled.div`
  position: relative;
  width: 100%;
  height: 90%;
  overflow: hidden;
  .contact-component {
  }
`;

export const ContactUsElement = styled.div`
  min-height: 100vh;
  padding-top: 100px;
  background: ${(props) => props.color.bg};
  .animation {
    opacity: 0.1;
    inset: -200%;
    width: 400%;
    height: 400%;
    position: absolute;
    background-size: 256px 256px;
    background-repeat: repeat;
    background: url("${bgImg}");
  }

  @media (max-width: 1000px) {
    min-height: 1050px;
  }
`;

export const TextComponent = styled.div`
  margin-bottom: 50px;
  .text {
    h6 {
      ${(props) => `
      
      color: ${props.color.text2};
      margin-bottom: 20px;
      font-family: "Cairo", sans-serif;
      border-left: 5px solid
        ${props.color.text2};
      border-right: 5px solid
        ${props.color.text2};
      border-top: 1px solid
        ${props.color.text2};
      border-bottom: 1px solid
        ${props.color.text2};
      box-shadow: 0 0 10px 2px
        ${props.color.text2};
      border-radius: 10px;
      outline: 1px solid
        ${props.color.text2};
      outline-offset: 5px;
      width: fit-content;
      padding: 0 5px;
      `}
    }

    h3 {
      color: ${(props) => props.color.text};
      span {
        color: ${(props) => props.color.text2};
      }
    }

    .icon {
      font-size: 2rem;
      margin-right: 5px;
    }

    h5 {
      width: 300px;
      color: ${(props) => props.color.text};
      font-family: "Cairo", sans-serif;
      margin-top: 15px;
      padding-top: 8px;
      border-top: 1px solid;
    }
  }
  @media (max-width: 1000px) {
    margin-bottom: 0px;
    ${(props) =>
      props.checkSaudiFlag ? "margin-right: 300px" : "margin-left: 300px"};

    h6 {
      font-size: ${(props) => (props.checkSaudiFlag ? "1rem" : ".8rem")};
    }

    h3 {
      font-size: ${(props) => (props.checkSaudiFlag ? "1.8rem" : "1.5rem")};
      width: 50%;
    }

    .icon {
      font-size: 1.1rem !important ;
    }

    h5 {
      font-size: ${(props) => (props.checkSaudiFlag ? "1.3em" : "1.1rem")};
      width: 180px !important;
      margin-top: 15px;
      padding-top: 8px;
      border-top: 1px solid;
    }
  }
`;

export const FromComponent = styled.div`
  .FormValidate {
    background-size: cover;
    display: flex;
    justify-content: center;

    .success {
      display: flex;
      color: green;
    }

    .flex {
      display: flex;
    }

    transition: all 1s ease;

    .form {
      position: relative;

      width: 600px;
      height: 480px;

      @keyframes freeRotate {
        0% {
          padding: 10px;
          transform: rotate(40deg);
          width: 10px;
          height: 10px;
          box-shadow: 0 0 10px 3px
            ${(props) => props.color.text2};
        }
        50% {
          padding: 10px;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          transform: rotate(50deg);
          box-shadow: 0 0 10px 3px
            ${(props) => props.color.bg2};
        }
        100% {
          padding: 10px;
          width: 10px;
          height: 10px;
          transform: rotate(40deg);
          box-shadow: 0 0 10px 3px
            ${(props) => props.color.text2};
        }
      }

      @keyframes middleTransition {
        0% {
          padding: 10px;
          transform: rotate(0deg);
          width: 600px;
          height: 480px;
        }

        100% {
          padding: 10px;
          width: 10px;
          height: 10px;
          transform: rotate(40deg);
        }
      }

      @keyframes onceRotate {
        0% {
          width: 10px;
          height: 10px;
          transform: rotate(45deg);
        }
        100% {
          width: 600px;
          height: 480px;
          transform: rotate(0deg);
        }
      }

      ${(props) =>
        props.startPositionForm
          ? `animation: middleTransition 2s ease-in-out 1 ;`
          : props.selectField
          ? `animation: onceRotate 1s ease-in-out 1 `
          : props.noneSelectField &&
            `animation: freeRotate 4s ease-in-out infinite alternate`};

      border-radius: 15px;
      background-color: #ffffff1b;
      box-shadow: 0 0 10px 3px
        ${(props) => props.color.text2};
      -webkit-backdrop-filter: blur(20px);
      backdrop-filter: blur(20px);

        margin-top: 50px;
      .mainStackInForm {
        position: absolute;
        width: 600px;
        height: 480px;
        border-radius: 15px;
        // background-color: #ffffff1b;
        box-shadow: 0 0 10px 1px
          ${(props) => props.color.text2};
        padding: 20px;

        .name-phone-fields {
          display: flex !important;
          flex-direction: row;

          .name-filed {
            width: 45%;
            margin-right: auto;
          }

          .phone-filed {
            width: 45%;
          }
        }

        .submit {
          color: ${(props) => props.color.bg};
          font-size: 1rem;
      font-weight: 800;
          background: ${(props) => props.color.text2};
        }

        .card {
          input {
            display: none;
          }

          label {
            display: flex;
          }
        }

        .loader {
          display: flex;
          justify-content: center;
        }
      }
    }

    @media (max-width: 1000px) {
      .form {
        width: 290px;
        height: 420px;

        @keyframes freeRotate {
        0% {
          padding: 10px;
          transform: rotate(5deg);
          width: 10px;
          height: 10px;
          box-shadow: 0 0 10px 3px
            ${(props) => props.color.text2};
        }
        50% {
          padding: 10px;
          border-radius: 50%;
          width: 10px;
          height: 10px;
          transform: rotate(-5deg);
          box-shadow: 0 0 10px 3px
            ${(props) => props.color.bg3};
        }
        100% {
          padding: 10px;
          width: 10px;
          height: 10px;
          transform: rotate(5deg);
          box-shadow: 0 0 10px 3px
            ${(props) => props.color.text2};
        }
      }

      @keyframes middleTransition {
        0% {
          padding: 10px;
          transform: rotate(0deg);
          width: 290px;
        height: 420px;
        }

        100% {
          padding: 10px;
          width: 10px;
          height: 10px;
          transform: rotate(5deg);
        }
      }

      @keyframes onceRotate {
        0% {
        top: 25px;
          left: -135px;
          width: 10px;
          height: 10px;
          transform: rotate(0deg);
        }
        100% {
        top: 0px;
        left: 0px;
          width: 10px;
          width: 290px;
        height: 420px;
          transform: rotate(0deg);
        }
      }

        .mainStackInForm {
          ${(props) =>
            !props.selectField &&
            `
            top: 25px;
          left: -135px;
            `}
          width: 290px;
          height: 420px;
          .name-phone-fields {
          display: flex !important;
          flex-direction: column;

          .name-filed {
            width: 100%;
            margin-right: auto;
          }

          .phone-filed {
            display: none;
            // width: 100%;
          }
        }
      }
    }
  }
`;
