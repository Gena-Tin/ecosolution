import React from "react";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";
import css from "./About.module.css";
import Values from "./Values/Values";

function About() {
  return (
    <section id="about" className={css.aboutSection}>
      <div className="container">
        <div className={css.aboutSectionHeader}>
          <div className={css.titleContainer}>
            <SectionTitle title="Main values of our company" />
          </div>
          <div className={css.textContainer}>
            <p className={css.text}>
              EcoSolution envisions a world where sustainable energy solutions
              power a brighter and cleaner future for all. We aspire to be at
              the forefront of the global shift towards renewable energy,
              leading the way in innovative technologies that harness the power
              of nature to meet the world's energy needs.
            </p>
          </div>
        </div>

        <div className={css.content}>
          <Values />
        </div>
      </div>
    </section>
  );
}

export default About;
