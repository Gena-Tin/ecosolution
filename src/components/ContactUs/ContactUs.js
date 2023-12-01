import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import SectionTitle from "../CommonComponents/SectionTitle/SectionTitle";
import ContactInform from "./ContactInform/ContactInform";
import css from "./ContactUs.module.css";

function ContactUs() {
  return (
    <section id="contact-us" className={css.contactUsSection}>
      <div className="container">
        <SectionTitle title="Contact Us" alignCenter="true" />
        <div className={css.content}>
          <ContactInform />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
