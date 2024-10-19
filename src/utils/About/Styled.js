import styled from "styled-components";

export const AboutContainer = styled.div`
  padding: 100px;
  background: ${(props) => props.color.bg};

  h2 {
    color: ${(props) => props.color.text};
    margin-bottom: 30px;
    font-family: "Open Sans", Tahoma, Arial, Helvetica;
  }

  .lamp-icon {
    font-size: 2rem;
    color: ${(props) => props.color.text2};
  }

  h6 {
    color: #585858;
    width: 80%;
    color: ${(props) => props.color.text2};
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
    background: ${(props) => props.color.text};
    color: ${(props) => props.color.bg};
    margin-right: 10px;
  }

  button {
    margin-top: 50px;
    padding: 7px;
    border: none;
    background: ${(props) => props.color.text2};
    color: ${(props) => props.color.bg};
    box-shadow: 0 0 8px 2px ${(props) => props.color.text2};
    font-size: 1rem;
    font-weight: 800;
    transition: all 0.3s ease;
    &:hover {
      transform: scale(1.1);
      opacity: 0.8;
      box-shadow: 0 0 8px 2px ${(props) => props.color.text2};
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
