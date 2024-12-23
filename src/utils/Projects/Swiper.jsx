import React, { useEffect, useState, useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import {SwiperContainer,
  SlidesContainer,
  AutoplayContainer,} from './Styled'

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import AOS from "aos";
import "aos/dist/aos.css";

import { useSelector } from "react-redux";

export default function SwiperJs(props) {
  const AlyasmenImages = Array(45).fill(null);
  useEffect(() => {
    AOS.init();
  });

  const theme = useSelector(state=> state.theme)
  const themeMode = useSelector(state=> state[theme])
  const [colors, setColors] = useState(themeMode)
  useEffect(()=> setColors(themeMode), [useSelector(state=> state.theme)])

  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <SwiperContainer color={colors} >
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
        data-aos-duration="1000"
      >
        {AlyasmenImages.map((img, i) => (
            <SwiperSlide>
              <img
                key={i}
                src={`images/favorite/${i + 1}.jpg`}
                alt=""
              />
            </SwiperSlide>
        ))}
        <AutoplayContainer color={colors}>
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </AutoplayContainer>
      </Swiper>
    </SwiperContainer>
  );
}
