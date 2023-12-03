import React from "react";
import css from "./Values.module.css";
import { ReactComponent as IcoOpeness } from "./images/maximize-circle.svg";
import { ReactComponent as IcoResponsibility } from "./images/global-edit.svg";
import { ReactComponent as IcoInnovation } from "./images/cpu-charge.svg";
import { ReactComponent as IcoQuality } from "./images/ranking.svg";

function Values() {
  return (
    <div className={css.valuesContainer}>
      <ul className={css.valuesList}>
        <li className={css.valuesItem}>
          <div className={css.card}>
            <IcoOpeness />
            <span className={css.cardTitle}>Openness</span>
            <p className={css.cardText}>
              to the world, people, new ideas and projects
            </p>
          </div>
        </li>
        <li className={css.valuesItem}>
          <div className={css.card}>
            <IcoResponsibility />
            <span className={css.cardTitle}>Responsibility</span>
            <p className={css.cardText}>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </p>
          </div>
        </li>
        <li className={`${css.valuesItem} ${css.itemImage}`}>
          <div className={css.imageSolar}></div>
        </li>
        <li className={`${css.valuesItem} ${css.itemImage}`}>
          <div className={css.imageWind}></div>
        </li>
        <li className={css.valuesItem}>
          <div className={css.card}>
            <IcoInnovation />
            <span className={css.cardTitle}>Innovation</span>
            <p className={css.cardText}>
              we use the latest technology to implement non-standard solutions{" "}
            </p>
          </div>
        </li>
        <li className={css.valuesItem}>
          <div className={css.card}>
            <IcoQuality />
            <span className={css.cardTitle}>Quality</span>
            <p className={css.cardText}>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Values;
