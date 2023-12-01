import React, { useState, useEffect } from "react";
import css from "./Electricity.module.css";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";

function Electricity() {
  const [counter, setCounter] = useState(
    Math.floor((Date.now() - new Date("1980-01-01").getTime()) / 1000)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedCounter = counter
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return (
    <section id="service" className={css.electricitySection}>
      <div className="container">
        <div className={css.titleContainer}>
          <SectionTitle
            title="Electricity we produced for all time"
            alignCenter="true"
          />
        </div>
        <div className={css.content}>
          <div className={css.counterBlock}>
            <span className={css.counter}>{formattedCounter}</span>
            <span className={css.counterUnits}>kWh</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Electricity;
