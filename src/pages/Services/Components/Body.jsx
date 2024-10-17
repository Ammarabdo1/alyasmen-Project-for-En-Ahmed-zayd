import * as React from "react";
import { AR, USA } from "../utils/translation";
import {BodyComponent} from '../utils/styled'
import ImagesList, { CustomTabPanel, ServiceDetails, a11yProps } from "../utils/components";

import PropTypes from "prop-types";
import { Tabs, Tab, Box, Grid, Button, Typography } from "@mui/material";

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function Body({ checkDarkMode, checkSaudiFlag, serviceType, setSearchParams }) {

  const ServicesNumber = {
    outer: 0,
    internal: 1,
    landscape: 2,
    area: 3,
    finish: 4,
    build: 5,
    look: 6,
  }

  const imagesNumber = {
    outer: 8,
    internal: 18,
    landscape: 12,
    area: 2,
    finish: 7,
    build: 6,
    look: 12,
  }

  const [value, setValue] = React.useState(ServicesNumber[serviceType] || -1 );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BodyComponent serviceType={serviceType} checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} >
      <Box className='services-container' >
        <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
            className="all-items" 
          >
            <Tab label={checkSaudiFlag ? AR.outer : USA.outer} {...a11yProps(0)} onClick={()=>setSearchParams({ service: 'outer' })} />
            <Tab label={checkSaudiFlag ? AR.internal : USA.internal} {...a11yProps(1)} onClick={()=>setSearchParams({ service: 'internal' })} />
            <Tab label={checkSaudiFlag ? AR.landscape : USA.landscape} {...a11yProps(2)} onClick={()=>setSearchParams({ service: 'landscape' })} />
            <Tab label={checkSaudiFlag ? AR.area : USA.area} {...a11yProps(3)} onClick={()=>setSearchParams({ service: 'area' })} />
            <Tab label={checkSaudiFlag ? AR.finish : USA.finish} {...a11yProps(4)} onClick={()=>setSearchParams({ service: 'finish' })} />
            <Tab label={checkSaudiFlag ? AR.build : USA.build} {...a11yProps(5)} onClick={()=>setSearchParams({ service: 'build' })} />
            <Tab label={checkSaudiFlag ? AR.look : USA.look} {...a11yProps(6)} onClick={()=>setSearchParams({ service: 'look' })} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={ServicesNumber[serviceType]} >
          <ServiceDetails checkDarkMode={checkDarkMode} checkSaudiFlag={checkSaudiFlag} serviceType={serviceType} imageNumber={imagesNumber[serviceType]} />
        </CustomTabPanel>
      </Box>
    </BodyComponent>
  );
}
