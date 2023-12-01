import React from "react";
import Logo from "../CommonComponents/Logo/Logo";
import css from "./Footer.module.css";
import SocialLinks from "../CommonComponents/SocialLinks/SocialLinks";
import { ReactComponent as IcoArrowTop } from "./images/arrow-top.svg";

function Footer() {
  const scrollToMain = () => {
    const contactSection = document.getElementById("main");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className={css.footerSection}>
      <div className="container">
        <div className={css.footerContent}>
          <Logo />
          <button className={css.buttonScrollToMain} onClick={scrollToMain}>
            <IcoArrowTop />
          </button>
          <div className={css.socialLinks}>
            <SocialLinks />
          </div>
          <div className={css.contactsBlock}>
            <a
              href="https://maps.app.goo.gl/VetCRL1nfsCvXd8i7"
              target="_blank"
              rel="noreferrer"
            >
              79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
            </a>
            <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
            <span>ecosolution © 2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
