import React, { useState, useRef } from "react";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";
import css from "./Cases.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

import { ReactComponent as IcoArrowRight } from "./images/arrow-right.svg";
import { ReactComponent as IcoArrowLeft } from "./images/arrow-left.svg";

import imgWindTurbines from "./images/beautiful-view-wind-turbines-grass-covered-field-captured-holland.png";
import imgSolarPanels from "./images/beautiful-view-solarPanels-grass-covered-field-captured-holland.png";
import imgTransform from "./images/beautiful-view-transform-grass-covered-field-captured-holland.png";
import imgWindmills from "./images/landscape-with-windmills.png";
import imgNuclear from "./images/nuclear-power-plant-center-spain.png";
import CasesItem from "./CasesItem/CasesItem";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const slides = [
  {
    image: imgWindTurbines,
    title: "Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”",
    description: "Wind Power for auto field irrigation",
    date: "July 2023",
  },
  {
    image: imgSolarPanels,
    title: "Zhytomyr city Private Enterprise “Bosch”",
    description: "Solar Panels for industrial use",
    date: "November 2023",
  },
  {
    image: imgTransform,
    title: "Rivne city Private Enterprise “Biotech”",
    description: "Thermal modules",
    date: "October 2023",
  },
  {
    image: imgWindmills,
    title: "Kherson city Private Enterprise “HealthyFarm”",
    description: "Wind power",
    date: "September 2021",
  },
  {
    image: imgNuclear,
    title: "Zaporizhia city Private Enterprise “Biotech”",
    description: "Mini nuclear stations",
    date: "May 2021",
  },
];

const swiperSettings = {
  spaceBetween: 24,
  slidesPerView: 1,
  loop: true,
  initialSlide: 0,
  speed: 500,

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
  navigation: {
    nextEl: ".swiperNextBtn",
    prevEl: ".swiperPrevBtn",
  },
  a11y: {
    prevSlideMessage: "Previous slide",
    nextSlideMessage: "Next slide",
  },
};

function Cases() {
  const swiperRef = useRef(null);
  const [slideNumber, setSlideNumber] = useState(1);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      setSlideNumber(swiperRef.current.swiper.realIndex + 1);
    }
  };
  return (
    <section id="cases" className={css.casesSection}>
      <div className="container">
        <div className={css.casesSectionHeader}>
          <div className={css.titleContainer}>
            <SectionTitle title="Successful cases of our company" />
          </div>
          <div className={css.controlContainer}>
            <div className={css.controlCounterBlock}>
              <div className={css.controlCounter}>
                <span>{`${slideNumber.toString().padStart(2, 0)}`}</span>
                <span> / {`${slides.length.toString().padStart(2, 0)}`}</span>
              </div>
            </div>
            <div className={css.controlButtonsBlock}>
              <div className={`${css.controlButton} ${`swiperPrevBtn`}`}>
                <IcoArrowLeft />
              </div>
              <div className={`${css.controlButton} ${`swiperNextBtn`}`}>
                <IcoArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <Swiper
            ref={swiperRef}
            onSlideChange={handleSlideChange}
            {...swiperSettings}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <CasesItem slide={slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Cases;
