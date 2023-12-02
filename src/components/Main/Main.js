import React from "react";
import css from "./Main.module.css";
import { ReactComponent as IcoArrowRight } from "./images/arrow-right.svg";

function Main() {
  const scrollToCases = () => {
    const casesSection = document.getElementById("cases");
    if (casesSection) {
      casesSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="main" className={css.mainSection}>
      <div className="container">
        <div className={css.content}>
          <div className={css.titleContainer}>
            <h1 className={css.title}>RENEWABLE ENERGY For any task</h1>
          </div>
          <div className={css.textContainer}>
            <p className={css.text}>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </p>
            <div className={css.buttonContainer}>
              <button className={css.buttonStyle} onClick={scrollToCases}>
                LearnMore
                <div className={css.arrowCircle}>
                  <IcoArrowRight />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className={css.contactsContainer}>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
          <p>office@ecosolution.com</p>
          <p className={css.tradeMark}>ecosolution © 2023</p>
        </div>
        <div className={css.heroImg}></div>
      </div>
    </section>
  );
}

export default Main;
