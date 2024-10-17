import styled from "styled-components";

export const ProjectsContainer = styled.div`
  padding: ${(props) =>
    props.checkSaudiFlag ? "100px 100px 100px 0" : "100px 0px 100px 100px"};
  background-image: radial-gradient(
    ${(props) =>
      props.checkDarkMode
        ? "circle at center, #bcbcbc, #585858"
        : "circle at center, white, #eecd95ae"}
  );

  .text {
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: center;
    h1 {
      font-size: 5rem;
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      margin-bottom: 30px;
      color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    }

    h4 {
      font-family: "Open Sans", Tahoma, Arial, Helvetica;
      width: 70%;
      color: ${(props) => (props.checkDarkMode ? "#E5E5E5" : "#585858")};
    }
    Button {
      width: fit-content;
      margin-top: 50px;
      color: white;
      padding: 7px;
      border: none;
      box-shadow: 0 0 12px 4px
        ${(props) => (props.checkDarkMode ? "#bcbcbc" : "#000000a1")};
      background: ${(props) => (props.checkDarkMode ? "#bf9752e0" : "#003641")};
      transition: all 0.3s ease;
      &:hover {
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
