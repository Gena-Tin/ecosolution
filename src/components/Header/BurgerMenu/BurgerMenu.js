import React from "react";
import css from "./BurgerMenu.module.css";
import { nanoid } from "nanoid";
import { ReactComponent as IcoInstagram } from "./images/instagram.svg";
import { ReactComponent as IcoFacebook } from "./images/facebook.svg";
import { ReactComponent as IcoArrow } from "./images/arrow-right.svg";
import { ReactComponent as IcoClose } from "./images/icon_close.svg";

const menuItems = [
  { id: "main", label: "Main" },
  { id: "about", label: "About" },
  { id: "service", label: "Service" },
  { id: "cases", label: "Cases" },
  { id: "faq", label: "FAQ" },
  { id: "customers", label: "Customers" },
  { id: "contact-us", label: "Contact Us" },
];

const socialLinks = [
  {
    id: "facebook",
    url: "https://facebook.com/",
    icon: <IcoFacebook />,
  },
  {
    id: "instagram",
    url: "https://www.instagram.com/",
    icon: <IcoInstagram />,
  },
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
          {socialLinks.map((link) => (
            <a
              key={nanoid()}
              className={css.socialButtonsItem}
              href={link.url}
              target="_blank"
              rel="noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
