import React from "react";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";
import css from "./Cases.module.css";
import { ReactComponent as IcoArrow } from "./images/arrow-upRight.svg";
import { ReactComponent as IcoArrowRight } from "./images/arrow-right.svg";
import { ReactComponent as IcoArrowLeft } from "./images/arrow-left.svg";

import imgWindTurbines from "./images/beautiful-view-wind-turbines-grass-covered-field-captured-holland.png";
// import imgSolarPanels from "./images/beautiful-view-solarPanels-grass-covered-field-captured-holland.png";

function Cases() {
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
                <span>2 </span>
                <span>/ 5</span>
              </div>
            </div>
            <div className={css.controlButtonsBlock}>
              <div className={css.controlButton}>
                <IcoArrowLeft />
              </div>
              <div className={css.controlButton}>
                <IcoArrowRight />
              </div>
            </div>
          </div>
        </div>
        <div className={css.content}>
          <div className={css.card}>
            <div className={css.cardImage}>
              <img src={imgWindTurbines} alt="WindTurbines" />
            </div>
            <div className={css.cardTextBlock}>
              <div className={css.cardTitleBlock}>
                <p className={css.cardTitle}>
                  Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
                </p>
                <div className={css.cardButton}>
                  <IcoArrow />
                </div>
              </div>
              <div className={css.cardDescriptionBlock}>
                <p className={css.cardDescription}>
                  Wind Power for auto field irrigation
                </p>
                <p className={css.cardDate}>July 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cases;
