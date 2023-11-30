import React from "react";
import css from "./BurgerMenu.module.css";
import { nanoid } from "nanoid";
import { ReactComponent as IcoArrow } from "./images/arrow-right.svg";
import { ReactComponent as IcoClose } from "./images/icon_close.svg";
import SocialLinks from "../../SocialLinks/SocialLinks";

const menuItems = [
  { id: "main", label: "Main" },
  { id: "about", label: "About" },
  { id: "service", label: "Service" },
  { id: "cases", label: "Cases" },
  { id: "faq", label: "FAQ" },
  { id: "customers", label: "Customers" },
  { id: "contact-us", label: "Contact Us" },
];

function BurgerMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      onClose();
    }
  };

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.burgerMenu}>
        <div className={css.closeButton} onClick={onClose}>
          <IcoClose /> close
        </div>
        <nav className={css.menu}>
          {menuItems.map((item) => (
            <div
              key={nanoid()}
              className={css.menuItem}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label} <IcoArrow />
            </div>
          ))}
        </nav>
        <div className={css.socialButtons}>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
