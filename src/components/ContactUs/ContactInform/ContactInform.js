import React from "react";
import { ReactComponent as IcoPhone } from "./images/call.svg";
import { ReactComponent as IcoEmail } from "./images/email.svg";
import { ReactComponent as IcoMap } from "./images/map.svg";
import css from "./ContactInform.module.css";
import SocialLinks from "../../CommonComponents/SocialLinks/SocialLinks";

function ContactInform() {
  return (
    <div className={css.contactSection}>
      <ul className={css.contactList}>
        <li className={css.listItem}>
          <span className={css.itemName}>Phone:</span>
          <a className={css.itemLink} href="tel:380981234567">
            <div className={css.itemIco}>
              <IcoPhone />
            </div>
            <span>38 (098) 12 34 567</span>
          </a>
          <a className={css.itemLink} href="tel:380931234567">
            <div className={css.itemIco}>
              <IcoPhone />
            </div>
            <span>38 (093) 12 34 567</span>
          </a>
        </li>
        <li className={css.listItem}>
          <span className={css.itemName}>E-mail:</span>
          <a className={css.itemLink} href="mailto:office@ecosolution.com">
            <div className={css.itemIco}>
              <IcoEmail />
            </div>
            office@ecosolution.com
          </a>
        </li>
        <li className={css.listItem}>
          <span className={css.itemName}>Address:</span>

          <a
            className={css.itemLink}
            href="https://maps.app.goo.gl/VetCRL1nfsCvXd8i7"
            target="_blank"
            rel="noreferrer"
          >
            <div className={css.itemIco}>
              <IcoMap />
            </div>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </a>
        </li>
        <li className={css.listItem}>
          <span className={css.itemName}>Social Networks:</span>
          <div className={css.socialLinksContainer}>
            <SocialLinks />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ContactInform;
