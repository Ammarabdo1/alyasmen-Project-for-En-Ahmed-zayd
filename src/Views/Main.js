import { useEffect } from "react";
import About from "../components/About";
// import Media from "../components/Media";
import Projects from "../components/Projects";
import Services from "../components/Services";
import ViewHeader from "../components/ViewHeader";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useLocation } from "react-router-dom";

const Main = (props) => {

  const {pathname} = useLocation();

  useEffect(()=> window.scrollTo(0, 0) ,[pathname])

  AOS.init()
  return (
    <div data-aos='fade-down' data-aos-duration='2000'>
      <ViewHeader checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      {/* <Media/> */}
      <About checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Projects checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
      <Services checkSaudiFlag={props.checkSaudiFlag} checkDarkMode={props.checkDarkMode} />
    </div>
  );
};
export default Main;
