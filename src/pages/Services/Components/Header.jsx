import React from "react";
import { HeaderContainer, HeaderElement } from "../utils/styled";
import {AR, USA} from '../utils/translation'
import { Typography } from "@mui/material";

const Header = ({ checkDarkMode, checkSaudiFlag, serviceType }) => {

  return (
    <HeaderContainer>
      <HeaderElement checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} serviceType={serviceType} >
        <header>
          <Typography variant="h2">{checkSaudiFlag ? AR.header : USA.header}</Typography>
        </header>
      </HeaderElement>
    </HeaderContainer>
  );
};

export default Header;
