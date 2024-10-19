import React from "react";
import { HeaderContainer, HeaderElement } from "../utils/styled";
import {AR, USA} from '../utils/translation'
import { Typography } from "@mui/material";

const Header = ({ checkDarkMode, checkSaudiFlag, colors }) => {
  return (
    <HeaderContainer>
      <HeaderElement color={colors} checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} >
        <header>
          <Typography variant="h2">{checkSaudiFlag ? AR.header : USA.header}</Typography>
        </header>
      </HeaderElement>
    </HeaderContainer>
  );
};

export default Header;
