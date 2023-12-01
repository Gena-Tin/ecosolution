import React from "react";
import Accordion from "./Accordion/Accordion";
import css from "./Faq.module.css";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";
import { ReactComponent as IcoContactUs } from "./images/ellipse.svg";

function Faq() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="faq" className={css.faqSection}>
      <div className="container">
        <div className={css.titleContainer}>
          <SectionTitle title="Frequently Asked Questions" />
        </div>
        <div className={css.accordionContainer}>
          <Accordion />
        </div>
        <div className={css.contactUsContainer}>
          <p>Didn't find the answer to your question?</p>
          <button className={css.buttonGContactUs} onClick={scrollToContact}>
            Contact Us <IcoContactUs />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Faq;
