import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import logoImage from "./images/logo.png";
import { ReactComponent as IcoMenu } from "./images/menu.svg";
import { ReactComponent as IcoGetInTouch } from "./images/ellipse.svg";

import css from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-us");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="container">
        <div className={css.headerSection}>
          <div className={css.logo}>
            <img src={logoImage} alt="logo" />
          </div>
          <BurgerMenu isOpen={isMenuOpen} onClose={closeMenu} />
          <div className={css.navButtons}>
            <button className={css.buttonMenu} onClick={openMenu}>
              <IcoMenu />
            </button>
            <button className={css.buttonGetInTouch} onClick={scrollToContact}>
              Get in touch <IcoGetInTouch />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
