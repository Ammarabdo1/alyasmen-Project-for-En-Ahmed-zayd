import React from 'react'
import { ProjectsContainer } from '../utils/Projects/Styled'
import { Typography, Grid, Button } from '@mui/material'
import SwiperJs from '../utils/Projects/Swiper'
import { Link } from 'react-router-dom'
//! aos scroll animation
import AOS from "aos";
import "aos/dist/aos.css";

//! mui icons
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Projects = (props) => {
  AOS.init()
  return (
    <ProjectsContainer checkDarkMode={props.checkDarkMode} checkSaudiFlag={props.checkSaudiFlag}>
      <Grid container >

        <Grid md={6} sm={12} >
          <div className='text'>
            <div data-aos='zoom-in' data-aos-duration='1000' >
          <Typography variant='h1'> {props.checkSaudiFlag ? 'البعض من مشاريعنا' : "Some of our projects"} <AutoAwesomeIcon style={{fontSize:'3rem'}} className='icon'/> </Typography>
          <Typography variant='h4'> {props.checkSaudiFlag ? '  تصميم داخلي مميز مصمم خصيصا لتلبية احتياجاتكم وتفضيلاتكم الخاصة ' : "Distinctive interior design tailored to meet your specific needs and preferences."} </Typography>          
            </div>
          <Link to='projects' ><Button variant='contained' data-aos='zoom-in' data-aos-duration='500'>{props.checkSaudiFlag ? 'المزيد' : "more"}</Button></Link>       
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