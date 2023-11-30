import React from "react";
import { ReactComponent as IcoInstagram } from "./images/instagram.svg";
import { ReactComponent as IcoFacebook } from "./images/facebook.svg";
import { nanoid } from "nanoid";
import css from "./SocialLinks.module.css";

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

function SocialLinks() {
  return (
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
  );
}

export default SocialLinks;
