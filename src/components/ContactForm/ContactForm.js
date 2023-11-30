import React from "react";
import { ReactComponent as IcoArrowRight } from "./images/arrow-right.svg";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <form className={css.formSection}>
      <label className={css.labelStyle} htmlFor="fullName">
        Full Name
      </label>
      <input
        className={css.inputStyle}
        type="text"
        id="fullName"
        name="fullName"
        placeholder="John Rosie"
      />

      <label className={css.labelStyle} htmlFor="email">
        E-mail
      </label>
      <input
        className={css.inputStyle}
        type="email"
        id="email"
        name="email"
        placeholder="johnrosie@gmail.com"
      />

      <label className={css.labelStyle} htmlFor="phone">
        Phone
      </label>
      <input
        className={css.inputStyle}
        type="tel"
        id="phone"
        name="phone"
        placeholder="380961234567"
      />

      <label className={css.labelStyle} htmlFor="message">
        Message
      </label>
      <textarea
        className={css.textAreaStyle}
        id="message"
        name="message"
        placeholder="Your message"
      />

      <button className={css.buttonStyle} type="submit">
        Send
        <div className={css.arrowCircle}>
          <IcoArrowRight />
        </div>
      </button>
    </form>
  );
};

export default ContactForm;
