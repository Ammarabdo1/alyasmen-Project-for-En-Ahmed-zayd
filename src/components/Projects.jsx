import React, {useState, useEffect} from 'react'
import { ProjectsContainer } from '../utils/Projects/Styled'
import {AR, USA} from '../utils/Projects/translation'
import { Typography, Grid, Button } from '@mui/material'
import SwiperJs from '../utils/Projects/Swiper'
import { Link } from 'react-router-dom'
//! aos scroll animation
import AOS from "aos";
import "aos/dist/aos.css";

import { useSelector } from 'react-redux'

//! mui icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Projects = (props) => {
  AOS.init()

  const theme = useSelector(state=> state.theme)
  const themeMode = useSelector(state=> state[theme])
  const [colors, setColors] = useState(themeMode)

  useEffect(() => setColors(themeMode) , [useSelector(state=> state.theme)])

  return (
    <ProjectsContainer color={colors} checkDarkMode={props.checkDarkMode} checkSaudiFlag={props.checkSaudiFlag}>
      <Grid container >

        <Grid md={6} sm={12} >
          <div className='text'>
            <div data-aos='zoom-in' data-aos-duration='1000' >
          <Typography variant='h1'> {props.checkSaudiFlag ? AR.title : USA.title} <AutoAwesomeIcon style={{fontSize:'3rem'}} className='icon'/> </Typography>
          <Typography variant='h4'> {props.checkSaudiFlag ? AR.des : USA.des} </Typography>          
            </div>
          <Link to='projects' ><Button variant='contained' data-aos='zoom-in' data-aos-duration='500'>{props.checkSaudiFlag ? AR.btn : USA.btn}</Button></Link>       
          </div>
        </Grid>

        <Grid md={6} sm={12} style={{display:'flex',width:'100%', justifyContent:'center', alignItems:'center'}} >
          <SwiperJs checkDarkMode={props.checkDarkMode}/>
        </Grid>

      </Grid>


        
    </ProjectsContainer>
  )
}

export default Projects