import React from "react";
import css from "./Logo.module.css";
import logoImage from "./images/logo.png";

function Logo() {
  return (
    <div className={css.logo}>
      <img src={logoImage} alt="logo" />
    </div>
  );
}

export default Logo;
