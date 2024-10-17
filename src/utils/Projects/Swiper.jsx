import React, {useEffect, useRef} from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./swiper.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { PowerInputSharp } from '@mui/icons-material';

export default function SwiperJs(props) {
  const decorImages = Array(14).fill(null);
  useEffect(()=> {
    AOS.init()
  })

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
        data-aos="fade-up"
        data-aos-duration='1000'
        style={{boxShadow: props.checkDarkMode ? "0 0 10px 3px #EECE95" : "0 0 10px 3px #3a3a3aa3"}}
      >
        {decorImages.map((img, i) => (
          <SwiperSlide>
            <img key={i} src={`images/favorite/favorite${i + 1}.jpg`} alt="" />
          </SwiperSlide>
        ))}
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
