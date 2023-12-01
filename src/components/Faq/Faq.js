import React from "react";
import Accordion from "./Accordion/Accordion";
import css from "./Faq.module.css";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";

function Faq() {
  return (
    <section id="faq" className={css.faqSection}>
      <div className="container">
        <div className={css.titleContainer}>
          <SectionTitle title="Frequently Asked Questions" />
        </div>
        <div className={css.accordionContainer}>
          <Accordion />
        </div>
      </div>
    </section>
  );
}

export default Faq;
