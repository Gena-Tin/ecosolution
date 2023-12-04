import React, { useEffect, useState } from "react";
import { ReactComponent as IcoArrowRight } from "./images/arrow-right.svg";

import css from "./ContactForm.module.css";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [fullNameDirty, setFullNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [phoneDirty, setPhoneDirty] = useState(false);

  const [fullNameError, setFullnameError] = useState("This field is required!");
  const [emailError, setEmailError] = useState("This field is required!");
  const [phoneError, setPhoneError] = useState("This field is required!");

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (fullNameError || emailError || phoneError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [fullNameError, emailError, phoneError]);

  const fullNameHandler = (e) => {
    setFullName(e.target.value);
    if (e.target.value.length < 3 || e.target.value > 25) {
      setFullnameError("Wrong name!!!");
      if (!e.target.value) {
        setFullnameError("This field is required!!!");
      }
    } else {
      setFullnameError("");
    }
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const reg =
      '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@(([^<>()[\\]\\\\.,;:\\s@"]+\\.)+[^<>()[\\]\\\\.,;:\\s@"]{2,})$';
    const re = new RegExp(reg, "i");

    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Wrong email!!!");
      if (!e.target.value) {
        setEmailError("This field is required!!!");
      }
    } else {
      setEmailError("");
    }
  };

  const phoneHandler = (e) => {
    const cleanedInput = e.target.value.replace(/\D/g, "");
    if (cleanedInput.length > 12 || cleanedInput.length < 6) {
      setPhoneError("Wrong phone!!!");
      if (!e.target.value) {
        setPhoneError("This field is required!!!");
      }
    } else {
      setPhoneError("");
    }
    setPhone(cleanedInput);
  };

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "fullName":
        setFullNameDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "phone":
        setPhoneDirty(true);
        break;
      default:
    }
  };

  return (
    <form className={css.formSection}>
      <label className={css.labelStyle} htmlFor="fullName">
        * Full Name
      </label>
      <div className={css.inputContainer}>
        <input
          onChange={(e) => fullNameHandler(e)}
          value={fullName}
          onBlur={(e) => blurHandler(e)}
          className={`${css.inputStyle} ${
            fullNameDirty && fullNameError ? css.error : ""
          }`}
          type="text"
          id="fullName"
          name="fullName"
          placeholder="John Rosie"
        />

        {fullNameDirty && fullNameError && (
          <div className={css.errorMessage}>{fullNameError}</div>
        )}
      </div>

      <label className={css.labelStyle} htmlFor="email">
        * E-mail
      </label>
      <div className={css.inputContainer}>
        <input
          value={email}
          onChange={(e) => emailHandler(e)}
          onBlur={(e) => blurHandler(e)}
          className={`${css.inputStyle} ${
            emailDirty && emailError ? css.error : ""
          }`}
          type="email"
          id="email"
          name="email"
          placeholder="johnrosie@gmail.com"
        />
        {emailDirty && emailError && (
          <div className={css.errorMessage}>{emailError}</div>
        )}
      </div>

      <label className={css.labelStyle} htmlFor="phone">
        * Phone
      </label>
      <div className={css.inputContainer}>
        <input
          value={phone}
          onChange={(e) => phoneHandler(e)}
          onBlur={(e) => blurHandler(e)}
          className={`${css.inputStyle} ${
            phoneDirty && phoneError ? css.error : ""
          }`}
          type="tel"
          id="phone"
          name="phone"
          placeholder="380961234567"
        />
        {phoneDirty && phoneError && (
          <div className={css.errorMessage}>{phoneError}</div>
        )}
      </div>
      <label className={css.labelStyle} htmlFor="message">
        Message
      </label>

      <textarea
        className={css.textAreaStyle}
        id="message"
        name="message"
        placeholder="Your message"
      />
      <div className={css.buttonContainer}>
        <button disabled={!formValid} className={css.buttonStyle} type="submit">
          Send
          <div className={css.arrowCircle}>
            <IcoArrowRight />
          </div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
