import React, { useState, useEffect } from "react";
import { ContactUsElement, ContactUsContainer } from "../utils/constact/styled";
import ContactComponent from "../utils/constact/component";
import { animated, useSpring, easings } from "@react-spring/web";
import { useMediaQuery } from "@mui/material";

export default function ContactUs({ checkDarkMode, checkSaudiFlag }) {
  const [selectField, setSelectField] = useState(false);
  const [noneSelectField, setNoneSelectField] = useState(true);
  const [startPositionForm, setStartPositionForm] = useState(false);
  const [onFocusField, setOnFocusField] = useState(false);

  const isMobile = useMediaQuery('(max-width: 1000px)')

  const { value } = useSpring({
    from: {
      value: 0,
    },
    to: {
      value: 1,
    },
    loop: true,
    config: {
      duration: 20000,
    },
  });

  const handleChangeMotionOfFrom = () => {
    if (selectField && !onFocusField) {
      setStartPositionForm(true);
      setSelectField(false);
      setTimeout(() => {
        setStartPositionForm(false);
        setNoneSelectField(true);
      }, 2000);
    } else {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleChangeMotionOfFrom);

    return () => window.removeEventListener("scroll", handleChangeMotionOfFrom);
  }, [selectField, onFocusField]);

  return (
    <ContactUsContainer>
      <ContactUsElement checkDarkMode={checkDarkMode}>
        <animated.div
          style={{
            x: value.to({
              output: [
                "0%",
                "-5%",
                "-15%",
                "7%",
                "-5%",
                "-15%",
                "15%",
                "0%",
                "3%",
                "-10%",
              ],
            }),
            y: value.to({
              output: [
                "0%",
                "-10%",
                "5%",
                "-25%",
                "25%",
                "10%",
                "0%",
                "15%",
                "35%",
                "10%",
              ],
            }),
          }}
          className="animation"
        ></animated.div>

        <ContactComponent
          className="contact-component"
          checkDarkMode={checkDarkMode}
          checkSaudiFlag={checkSaudiFlag}
          selectField={selectField}
          setSelectField={setSelectField}
          startPositionForm={startPositionForm}
          setStartPositionForm={setStartPositionForm}
          noneSelectField={noneSelectField}
          setNoneSelectField={setNoneSelectField}
          onFocusField = {onFocusField}
          setOnFocusField = {setOnFocusField}
        />
      </ContactUsElement>
    </ContactUsContainer>
  );
}
