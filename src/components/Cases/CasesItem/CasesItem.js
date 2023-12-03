import React from "react";
import css from "./CasesItem.module.css";
import { ReactComponent as IcoArrow } from "./images/arrow-upRight.svg";

function CasesItem({ slide }) {
  return (
    <>
      <div className={css.card}>
        <div className={css.cardImage}>
          <img src={slide.image} alt={slide.description} />
        </div>
        <div className={css.cardTextBlock}>
          <div className={css.cardTitleBlock}>
            <p className={css.cardTitle}>{slide.title}</p>
            <div className={css.cardButton}>
              <IcoArrow />
            </div>
          </div>
          <div className={css.cardDescriptionBlock}>
            <p className={css.cardDescription}>{slide.description} </p>
            <p className={css.cardDate}>{slide.date}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CasesItem;
