import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 8vh;
  position: fixed;
  top: 0;
  left 0;
  z-index: 1000;
  ${(props) =>
    props.checkScroll &&
    `
    background: ${props.color.bg};
    box-shadow: 0px 0px 18px 8px ${props.color.bg};
    `}
`;

export const NavbarList = styled.ol`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-around;
  height: 100px;
  align-items: center;
  list-style-type: none;
`;

export const NavbarLogo = styled.div`
  height: 100%;
  display: flex;
  algin-items: start;
  img {
    margin-top: 5px;
    width: 100px;
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  li {
    a.link1 {
      margin: 0 3vw;
      ${(props) => `
        background-image: linear-gradient(to right, ${props.color.text}, ${props.color.link1} 50%, ${props.color.bg2} 50%);
      background-size: 200% 100%;
      background-position: 0;
      display: inline-block;
      padding: 5px 0;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.3s ease-in-out;
        `}
      &:before {
        content: "";
        background: $default-color;
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 100%;
        height: 3px;
        transition: all 0.3s ease-in-out;
      }
    }
    a.link {
      margin: 0 1vw;

      ${(props) => `
      background-image: linear-gradient(
        to right,
        ${props.color.bg2},
        ${props.color.text2} 50%,
        ${props.color.text} 50%
      );
      background-size: 200% 100%;
      background-position: -100%;
      display: inline-block;
      padding: 5px 0;
      position: relative;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.3s ease-in-out;        
        `}

      &:before {
        content: "";
        background: ${(props) => props.color.text};
        display: block;
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 3px;
        transition: all 0.3s ease-in-out;
      }

      &:hover {
        background-position: 0;
      }

      &:hover::before {
        width: 100%;
      }

      &:focus {
        background-position: 0;
      }

      &:focus::before {
        width: 100%;
      }
    }
  }
`;

export const NavbarActions = styled.div`
  display: flex;
`;
