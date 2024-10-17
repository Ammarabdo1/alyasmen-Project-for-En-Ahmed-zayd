import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 100px;
  background: ${(props) => (props.checkDarkMode ? "#E5E5E5" : "white")};

  h2 {
    color: ${(props) => (props.checkDarkMode ? "#EECE95" : "#003641")};
    margin-bottom: 30px;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }

  .lamp-icon {
    font-size: 2rem;
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

    .img-container {
      margin: 100px auto;
      text-align: center;
      width: 90%;
    }
  }
`;
